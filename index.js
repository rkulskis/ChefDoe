const puppeteer = require('puppeteer');

const amazon_url = 'https://www.amazon.com';

async function initBrowser(){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(amazon_url);
  return page;
}

async function queryItem(page,item){
  await page.type('#twotabsearchtextbox.nav-input.nav-progressive-attribute',item);
  await page.click('#nav-search-submit-button');
  await page.waitForNavigation();
  // const href = await page.$eval('a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal', (elm) => elm.href);
  // const href = await page.$eval('a.a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal', a => a.getAttribute('href'));
}
// async function addToCart(page){
//   await page.
// }

async function checkOut(){
  const page = await initBrowser();
  queryItem(page,'yello onion');
}

checkOut()
