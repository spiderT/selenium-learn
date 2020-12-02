const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://www.baidu.com");
  // await driver.getCurrentUrl();
  // await driver.navigate().refresh();
  // await driver.getTitle();

  // 打开新标签页并切换到新标签页
  // await driver.switchTo().newWindow("tab");

  // 打开一个新窗口并切换到新窗口
  // await driver.switchTo().newWindow("window");

  // 设置窗口大小
  // await driver.manage().window().setRect({ width: 200, height: 200 });

  // 将窗口移动到主显示器的左上角
  // await driver.manage().window().setRect({ x: 0, y: 0 });

  // 最大化窗口
  // await driver.manage().window().maximize();

  // 最小化窗口
  // await driver.manage().window().minimize();

  // 全屏窗口,填充整个屏幕，类似于在大多数浏览器中按下 F11
  // await driver.manage().window().fullscreen();

  // Execute Script 执行脚本
  const js = 'alert("Hello World!");';
  driver.executeScript(js);
  await driver.executeAsyncScript(js);
})();
