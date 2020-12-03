const { Builder } = require("selenium-webdriver");
(async function example() {
  let driver = new Builder().forBrowser("chrome").build();

  await driver.get("https://www.baidu.com");

  // // set a cookie on the current domain
  // await driver.manage().addCookie({ name: "key", value: "value" });

  // // Get cookie details with named cookie 'foo'
  // driver
  //   .manage()
  //   .getCookie("key")
  //   .then(function (cookie) {
  //     console.log("cookie details => ", cookie);
  //   });
  /**
     * cookie details =>  { domain: 'www.baidu.com',
        httpOnly: false,
        name: 'key',
        path: '/',
        secure: true,
        value: 'value' }
     */

  // // Get all Available cookies
  // driver
  //   .manage()
  //   .getCookies()
  //   .then(function (cookies) {
  //     console.log("cookie details => ", cookies);
  //   });
  /**
     * cookie details =>  [ { domain: '.baidu.com',
    expiry: 1606983808,
    httpOnly: false,
    name: 'BA_HECTOR',
    path: '/',
    secure: false,
    value: 'a8850g8l8k00a1eghu1fsh4jh0q' },
  { domain: '.baidu.com',
    httpOnly: false,
    name: 'H_PS_PSSID',
    path: '/',
    secure: false,
    value: '1458_33061_31254_33099_33100_33211_26350_33199' },
  { domain: 'www.baidu.com',
    httpOnly: false,
    name: 'key',
    path: '/',
    secure: true,
    value: 'value' },
  { domain: '.baidu.com',
    expiry: 1638516207,
    httpOnly: false,
    name: 'BAIDUID',
    path: '/',
    secure: false,
    value: '0204B78261777886F17E778410765B70:FG=1' },
  { domain: '.baidu.com',
    expiry: 3754463854,
    httpOnly: false,
    name: 'BIDUPSID',
    path: '/',
    secure: false,
    value: '0204B78261777886EF8B12ED56B4A4C0' },
  { domain: '.baidu.com',
    expiry: 3754463854,
    httpOnly: false,
    name: 'PSTM',
    path: '/',
    secure: false,
    value: '1606980212' },
  { domain: 'www.baidu.com',
    expiry: 1607844208,
    httpOnly: false,
    name: 'BD_UPN',
    path: '/',
    secure: false,
    value: '123253' },
  { domain: 'www.baidu.com',
    httpOnly: false,
    name: 'BD_HOME',
    path: '/',
    secure: false,
    value: '1' } ]
cookie details =>  { domain: 'www.baidu.com',
  httpOnly: false,
  name: 'key',
  path: '/',
  secure: true,
  value: 'value' }
     */


  await driver
    .manage()
    .addCookie({ name: "key1", value: "value", sameSite: "Strict" });
  await driver
    .manage()
    .addCookie({ name: "key2", value: "value", sameSite: "Lax" });
  console.log(await driver.manage().getCookie("key1"));
  console.log(await driver.manage().getCookie("key2"));

  /**
   * { domain: 'www.baidu.com',
  httpOnly: false,
  name: 'key1',
  path: '/',
  sameSite: 'Strict',
  secure: true,
  value: 'value' }
{ domain: 'www.baidu.com',
  httpOnly: false,
  name: 'key2',
  path: '/',
  sameSite: 'Lax',
  secure: true,
  value: 'value' }
   */

})();
