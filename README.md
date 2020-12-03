# selenium

## 1. 安装

### 1.1. python

官网下载 python3 图形界面安装或者我们使用 brew 安装 python3  

1. 官网地址：https://www.python.org/  

2. brew 安装，终端输入：brew install python3  

### 1.2. selenium

pip3 install selenium  

### 1.3. webdriver

安装对应浏览器版本的驱动：https://www.selenium.dev/documentation/en/webdriver/driver_requirements/  

我的电脑浏览器是 87，下载对应版本的 chromedriver。  

![s1](images/s1.png)

下载成功后，配置环境变量。  

把解压后的文件放到/usr/local/bin/下，结果像这样：/usr/local/bin/chromedriver  

添加环境变量 export PATH=\$PATH:/usr/local/bin/chromedriver  

## 2. get Start

功能：打开浏览器，访问百度，搜索 selenium，然后关闭浏览器。  

分别用 python 和 javascript 写了 demo(demo/demo1)。  

python  

```py
from selenium import webdriver
from time import sleep

class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()


    def test(self):
        self.driver.get('http://www.baidu.com')
        sleep(1)
        self.driver.find_element_by_id('kw').send_keys('selenium')
        sleep(1)
        self.driver.find_element_by_id('su').click()
        sleep(3)
        self.driver.quit()

if __name__ == '__main__':
    case = TestCase()
    case.test()
```

js + node  

```js
const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get("https://www.baidu.com");
  await driver.findElement(By.id("kw")).sendKeys("selenium");
  await driver.findElement(By.id("su")).click();
  await driver.quit();
})();
```

## 3. 定位元素

### 3.1. 定位元素

要想操作 web 界面上的元素，首先要定位到该元素，selenium 提供了定位元素的 API，这些方法被定义在 WebDriver 类中。  

| 定位器 Locator  | 描述 |
| --- | --- |
| class name | 定位 class 属性与搜索值匹配的元素（不允许使用复合类名） |
| css selector | 定位 CSS 选择器匹配的元素 |
| id | 定位 id 属性与搜索值匹配的元素  |
| name | 定位 name 属性与搜索值匹配的元素 |
| link text | 定位 link text 可视文本与搜索值完全匹配的锚元素 |
| partial link text | 定位 link text 可视文本部分与搜索值部分匹配的锚点元素。如果匹配多个元素，则只选择第一个元素。 |
| tag name | 定位标签名称与搜索值匹配的元素  |
| xpath | 定位与 XPath 表达式匹配的元素 |

### 3.2. find_element 方法

```js
find_element_by_id();
find_element_by_name();
find_element_by_class_name();
find_element_by_xpath();
find_element_by_css_selector();
find_element_by_tag_name();
find_element_by_link_text();
find_element_by_partial_link_text();
```

### 3.3. By 类方法

```js
find_element(By.ID, "kw");
find_element(By.NAME, "wd");
find_element(By.CLASS_NAME, "s_ipt");
find_element(By.TAG_NAME, "input");
find_element(By.LINK_TEXT, "新闻");
find_element(By.PARTIAL_LINK_TEXT, "新");
find_element(By.XPATH, "//*[@class='bg s_btn']");
find_element(By.CSS_SELECTOR, "span.bg s_btn_wr>input#su");
```

### 3.4. elements 复数定位

```text
id复数定位find_elements_by_id()
name复数定位find_elements_by_name()
class复数定位find_elements_by_class_name()
tag复数定位find_elements_by_tag_name()
link复数定位find_elements_by_link_text()
partial_link复数定位find_elements_by_partial_link_text()
xpath复数定位find_elements_by_xpath()
css复数定位find_elements_by_css_selector()
```

### 3.5. 相对定位

- above 元素上  

返回当前指定元素位置上方的 WebElement 对象  

python  

