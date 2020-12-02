const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const path = require("path");
const fs = require("fs");

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  const file_path = "file:///" + __dirname + "/demo2-iframe.html";
  await driver.get(file_path);

  // 存储网页元素
  const iframe = driver.findElement(By.css("#modal> iframe"));

  // 切换到 frame
  await driver.switchTo().frame(iframe);

  // 现在可以点击按钮
  await driver.findElement(By.css(".fa-code-branch")).click();
})();
