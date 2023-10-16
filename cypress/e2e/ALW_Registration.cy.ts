import {RegistrationPage} from "../pages/alwregistrationpage"; 
import {AlwLogin} from "../pages/alwLogin"; 
describe('Signup with Free trial', () => {

    const registrationObj = new RegistrationPage();
    const loginObj1 = new AlwLogin()

    it('signup free user with 2 subjects and all services ', () => {

        // generate random phone number that starts with 3 
        function generateRandomPhoneNumber() {
            const randomNumber = Math.floor(Math.random() * 900000000) + 100000000; // Generates an 8-digit number
            return '3' + randomNumber.toString().slice(1); // Ensure it starts with '3'
        }
         
        cy.visit(Cypress.env('baseURL')+'/registration', {failOnStatusCode: false })

        // get otp api 
        cy.intercept( "POST", "/api/otp/generate").as("getOTP");
   
        // register lower grade student
        registrationObj.selectGrade()
        const phoneNumber = generateRandomPhoneNumber();
        registrationObj.typePhonenumber(phoneNumber)
        registrationObj.continueAsStudent()
        
        // type OTP
        cy.wait('@getOTP').then(xhr => {
            cy.log(xhr.response.body);
            cy.wrap(xhr.response.body.otp).as('OTP');
            
        })
        cy.get<string>('@OTP').then( otpValue => {
            cy.get(':nth-child(1) > :nth-child(1) > .StepTwo_input__3wcRj').type(otpValue)
        }).then( () => {
            cy.get('.NewButton_btn-primary__7Sw3_').click()
            // select free trial
            registrationObj.selectFreeTrial()
            registrationObj.selectFreePlanNextbtn()
             // select subjects 
            registrationObj.selectSubjects()
            registrationObj.selectsubjectNextbtn()
            // select first subject services 
            registrationObj.selectfirstSubjServices()
            // select second subject services 
            registrationObj.selectsecondSubjServices()
            cy.get('.NewButton_btn-primary__7Sw3_').click()
            // verify edit functionality 
            registrationObj.editBtn()
            registrationObj.enrollStudent()
            
        })
        
   
    })

    it(' verify phone number already in use ', () => {
        cy.visit(Cypress.env('baseURL')+'/registration', {failOnStatusCode: false })
        cy.intercept( "POST", "/api/mentora/auth/validation/alw-registration" ).as("validatePhonenum")
        registrationObj.selectGrade()
        registrationObj.typePhonenumber('393485749')

        // verify phonenumber already in use 
        cy.wait('@validatePhonenum').then(xhr => {
            cy.wrap(xhr.response.body.phone_number).as('errorMessage');
            expect(xhr.response.body).to.have.property('validation_decisions');
            expect(xhr.response.body.validation_decisions).to.have.property('phone_number', 'رقم الجوال 966393485749 قيد الاستخدام بالفعل');
        })
    })
    it('verify Login functionality', () => {
        cy.visit(Cypress.env('baseURL')+'/login', {failOnStatusCode: false })
        loginObj1.selectEmailPassword()
        loginObj1.verifyLoginFunction()
        
    })

})