class AddToBagPage
{
    getProductBrandName()
    {
        return cy.get('a.product-brand')
    }
    getProductTitleName()
    {
        return cy.get('.product-title')
    }
    getProductPrice()
    {
        return cy.get('.price')
    }
    getProductQuantity()
    {

    }
    getAddToCartButton()
    {
        return cy.get('button#add-to-cart-button')
    }


}
export default AddToBagPage;