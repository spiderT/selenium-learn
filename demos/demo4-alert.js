const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;
const file_path = "file:///" + __dirname + "/demo4.html";

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get(file_path);

  await driver.findElement(By.css("button")).click();

  // Wait for the alert to be displayed
  await driver.wait(until.alertIsPresent());

  // Store the alert in a variable
  let alert = await driver.switchTo().alert();

  //Press the OK button
  await alert.accept();
})();
