const webdriver = require("selenium-webdriver"),
  By = webdriver.By;
Key = webdriver.Key;

(async function myFunction() {
  const driver = await new webdriver.Builder().forBrowser("chrome").build();
  // await driver.get("https://www.baidu.com");
  // await driver.findElement(By.id("kw")).sendKeys("selenium");

  // let searchBtn = driver.findElement(By.id("su"));
  // const actions = driver.actions({ async: true });
  // // // Perform mouseMove to element and mouseDown (press) action on the element
  // await actions.move({ origin: searchBtn }).press().perform();

  // // Perform context-click action on the element
  // await actions.contextClick(searchBtn).perform();

  // // Perform double-click action on the element
  //   await actions.doubleClick(searchBtn).perform();

  //   const documentInitialised = () => driver.executeScript("return 123");
  //   await driver.wait(() => documentInitialised(), 10000);

  //   const baiduLink = driver.findElement(By.linkText("帮助"));

  //   // !! NoSuchElementError: no such element: Unable to locate element: {"method":"link text","selector":"帮助"}
  //   // Performs mouse move action onto the element
  //   await actions.move({ origin: baiduLink }).perform();

  // // Capture offset positions of element
  // let offset = await searchBtn.getRect();
  // let x = await offset.x;
  // let y = await offset.y;
  // // Performs mouse move action onto the element
  // await actions
  //   .move({ x: parseInt(x), y: parseInt(y) })
  //   .pause(3000)
  //   .perform();

  // await driver.get("https://crossbrowsertesting.github.io/drag-and-drop");
  // // Store 'box A' as source element
  // let sourceEle = driver.findElement(By.id("draggable"));
  // // Store 'box B' as source element
  // let targetEle = driver.findElement(By.id("droppable"));
  // const actions = driver.actions({ async: true });
  // // Performs drag and drop action of sourceEle onto the targetEle
  // await actions.dragAndDrop(sourceEle, targetEle).perform();


  // // Navigate to Url
  // await driver.get("https://crossbrowsertesting.github.io/drag-and-drop");
  // // Store 'box A' as source element
  // let sourceEle = driver.findElement(By.id("draggable"));
  // // Store 'box B' as source element
  // let targetEle = driver.findElement(By.id("droppable"));
  // let offset = await targetEle.getRect();
  // let x = await offset.x;
  // let y = await offset.y;
  // const actions = driver.actions({ async: true });
  // // Performs dragAndDropBy onto the  target element offset position
  // await actions
  //   .dragAndDrop(sourceEle, { x: parseInt(x), y: parseInt(y) })
  //   .perform();




  // Navigate to Url
  await driver.get('https://crossbrowsertesting.github.io/drag-and-drop');
  // Store 'box A' as source element
  let sourceEle = driver.findElement(By.id("draggable"));
  // Store 'box B' as source element
  let targetEle = driver.findElement(By.id("droppable"));
  const actions = driver.actions({async: true});
  await actions.move({origin:sourceEle}).press().perform();
  // Performs release event on target element
  await actions.move({origin:targetEle}).release().perform();



  
})();
