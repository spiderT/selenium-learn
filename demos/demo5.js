let webdriver = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let proxy = require("selenium-webdriver/proxy");
let opts = new chrome.Options();

(async function example() {
  opts.setProxy(proxy.manual({ http: "<HOST:PORT>" }));
  let driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(opts)
    .build();
  try {
    await driver.get("https://selenium.dev");
  } finally {
    await driver.quit();
  }
})();