```py
#from selenium.webdriver.support.relative_locator import with_tag_name
passwordField = driver.find_element(By.ID, "password")
emailAddressField = driver.find_element(with_tag_name("input").above(passwordField))
```

javascript  

```js
let passwordField = driver.findElement(By.id("password"));
let emailAddressField = await driver.findElements(
  withTagName("input").above(passwordField)
);
```

- below 元素下  

返回当前指定元素位置下方的 WebElement 对象  

python  

```py
#from selenium.webdriver.support.relative_locator import with_tag_name
emailAddressField = driver.find_element(By.ID, "email")
passwordField = driver.find_element(with_tag_name("input").below(emailAddressField))

```

javascript  

```js
let emailAddressField = driver.findElement(By.id("email"));
let passwordField = await driver.findElements(
  withTagName("input").below(emailAddressField)
);
```

- toLeftOf 元素左  

返回当前指定元素位置左方的 WebElement 对象  

python  

```py
#from selenium.webdriver.support.relative_locator import with_tag_name
submitButton = driver.find_element(By.ID, "submit")
cancelButton = driver.find_element(with_tag_name("button").
                                   to_left_of(submitButton))
```

javascript  

```js
let submitButton = driver.findElement(By.id("submit"));
let cancelButton = await driver.findElements(
  withTagName("button").toLeftOf(submitButton)
);
```

- toRightOf 元素右  

返回当前指定元素位置右方的 WebElement 对象  

python  

```py
#from selenium.webdriver.support.relative_locator import with_tag_name
cancelButton = driver.find_element(By.ID, "cancel")
submitButton = driver.find_element(with_tag_name("button").
                                   to_right_of(cancelButton))
```

javascript  

```js
let cancelButton = driver.findElement(By.id("cancel"));
let submitButton = await driver.findElements(
  withTagName("button").toRightOf(cancelButton)
);
```

- near 附近  

返回当前指定元素位置附近大约 px5050 像素的 WebElement 对象  

python  

```py
#from selenium.webdriver.support.relative_locator import with_tag_name
emailAddressLabel = driver.find_element(By.ID, "lbl-email")
emailAddressField = driver.find_element(with_tag_name("input").
                                       near(emailAddressLabel))
```

javascript  

```js
#from selenium.webdriver.support.relative_locator import with_tag_name
emailAddressLabel = driver.find_element(By.ID, "lbl-email")
emailAddressField = driver.find_element(with_tag_name("input").
                                       near(emailAddressLabel))
```

## 4. 操控浏览器

demo 路径（demo/demo2.js)  

各语言详细语法见：https://www.selenium.dev/documentation/zh-cn/webdriver/browser_manipulation/  
以下以 JavaScript 为例。  

### 4.1. 浏览器导航

#### 4.1.1. 打开网站

```js
await driver.get("https://selenium.dev");
```

#### 4.1.2. 获取当前 URL

```js
await driver.getCurrentUrl();
```

#### 4.1.3. 后退

```js
await driver.navigate().back();
```

#### 4.1.4. 前进

```js
await driver.navigate().forward();
```

#### 4.1.5. 刷新

```js
await driver.navigate().refresh();
```

#### 4.1.6. 获取标题

```js
await driver.getTitle();
```

### 4.2. 窗口和标签页

#### 4.2.1. 切换窗口或标签页

单击在 <a href="https://seleniumhq.github.io"target=”_blank">新窗口 中打开链接， 则屏幕会聚焦在新窗口或新标签页上，但 WebDriver 不知道操作系统认为哪个窗口是活动的。 要使用新窗口，您需要切换到它。 如果只有两个选项卡或窗口被打开，并且你知道从哪个窗口开始， 则你可以遍历 WebDriver， 通过排除法可以看到两个窗口或选项卡，然后切换到你需要的窗口或选项卡。

不过，Selenium 4 提供了一个新的 api NewWindow ， 它创建一个新选项卡 (或) 新窗口并自动切换到它

