const { Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var chai = require('chai'); 
var expect = chai.expect;
var driver = new webdriver.Builder().forBrowser('chrome').build();


describe("Test Suite", function(){

   it("Should select checkbox",function(){

    driver.get('https://the-internet.herokuapp.com/checkboxes');
    driver.findElement(By.css("input[type='checkbox']")).click();

    //set delay
    //driver.manage().setTimeouts( { implicit: 10000 } );
    //driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    driver.findElement(By.css("input[type='checkbox']")).click();     
    });

})