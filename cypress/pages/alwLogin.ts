export class AlwLogin {

    elements = {
        loginwithEmailPassword : () => cy.get('.forgot-password.Login_anchor__37QjD'),
        email : () =>  cy.get('[name="email"]'),
        password : () => cy.get('[name="password"]'),
        LoginBtn : () =>  cy.get('.NewButton_btn-small__oc5_Z')
       
    }
    selectEmailPassword(){
        this.elements.loginwithEmailPassword().click()
    }
    verifyLoginFunction(){

        this.elements.email().type('tlehba85496639@alw.system')
        this.elements.password().type('YrhTmJ')
        this.elements.LoginBtn().click()
    }

}