```js
// 存储原始窗口的 ID
const originalWindow = await driver.getWindowHandle();

// 检查一下，我们还没有打开其他的窗口
assert((await driver.getAllWindowHandles()).length === 1);

// 点击在新窗口中打开的链接
await driver.findElement(By.linkText("new window")).click();

// 等待新窗口或标签页
await driver.wait(
  async () => (await driver.getAllWindowHandles()).length === 2,
  10000
);

// 循环执行，直到找到一个新的窗口句柄
const windows = await driver.getAllWindowHandles();
windows.forEach(async (handle) => {
  if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
  }
});

// 等待新标签页完成加载内容
await driver.wait(until.titleIs("Selenium documentation"), 10000);
```

#### 4.2.2. 创建新窗口(或)新标签页并且切换

创建一个新窗口 (或) 标签页，屏幕焦点将聚焦在新窗口或标签在上。您不需要切换到新窗口 (或) 标签页。如果除了新窗口之外， 您打开了两个以上的窗口 (或) 标签页，您可以通过遍历 WebDriver 看到两个窗口或选项卡，并切换到非原始窗口。

> 注意: 该特性适用于 Selenium 4 及其后续版本。

```js
// 打开新标签页并切换到新标签页
await driver.switchTo().newWindow("tab");

// 打开一个新窗口并切换到新窗口
await driver.switchTo().newWindow("window");
```

#### 4.2.3. 关闭窗口或标签页

当你完成了一个窗口或标签页的工作时，*并且*它不是浏览器中最后一个打开的窗口或标签页时，你应该关闭它并切换回你之前使用的窗口。 假设您遵循了前一节中的代码示例，您将把前一个窗口句柄存储在一个变量中。

```js
//关闭标签页或窗口
await driver.close();

//切回到之前的标签页或窗口
await driver.switchTo().window(originalWindow);
```

如果在关闭一个窗口后忘记切换回另一个窗口句柄，WebDriver 将在当前关闭的页面上执行，并触发一个 No Such Window Exception 无此窗口异常。必须切换回有效的窗口句柄才能继续执行。

#### 4.2.4. 在会话结束时退出浏览器

当你完成了浏览器会话，你应该调用 quit 退出，而不是 close 关闭:

```js
await driver.quit();
```

退出将会

- 关闭所有与 WebDriver 会话相关的窗口和选项卡
- 结束浏览器进程
- 结束后台驱动进程
- 通知 Selenium Grid 浏览器不再使用，以便可以由另一个会话使用它(如果您正在使用 Selenium Grid)

调用 quit() 失败将留下额外的后台进程和端口运行在机器上，这可能在以后导致一些问题。

### 4.3. Frames and Iframes

考虑 iframe 中的一个按钮。 如果我们使用浏览器开发工具检查元素，可能会看到以下内容:  

```html
<div id="modal">
  <iframe id="buttonframe" name="myframe" src="https://seleniumhq.github.io">
    <button>Click here</button>
  </iframe>
</div>
```

如果 iframe 之外没有按钮，那么您可能会得到一个 no such element 无此元素 的错误。 这是因为 Selenium 只知道顶层文档中的元素。  

```js
// 这不会工作
await driver.findElement(By.css("button")).click();
```

为了与按钮进行交互，我们需要首先切换到框架， 这与切换窗口的方式类似。WebDriver 提供了三种切换到帧的方法。  

#### 4.3.1. 使用 WebElement

使用 WebElement 进行切换是最灵活的选择。可以使用首选的选择器找到框架并切换到它。  

```js
// 存储网页元素
const iframe = driver.findElement(By.css("#modal> iframe"));

// 切换到 frame
await driver.switchTo().frame(iframe);

// 现在可以点击按钮
await driver.findElement(By.css("button")).click();
```

#### 4.3.2. 使用 name 或 id

