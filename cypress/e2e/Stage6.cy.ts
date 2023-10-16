
describe('Stage5 in typescript', () => {
    it('Add to cart', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('Capsicum')
      cy.get('.product').eq(0).then( () => {
        let i: number = 0;
        for (i=0;i <3;i++){
          cy.get('.stepper-input > .increment').eq(0).click()
        }
        cy.get('.product-action > button').eq(0).click()
      })
      cy.get('img[class=" "]').click()
      cy.get('.quantity').contains('4')
      
      
      
    })
})
