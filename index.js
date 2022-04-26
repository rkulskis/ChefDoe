const puppeteer = require('puppeteer');
const { PassThrough } = require('stream');
const { buffer } = require('stream/consumers');

const amazon_url = 'https://www.amazon.com';

async function initBrowser(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(amazon_url);
  return page;
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
  await page.click('input[data-feature-id="proceed-to-checkout-action"]');
  await page.waitForSelector('span[class="a-button-inner"]');
  await page.click('span[class="a-button-inner"]');
  await page.waitForSelector('span[class="a-button-inner"]');
  await page.click('span[class="a-button-inner"]');
  await page.waitForSelector('span[class="a-button-inner"]');
  await page.click('span[class="a-button-inner"]');
  // await page.waitForSelector('span[class="a-button-inner"]');
  // await page.click('span[class="a-button-inner"]');
  await page.waitForSelector('div[class="ufss-overview-selection-text-container"]');
  const ETA = await page.evaluate(() => document.querySelector('div[class="ufss-overview-selection-text-container"]').textContent);
  console.log('Page title = ' + ETA);
  const test = await page.waitForSelector('h3[class="ufss-grid-row-title"]');
  const test_text = await test.evaluate(el => el.textContent);
  console.log(test_text);
}
async function purchaseItems(items,user_id,user_password){
  const page = await initBrowser();
  await signInUser(page,user_id,user_password);
  await page.waitForNavigation();
  await navBarHandler(page);
  await itemHandler(page,'yellow onion')
  await checkOut(page);
}
purchaseItems([],'rkulskis@gmail.com','TurtleBurger1$');
