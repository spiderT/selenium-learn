const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const assert = require("assert");

const file_path = "file:///" + __dirname + "/demo3.html";

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();

  const documentInitialised = () => driver.executeScript("return initialised");
  await driver.get(file_path);
  await driver.wait(() => documentInitialised(), 10000);
  const element = driver.findElement(By.css("p"));
  assert.strictEqual(await element.getText(), "Hello from JavaScript!");
})();
