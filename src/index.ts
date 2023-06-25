import {Builder, By } from 'selenium-webdriver';
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();

export const main = async () => {
    const client = await setUpBrowser();
    try {
      await googleHomePage(client);
    } catch (error) {
      console.log(`error opening url: ${error}`);
    }
  };

  export const pause = (microseconds = 100) => {
    const dt = new Date().getTime();
    while( (new Date().getTime() - dt) < microseconds ) {
      /* sleeping */
    }
  }

  export const setUpBrowser = async () => {
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options.setPageLoadStrategy('eager'))
        .build();
    return driver;
  }

  export const googleHomePage = async (client: any) => {
    await client.get('https://www.google.com');

    await enterSearchItem(client);
  }

  export const enterSearchItem = async (client: any) => {
    const searchInputField = await client.findElement(By.id('APjFqb'));
    pause(3000);
    searchInputField.sendKeys('Mars surface temperature');
    pause(3000);
   await clickOnSearchButton(client);
  }

  export const clickOnSearchButton = async (client: any) => {
    const searchButtonn = await client.findElement(By.className('gNO89b'));
    pause(3000);
    searchButtonn.click();
  }
  
  main();