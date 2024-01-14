class ViewBagPage
{
    getBaggedProductBrandName()
    {
        return cy.get('.item-name span.brand')
    }
    getBaggedProductTitleName()
    {
        return cy.get('.item-name span.name')
    }
    getBaggedProductPrice()
    {
        return cy.get('div.item-layout-details .item-cost span.old-price')
    }
    getBaggedProductQuantity()
    {
        return cy.get('select[data-ng-model="item.quantity"]')
    }
    getCustomerAuthentication()
    {
        return cy.get('[data-ng-if="account.authenticated === false && cart.length"]')
    }
    getGuestCheckOutButton()
    {
        return cy.get('[href="/customer/account/login"]')
    }
    getMemberCheckOutButton()
    {
        
    }

}

export default ViewBagPage;