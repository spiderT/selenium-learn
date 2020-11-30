const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://www.baidu.com");
  await driver.findElement(By.id("kw")).sendKeys("selenium");
  await driver.findElement(By.id("su")).click();
  await driver.quit();
})();
