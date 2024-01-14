/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductSelectionPage from '../pageObjects/ProductSelectionPage'
import AddToBagPage from '../pageObjects/AddToBagPage'
import SuccessPage from '../pageObjects/SuccessPage'
import ViewBagPage from '../pageObjects/ViewBagPage'
import LoginPage from '../pageObjects/LoginPage'
import CheckOutPage from '../pageObjects/CheckoutPage'

describe('Iconic ecommerce site test suite', function()
{
    
    before(function()
    {
        cy.clearAllCookies()
        cy.clearAllSessionStorage()
        cy.fixture('iconicWebAppTest').then(function(data){
            globalThis.data=data
        })
        
    }
    )
    it ('Guest Customer sucessfully adds product to cart', function()

    {
        
        const homePage = new HomePage()
        const productSelectionPage = new ProductSelectionPage()
        const addToBagPage = new AddToBagPage()
        const successPage = new SuccessPage()


        //launch iconic website
        cy.visit("https://www.theiconic.com.au/")
        //close sales alert 
        homePage.getPopUpMsgToLogin().then($popUp => {
            if ($popUp.is(':visible')){
                homePage.getPopUpMsgToLogin().click()
            }
            })
        // access search field
        homePage.getSearchBoxToExpand().click()
        // enter interested product
        homePage.getSearchBoxToType().type(globalThis.data.searchValue)
        // select specific product from search results
        cy.wait(4000)
        homePage.getAllSearchResults().contains("Show all results").click()
        cy.log(globalThis.data.productTitle)
        cy.selectProductFromSearchList(globalThis.data.productTitle)       
        // validate if right product is selected
        addToBagPage.getProductBrandName().should('contain.text',globalThis.data.productBrand)
        addToBagPage.getProductTitleName().should('contain.text',globalThis.data.productTitle)
        addToBagPage.getProductPrice().should('contain.text',globalThis.data.productPrice)
        // Add product to Cart
        addToBagPage.getAddToCartButton().click()
        // verify right product got added successfully
        successPage.getSuccessMessage().should('contain.text',globalThis.data.successMessage)
        successPage.getSelectedProductBrandName().should('contain.text',globalThis.data.productBrand)
        successPage.getSelectedProductTitleName().should('contain.text',globalThis.data.productTitle)
       // successPage.getSelectedProductPrice().should('contain.text',globalThis.data.productPrice)
        successPage.getSelectedProductQuantity().should('contain.text',globalThis.data.productQuantity)
    }
    )
    it ('Guest Customer sucessfully views product in cart', function()

    {

        const successPage = new SuccessPage()
        const viewBagPage = new ViewBagPage()

        // View Cart
        successPage.getViewBagButton().click()
        //Verify item in bag
        viewBagPage.getBaggedProductBrandName().should('contain.text',globalThis.data.productBrand)
        viewBagPage.getBaggedProductTitleName().should('contain.text',globalThis.data.productTitle)
        viewBagPage.getBaggedProductPrice().should('contain.text',globalThis.data.productPrice)
        viewBagPage.getBaggedProductQuantity().should('have.value', globalThis.data.baggedProdQuantity)
    }
    )

    it ('Guest Customer sucessfully proceeds to checkout page', function()

    {

        const viewBagPage = new ViewBagPage()
        const loginPage = new LoginPage()
        const checkOutPage = new CheckOutPage()

        //Proceed to checkout
        viewBagPage.getCustomerAuthentication().within(() => {
            viewBagPage.getGuestCheckOutButton().click()})

        //Login for Guest customer
        cy.customerLogin(globalThis.data.email,globalThis.data.pwd)

        //Checkout screen--verify if checkout page is launched
        checkOutPage.getDeliverToTitle().should('contain.text','Deliver to')
        checkOutPage.getPayByTitle().should('contain.text','Pay to')
        //verify if the product is available in Checkout page
        cy.verifyProductAtCheckOut(globalThis.data.productTitle)
        
    } )


} )