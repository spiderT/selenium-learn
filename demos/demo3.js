const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const assert = require('assert');

const file_path = "file:///" + __dirname + "/demo3.html";

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get(file_path);
  const element = driver.findElement(By.css("p"));
  assert.strictEqual(await element.getText(), "Hello from JavaScript!");
})();