如果您的 frame 或 iframe 具有 id 或 name 属性，则可以使用该属性。如果名称或 id 在页面上不是唯一的， 那么将切换到找到的第一个.  

```js
// 使用 ID
await driver.switchTo().frame("buttonframe");

// 或者使用 name 代替
await driver.switchTo().frame("myframe");

// 现在可以点击按钮
await driver.findElement(By.css("button")).click();
```

#### 4.3.3. 使用索引

JavaScript 中的 window.frames 进行查询.  

```js
// 切换到第 2 个框架
await driver.switchTo().frame(1);
```

#### 4.3.4. 离开框架

离开 iframe 或 frameset，切换回默认内容  

```js
// 回到顶层
await driver.switchTo().defaultContent();
```

### 4.4. 窗口管理

屏幕分辨率会影响 web 应用程序的呈现方式，因此 WebDriver 提供了移动和调整浏览器窗口大小的机制。

#### 4.4.1. 获取窗口大小

获取浏览器窗口的大小(以像素为单位)。

```js
// 分别获取每个尺寸
const { width, height } = await driver.manage().window().getRect();

// 或者存储尺寸并在以后查询它们
const rect = await driver.manage().window().getRect();
const width1 = rect.width;
const height1 = rect.height;
```

#### 4.4.2. 设置窗口大小

恢复窗口并设置窗口大小。

```js
await driver.manage().window().setRect({ width: 1024, height: 768 });
```

#### 4.4.3. 得到窗口的位置

获取浏览器窗口左上角的坐标。

```js
// 分别获取每个尺寸
const { x, y } = await driver.manage().window().getRect();

// 或者存储尺寸并在以后查询它们
const rect = await driver.manage().window().getRect();
const x1 = rect.x;
const y1 = rect.y;
```

#### 4.4.4. 设置窗口位置

将窗口移动到设定的位置。

```js
// 将窗口移动到主显示器的左上角
await driver.manage().window().setRect({ x: 0, y: 0 });
```

#### 4.4.5. 最大化窗口

扩大窗口。对于大多数操作系统，窗口将填满屏幕，而不会阻挡操作系统自己的菜单和工具栏。

```js
await driver.manage().window().maximize();
```

#### 4.4.6. 最小化窗口

最小化当前浏览上下文的窗口. 这种命令的精准行为将作用于各个特定的窗口管理器.  

最小化窗口通常将窗口隐藏在系统托盘中.  

```js
await driver.manage().window().minimize();
```

#### 4.4.7. 全屏窗口

填充整个屏幕，类似于在大多数浏览器中按下 F11。

```js
await driver.manage().window().fullscreen();
```

#### 4.4.8. 屏幕截图

用于捕获当前浏览上下文的屏幕截图. WebDriver 端点 屏幕截图 返回以 Base64 格式编码的屏幕截图.

```js
let { Builder } = require("selenium-webdriver");
let fs = require("fs");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.example.com");
  // Returns base64 encoded string
  let encodedString = driver.takeScreenshot();
  await fs.writeFileSync("./image.png", encodedString, "base64");
  await driver.quit();
})();
```

#### 4.4.9. 元素屏幕截图

用于捕获当前浏览上下文的元素的屏幕截图. WebDriver 端点 屏幕截图 返回以 Base64 格式编码的屏幕截图.

```js
const { Builder, By } = require("selenium-webdriver");
let fs = require("fs");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.example.com");
  let ele = await driver.findElement(By.css("h1"));
  // Captures the element screenshot
  let encodedString = await ele.takeScreenshot(true);
  await fs.writeFileSync("./image.png", encodedString, "base64");
  await driver.quit();
})();
```

### 4.5. Execute Script

执行的 JavaScript 代码片段的当前上下文选择框架或窗口。

```js
const js = 'alert("Hello World!");';
await driver.executeAsyncScript(js);
```

## 5. 等待

demo 路径见 demo/demo3.js  

