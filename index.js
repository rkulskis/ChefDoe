const puppeteer = require('puppeteer');
const { PassThrough } = require('stream');
const { buffer } = require('stream/consumers');

const amazon_url = 'https://www.amazon.com';

async function initBrowser(){
  const browser = await puppeteer.launch({headless: true});
  return browser;
}

// user_id can be either a phone number or an email, password is their password to their amazon prime account
async function signInUser(page, user_id='bob', user_password='1234') {
  const signInLink = await page.evaluate(
    () => 
      Array.from(
      document.querySelectorAll('a[href^="https://www.amazon.com/ap/signin"]'),
      a => a.getAttribute('href')
      )
  );
  await page.goto(signInLink[0]);
  await page.type('#ap_email',user_id);
  await page.click('#continue');
  await page.waitForNavigation();

  // test: user_id is correct
  try {
    await page.type('#ap_password', user_password);
  } catch (err) {
    throw "incorrect user_id. Check for any typos. You may enter the phone number or email associated with your prime account.";
  }
  
  // test: user_password is correct
  try {
    await page.click('#signInSubmit');
  } catch (err) {
    throw "incorrect user_password. Check for any typos.";
  }
}
async function queryItem(page,item){
  await page.type('#twotabsearchtextbox.nav-input.nav-progressive-attribute',item);
  await page.click('#nav-search-submit-button');
  await page.waitForNavigation();
  const href = await page.evaluate(
    () => 
      Array.from(
      document.querySelector('div[cel_widget_id=MAIN-SEARCH_RESULTS-2]').querySelector('span[data-component-type="s-product-image"]').querySelectorAll('a[href]'),
      a => a.getAttribute('href')
      )
  );
  await page.goto(amazon_url + href[0]);
}
async function addItemToCart(page) {
  await page.click('#freshAddToCartButton');
}

async function navBarHandler(page) {
  await page.select('#searchDropdownBox', 'search-alias=wholefoods');
}

async function initSearch(page) {
  const input = await page.$('#twotabsearchtextbox');
  await input.click({ clickCount: 3 })
}

async function itemHandler(page,item) {
  await queryItem(page,item);
  await addItemToCart(page);
  await initSearch(page);
}

async function checkOut(page) {
  await page.click('#nav-cart');
  await page.waitForSelector('input[data-feature-id="proceed-to-checkout-action"]');
  await page.waitForTimeout(1000);
  await page.click('input[data-feature-id="proceed-to-checkout-action"]');
  // pass before you checkout page
  await page.waitForSelector('span[class="a-button-inner"]');
  await page.click('span[class="a-button-inner"]');
  // pass substitution preferences page
  await page.waitForSelector('#subsContinueButton > span');
  await page.click('#subsContinueButton > span');

  // pass shipping & payment
  await page.waitForSelector('#shipoption-select > div > div > div > div > div.ufss-overview-container > div.ufss-overview-right-container > div > span > span > span');
  await page.waitForTimeout(1000);
  await page.click('#shipoption-select > div > div > div > div > div.ufss-overview-container > div.ufss-overview-right-container > div > span > span > span');
  // pass payment method
  await page.waitForSelector('#order-summary-container > div > div > div > div:nth-child(1) > span > span');
  await page.click('#order-summary-container > div > div > div > div:nth-child(1) > span > span');
  // place order
  await page.waitForSelector('#placeYourOrder > span');
  await page.click('#placeYourOrder > span');

}
async function purchaseItems(items,user_id,user_password){
  // test for whether items is empty
  if(items.length == 0) {
    throw "items cannot be empty!";
  }
  const browser = await initBrowser();
  const page = await browser.newPage();
  await page.goto(amazon_url);
  await signInUser(page,user_id,user_password);
  await page.waitForNavigation();
  await navBarHandler(page);
  for(let i = 0; i < items.length; i++) {
    await itemHandler(page, items[i]);
  }
  await checkOut(page);
  await browser.close();
}

// stuck on
{/* <span class="a-button-inner">
<input class="a-button-input" type="submit">
<span class="a-button-text" aria-hidden="true">
Continue
</span></span> */}

{/* <span class="a-button-inner">
<input class="a-button-input" type="submit" aria-labelledby="subsContinueButton-announce">
<span id="subsContinueButton-announce" class="a-button-text a-text-center" aria-hidden="true">
Continue
</span></span> */}
