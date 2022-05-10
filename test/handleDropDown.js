const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var expect = require('chai'); 
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Test Suite', function(){

    it('Handle Drop down',function(){
        driver.get('https://the-internet.herokuapp.com/dropdown');
        const dropdown = driver.findElement(By.id('#dropdown'));
        
        //dropdown.selectByIndex(1);
        //dropdown.selectByVisibleText('Option 2');
        //dropdown.selectByAttribute('value','1');
    
    });
})