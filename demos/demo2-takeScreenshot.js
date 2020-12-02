let { Builder, By } = require("selenium-webdriver");
let fs = require("fs");

// 屏幕截图 用于捕获当前浏览上下文的屏幕截图. WebDriver端点 屏幕截图 返回以Base64格式编码的屏幕截图.
// (async function example() {
//   let driver = await new Builder().forBrowser("chrome").build();

//   await driver.get("https://www.baidu.com");
//   // Returns base64 encoded string
//   let encodedString = driver.takeScreenshot();
//   await fs.writeFileSync("./image.png", encodedString, "base64");
  // !! 图片无法识别
// await driver.quit();
// })();

// 元素屏幕截图 用于捕获当前浏览上下文的元素的屏幕截图. WebDriver端点 屏幕截图 返回以Base64格式编码的屏幕截图.

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.baidu.com");
  let ele = await driver.findElement(By.css("#s_top_wrap"));
  // Captures the element screenshot
  let encodedString = await ele.takeScreenshot(true);
  await fs.writeFileSync("./image.png", encodedString, "base64"); // 成功
  await driver.quit();
})();
