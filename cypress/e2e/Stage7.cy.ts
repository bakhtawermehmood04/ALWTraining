/// <reference types="cypress" /> 
import {LoginPage} from "../pages/loginPage";
import {ProductPage} from "../pages/productPage";
import {CartPage} from "../pages/cartPage"; 

describe('Stage 7 in typescript', () => {
    const loginObj = new LoginPage();
    const productObj = new ProductPage();
    const cartPageObj = new CartPage();
    let data : any ;
    before(function(){
        cy.fixture('example').then((loginData) => {
            data = loginData
        })
    })
    it('PageObjectModel', ()=> {
        
        cy.visit('https://www.saucedemo.com')
        
        loginObj.ClickOnLogin(data.username, data.password);
        productObj.verifyproductPage();
        productObj.ProductDetailPage();
        cartPageObj.addCart();
        cartPageObj.verifyCartItem();
        cartPageObj.removeItem();
       
    })
 })