class LoginPage
{
    getDeliverToTitle()
    {
        return cy.get('div[data-ti-magellan-destination="delivery"] h3.paragraph-title')
    }
    getPayByTitle()
    {
        return cy.get('div.ti-pay h3.paragraph-title')
    }

}

export default LoginPage;