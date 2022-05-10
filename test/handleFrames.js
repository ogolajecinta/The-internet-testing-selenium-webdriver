const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var expect = require('chai'); 
const { Browser } = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Test Suite', function(){
    
    it('Should switch frames',function(){
        driver.get('https://the-internet.herokuapp.com/nested_frames');
        //By frame index
        //driver.switchTo().frame(2)
        //By frame name or Id
	    	driver.findElements(By.css("html > frameset"));
	    	
	    	console.log(driver.switchTo().frame("frame-top").switchTo().frame("frame-left").getPageSource());
			driver.switchTo().defaultContent();
			console.log(driver.switchTo().frame("frame-top").switchTo().frame("frame-middle").getPageSource());
			driver.switchTo().defaultContent();
			console.log(driver.switchTo().frame("frame-top").switchTo().frame("frame-right").getPageSource());
			driver.switchTo().defaultContent();
			console.log(driver.switchTo().frame(1).getPageSource());
	    	

    
    });
})