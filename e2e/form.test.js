import puppeteer from 'puppeteer';

describe('form with popovers', () => {
  let browser = null;
  let page = null;
  
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  test('popover should be shown', async () => {
    jest.setTimeout(30000);

    await page.goto(baseUrl);

    await page.waitForSelector('.form');

    const form = await page.$('.form');
    const button = await form.$('.btn');

    await button.click();

    await page.waitForSelector('.popover-element');
    console.log("popover has shown");
  });

  afterAll(async () => {
    await browser.close();
  });
});