大多数由于使用 Selenium 和 WebDriver 而产生的间歇性问题都与浏览器和用户指令之间的 竞争条件 有关。例如，用户指示浏览器导航到一个页面，然后在试图查找元素时得到一个 no such element 的错误。  

```js
const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const file_path = "file:///" + __dirname + "/demo3.html";

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  await driver.get(file_path);
  const element = driver.findElement(By.css("p"));
  assert.strictEqual(await element.getText(), "Hello from JavaScript!");
})();
```

### 5.1. 显式等待

代码暂停程序执行，或冻结线程，直到满足通过的 条件。  
这个条件会以一定的频率一直被调用，直到等待超时。这意味着只要条件返回一个假值，它就会一直尝试和等待。  

使用等待来让 findElement 调用等待直到脚本中动态添加的元素被添加到 DOM 中:

```js
const driver = await new webdriver.Builder().forBrowser("chrome").build();

const documentInitialised = () => driver.executeScript("return initialised");
await driver.get(file_path);
await driver.wait(() => documentInitialised(), 10000);
const element = driver.findElement(By.css("p"));
assert.strictEqual(await element.getText(), "Hello from JavaScript!");
```

将 条件 作为函数引用传递，等待 将会重复运行直到其返回值为 true。

```js
let ele = await driver.wait(until.elementLocated(By.css("p")), 10000);
let foo = await ele.getText();
assert(foo == "Hello from JavaScript");
```

### 5.2. 隐式等待

通过隐式等待，WebDriver 在试图查找任何元素时在一定时间内轮询 DOM。当网页上的某些元素不是立即可用并且需要一些时间来加载时是很有用的。  

默认情况下隐式等待元素出现是禁用的，它需要在单个会话的基础上手动启用。  

> 警告: 不要混合使用隐式和显式等待。这样做会导致不可预测的等待时间。例如，将隐式等待设置为 10 秒，将显式等待设置为 15 秒，可能会导致在 20 秒后发生超时。  

隐式等待是告诉 WebDriver 如果在查找一个或多个不是立即可用的元素时轮询 DOM 一段时间。默认设置为 0，表示禁用。一旦设置好，隐式等待就被设置为会话的生命周期。  

```js
(async function () {
  // Apply timeout for 10 seconds
  await driver.manage().setTimeouts({ implicit: 10000 });

  // Navigate to url
  await driver.get("http://somedomain/url_that_delays_loading");

  let webElement = driver.findElement(By.id("myDynamicElement"));
})();
```

### 5.3. 流畅等待

流畅等待实例定义了等待条件的最大时间量，以及检查条件的频率。  

用户可以配置等待来忽略等待时出现的特定类型的异常，例如在页面上搜索元素时出现的 NoSuchElementException。  

```js
const { Builder, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("http://somedomain/url_that_delays_loading");
  // Waiting 30 seconds for an element to be present on the page, checking
  // for its presence once every 5 seconds.
  let foo = await driver.wait(
    until.elementLocated(By.id("foo")),
    30000,
    "Timed out after 30 seconds",
    5000
  );
})();
```

## 6. JavaScript 警告框,提示框和确认框

demo 路径 demo/demo4.js

### 6.1. Alerts 警告框

WebDriver 可以从弹窗获取文本并接受或关闭这些警告.

```js
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
```

### 6.2. Confirm 确认框

确认框类似于警告框, 不同之处在于用户还可以选择取消消息

```js
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

  //Press the Cancel button
  await alert.dismiss();
})();
```

### 6.3. Prompt 提示框

提示框与确认框相似, 不同之处在于它们还包括文本输入. 与处理表单元素类似, 您可以使用 WebDriver 的 sendKeys 来填写响应. 这将完全替换占位符文本. 按下取消按钮将不会提交任何文本.

