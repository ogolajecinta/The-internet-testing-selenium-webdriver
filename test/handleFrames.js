const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var expect = require('chai'); 
const { Browser } = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Test Suite', function(){
    
    it('Should switch frames in nested frames',function(){
	    	
	driver.get("https://the-internet.herokuapp.com/nested_frames");
 
    //navigate to top frame
    driver.switchTo().frame(driver.findElement(By.name("frame-top")));
 
    //Navigate to left Frame
    driver.switchTo().frame(driver.findElement(By.name("frame-left")));
 
    //return name of current frame
    let currentFrame = driver.executeScript("return self.name");
   
    //output name of current frame
    console.log("This is the name of the frame we've accessed " + currentFrame);
 
    //close the browser
    //driver.quit(); 
    });

	it('Should navigate to iframe' ,function(){
	    	
		driver.get("https://the-internet.herokuapp.com/iframe");
    	//Navigate to iframe   
    	driver.switchTo().frame(0)
    
    	//retrieve text from iframe using find by xpath
    	let text = driver.findElement(By.xpath("//p")).getText().then((text) => { return text; });
    
    	//log returned text Your content goes here.
    	console.log("The Paragraph text is: " + text);
 
    	//close the browser
    	//driver.quit();
		});

})