class HomePage
{
    getPopUpMsgToLogin()
    {
        return cy.get('.close-interstitial[data-ng-click="discard()"]')
    }
    getSearchBoxToExpand()
    {
     return  cy.get('.search-field[placeholder="Search for products, brands, or categories"]').eq(0)   
    }
    getSearchBoxToType()
    {
        return cy.get('input#search-input')

    }
    getAllSearchResults()
    {
        return cy.get('div.search-result-group a.button')
    }


}
export default HomePage;