```js
await driver.findElement(By.css("button")).click();

// Wait for the alert to be displayed
await driver.wait(until.alertIsPresent());

// Store the alert in a variable
let alert = await driver.switchTo().alert();

//Type your message
await alert.sendKeys("Selenium");

//Press the OK button
await alert.accept();
```

## 7. http 代理

捕获网络流量  
模拟网站后端响应  
在复杂的网络拓扑结构或严格的公司限制/政策下访问目标站点.  

```js
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
```

## 8. 页面加载策略

当Selenium WebDriver加载页面时, 遵循 normal 的页面加载策略. 始终建议您在页面加载缓慢时, 停止下载其他资源 (例如图片, css, js) .  

### 8.1. normal

设置为 normal 时, Selenium WebDriver将保持等待, 直到 返回 load 事件  

默认情况下, 如果未设置页面加载策略, 则设置 normal 为初始策略.

```js
const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
```

### 8.2. eager

这将使Selenium WebDriver保持等待, 直到完全加载并解析了HTML文档, 该策略无关样式表, 图片和subframes的加载.  

设置为 eager 时, Selenium WebDriver保持等待, 直至返回 DOMContentLoaded 事件.  

```js
const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");
```

### 8.3. none

设置为 none 时, Selenium WebDriver仅等待至初始页面下载完成.

```js
const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("none");
```

## 9. Keyboard

demo路径demo/demo6.js

Keyboard代表一个键盘事件. Keyboard操作通过使用底层接口允许我们向web浏览器提供虚拟设备输入

### 9.1. sendKeys

键盘事件：https://www.w3.org/TR/webdriver/#keyboard-actions  

```js
const webdriver = require("selenium-webdriver"),
  By = webdriver.By;
  Key = webdriver.Key;
const driver = await new webdriver.Builder().forBrowser("chrome").build();
await driver.get("https://www.baidu.com");
// await driver.findElement(By.id("kw")).sendKeys("selenium");
// await driver.findElement(By.id("su")).click();

// 同样功能
// Enter text and perform keyboard action "Enter"
await driver.findElement(By.id("kw")).sendKeys('selenium', Key.ENTER);
```

### 9.2. keyDown

keyDown用于模拟按下辅助按键(CONTROL, SHIFT, ALT)的动作.

```js
// Perform action ctrl + A (modifier CONTROL + Alphabet A) to select the page
await driver.actions().keyDown(Key.CONTROL).sendKeys('a').perform();

// mac command
await driver.actions().keyDown(Key.COMMAND).sendKeys('a').perform();
```

### 9.3. keyUp

keyUp用于模拟辅助按键(CONTROL, SHIFT, ALT)弹起或释放的操作.  

```js
// Enters text "selenium" with keyDown SHIFT key and after keyUp SHIFT key 
const search = driver.findElement(By.id('kw'));
await driver
  .actions()
  .click(search)
  .keyDown(Key.SHIFT)
  .sendKeys("selenium")
  // .keyUp(Key.SHIFT)
  // .sendKeys("selenium")
  .perform();
```

### 9.4. clear

清除可编辑元素的内容. 这仅适用于可编辑且可交互的元素, 否则Selenium将返回错误(无效的元素状态或元素不可交互).  

```js
// Store 'SearchInput' element
const searchInput = driver.findElement(By.id('kw'));
await searchInput.sendKeys("selenium");
// Clears the entered text
await searchInput.clear();
```

## 10. 鼠标动作

demo路径demo/demo7.js

### 10.1. clickAndHold

它将移动到该元素，然后在给定元素的中间单击(不释放).  

```js
let searchBtn = driver.findElement(By.id("su"));
const actions = driver.actions({ async: true });
// Perform mouseMove to element and mouseDown (press) action on the element
await actions.move({ origin: searchBtn }).press().perform();
```

### 10.2. contextClick

首先将鼠标移动到元素的位置, 然后在给定元素执行上下文点击(右键单击).

```js
// Perform context-click action on the element
await actions.contextClick(searchBtn).perform();
```

