export class CartPage {

    elements = {
        addCartbtn : () => cy.get('[data-test = "add-to-cart-sauce-labs-bolt-t-shirt"]'),
        clickCartbtn : () =>  cy.get('.shopping_cart_link'),
        cartName : () => cy.get('.inventory_item_name'),
        cartQuantity : () => cy.get('.cart_quantity'),
        removeItembtn : () =>  cy.get('[data-test = "remove-sauce-labs-bolt-t-shirt"]'),
        emptyCart : () => cy.get('.removed_cart_item')
    }
    addCart(){
        this.elements.addCartbtn().click()
        this.elements.clickCartbtn().click()
    }
    verifyCartItem(){
        this.elements.cartName().eq(0).should('have.text', "Sauce Labs Bolt T-Shirt")
        this.elements.cartQuantity().should('have.length', 1)
        
    }
    removeItem(){
        this.elements.removeItembtn().click()
        this.elements.emptyCart().should('exist')
    }

}