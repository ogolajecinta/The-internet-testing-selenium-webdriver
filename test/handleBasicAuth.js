const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var expect = require('chai'); 
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe("Test Suite", function(){

   it("Should accept authentication",function(){

    driver.get('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        
    });

})