### 10.3. doubleClick

移动到该元素, 并在给定元素的中间双击.

```js
// Perform double-click action on the element
await actions.doubleClick(searchBtn).perform();
```

### 10.4. moveToElement

将鼠标移到元素的中间. 执行此操作时, 该元素也会滚动到视图中.

```js
const baiduLink = driver.findElement(By.linkText("帮助"));

// Performs mouse move action onto the element
await actions.move({ origin: baiduLink }).perform();
```

### 10.5. moveByOffset

将鼠标从其当前位置(或0,0)移动给定的偏移量. 如果坐标在视图窗口之外, 则鼠标最终将在浏览器窗口之外.

```js
let offset = await searchBtn.getRect();
let x = await offset.x;
let y = await offset.y;
// Performs mouse move action onto the element
await actions
  .move({ x: parseInt(x), y: parseInt(y) })
  .pause(3000)
  .perform();
```

### 10.6. dragAndDrop

在源元素上单击并按住，然后移动到目标元素的位置后释放鼠标.

```js
await driver.get("https://crossbrowsertesting.github.io/drag-and-drop");
// Store 'box A' as source element
let sourceEle = driver.findElement(By.id("draggable"));
// Store 'box B' as source element
let targetEle = driver.findElement(By.id("droppable"));
const actions = driver.actions({ async: true });
// Performs drag and drop action of sourceEle onto the targetEle
await actions.dragAndDrop(sourceEle, targetEle).perform();
```

### 10.7. dragAndDropBy

在源元素上单击并按住, 移至给定的偏移量后释放鼠标.  

```js
await actions
  .dragAndDrop(sourceEle, { x: parseInt(x), y: parseInt(y) })
  .perform();
```

### 10.8. release

将释放按下的鼠标左键. 如果WebElement转移了, 它将释放给定WebElement上按下的鼠标左键.  

```js
// Performs release event on target element
await actions.move({origin:targetEle}).release().perform();
```

## 11. Cookie

demo 路径见 demos/demo8.js

Cookies主要用于识别用户并加载存储的信息.

### 11.1. 添加 Cookie

将cookie添加到当前访问的上下文中

```js
await driver.get("https://www.baidu.com");
// set a cookie on the current domain
await driver.manage().addCookie({ name: "key", value: "value" });
})();
```

### 11.2. 获取命名的 Cookie

返回与cookie名称匹配的序列化cookie数据中所有关联的cookie.

```js
 // Get cookie details with named cookie 'foo'
driver
  .manage()
  .getCookie("key")
  .then(function (cookie) {
    console.log("cookie details => ", cookie);
  });
```

### 11.3. 获取全部 Cookies

针对当前访问上下文返回“成功的序列化cookie数据”. 如果浏览器不再可用, 则返回错误.

```js
// Get all Available cookies
driver
  .manage()
  .getCookies()
  .then(function (cookies) {
    console.log("cookie details => ", cookies);
  });
```

### 11.4. 删除 Cookie

删除与提供的cookie名称匹配的cookie数据.

```js
// Delete a cookie with name 'test1'
await driver.manage().deleteCookie('test1');
```

### 11.5. 删除所有 Cookies

删除当前访问上下文的所有cookie.

```js
// Delete all cookies
await driver.manage().deleteAllCookies();
```

### 11.6. Same-Site Cookie属性

Strict: 当sameSite属性设置为 Strict, cookie不会与来自第三方网站的请求一起发送.  

Lax: 当您将cookie sameSite属性设置为 Lax, cookie将与第三方网站发起的GET请求一起发送.  

```js
// set a cookie on the current domain with sameSite 'Strict' (or) 'Lax'
await driver.manage().addCookie({name:'key', value: 'value', sameSite:'Strict'});
await driver.manage().addCookie({name:'key', value: 'value', sameSite:'Lax'});
console.log(await driver.manage().getCookie('key'));
```
