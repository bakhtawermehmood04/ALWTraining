export class ProductPage {

    elements = {
        productText : () => cy.get('span[class ="title"]'),
        addProductBtn : () =>  cy.get('div[class="inventory_item_name"]'),
        productBackbtn : () => cy.get('[data-test = "back-to-products"]')
    }
    verifyproductPage(){
        this.elements.productText().should('have.text', 'Products')
        this.elements.addProductBtn().eq(2).click()
    }
    ProductDetailPage(){
        this.elements.productBackbtn().should('have.text', "Back to products")
    }
}