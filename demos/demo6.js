const webdriver = require("selenium-webdriver"),
  By = webdriver.By;
Key = webdriver.Key;

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://www.baidu.com");
  // await driver.findElement(By.id("kw")).sendKeys("selenium");
  // await driver.findElement(By.id("su")).click();
  // await driver.quit();

  // Enter text and perform keyboard action "Enter"
  // await driver.findElement(By.id("kw")).sendKeys("selenium", Key.ENTER);

  // Perform action ctrl + A (modifier CONTROL + Alphabet A) to select the page
  // await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();
  // // mac command
  // await driver.actions().keyDown(Key.COMMAND).sendKeys('a').perform();

  // Enters text "selenium" with keyDown SHIFT key and after keyUp SHIFT key
  // const search = driver.findElement(By.id('kw'));
  // await driver
  //   .actions()
  //   .click(search)
  //   .keyDown(Key.SHIFT)
  //   .sendKeys("selenium")
  //   // .keyUp(Key.SHIFT)
  //   // .sendKeys("selenium")
  //   .perform();

  // Store 'SearchInput' element
  const searchInput = driver.findElement(By.id('kw'));
  await searchInput.sendKeys("selenium");
  // Clears the entered text
  await searchInput.clear();
})();
