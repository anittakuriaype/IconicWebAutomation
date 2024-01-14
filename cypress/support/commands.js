// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Select required product from SearchList

Cypress.Commands.add("selectProductFromSearchList", (productTitle) => { 
    cy.get('figcaption a.product-details').each(($el,index,$list) => {
        if($el.text().includes(productTitle)){
        cy.wrap($el).click()
        }
    })
})

//Customer Login

Cypress.Commands.add("customerLogin", (email,pwd) => { 
    cy.get('form#login-form div#emailRow input#email').type(email)
    cy.get('div#passwordRow input#password').type(pwd)
    cy.get('form#login-form div.ti-row button#btn-login').click()
})

//Verify if selected product is available in checkout page

Cypress.Commands.add("verifyProductAtCheckOut", (productTitle) => { 
    cy.get('div.item-layout-details h4.item-name').each(($el,index,$list) => {
        if($el.text().includes(this.data.productTitle)){
        cy.log("Product available at checkout")
        }
    })

})





    