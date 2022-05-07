const {Builder, By, Key, Utils} = require("selenium-webdriver");
const ug = require("unique-username-generator");

function pass(){
    const length = 20
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+="
    let newVal = ''
    for (let i=0; i < length; i++){
        newVal += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return newVal
}

(async ()=>{
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://roblox.com/')
    let p = pass()
    let u = ug.generateUsername("",3,20)
    await driver.findElement(By.id('MonthDropdown')).sendKeys('J')
    await driver.findElement(By.id('DayDropdown')).sendKeys('01')
    await driver.findElement(By.id('YearDropdown')).sendKeys('19')
    await driver.executeScript("document.querySelector('#signup-username').value = ''")
    await driver.findElement(By.id("signup-username")).sendKeys(u)
    await driver.findElement(By.id("signup-password")).sendKeys(p)
    await driver.executeScript('document.querySelector("#signup-button").innerHTML = "Sign up (Dogs#3902)"')
    await driver.executeScript(`document.querySelector('.signup-header').innerHTML = "Alt Account Generation"`)
    await driver.executeScript(`document.querySelector('.signup-or-log-in').style = "opacity: 0"`)
    await driver.executeScript(`

document.querySelector('#signup').appendChild(document.querySelector("#signup-button"))
    `)
    // a()
})();