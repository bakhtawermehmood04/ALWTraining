export class LoginPage {

    elements = {
        usernameBtn : () => cy.get('[data-test = "username"]'),
        passwordBtn : () =>  cy.get('[data-test = "password"]')
    }
    ClickOnLogin(username:string, password:string ){
        this.elements.usernameBtn().type(username)
        this.elements.passwordBtn().type(password)
        cy.get('[data-test = "login-button"]').click()
    }
}