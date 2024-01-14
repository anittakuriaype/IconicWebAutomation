class SuccessPage
{
    getSuccessMessage()
    {
        return cy.get('div.modal-congrats .bag-modal-title')
    }
    getSelectedProductBrandName()
    {
        return cy.get('div.product-info .bag-modal-title')
    }
    getSelectedProductTitleName()
    {
        return cy.get('div.product-info span')
    }
    getSelectedProductPrice()
    {
        return cy.get('div.price')
    }
    getSelectedProductQuantity()
    {
        return cy.get('div.product-info span')
    }
    getViewBagButton()
    {
        return cy.get('a.btn-add-to-bag')
    }


}
export default SuccessPage;