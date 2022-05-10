const {Builder, By, Key, until} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var chrome = require('chromedriver');
var expect = require('chai'); 
var driver = new webdriver.Builder().forBrowser('chrome').build();

describe('Test Suite', function(){
    before('',function(){

    });
    after('',function(){

    });
    it('',function(){
        driver.get('https://the-internet.herokuapp.com/login');
    
    });
})