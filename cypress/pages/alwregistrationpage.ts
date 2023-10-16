export class RegistrationPage {

    elements = {
        gradeDropdown : () => cy.get('.form-select__value-container.css-1hwfws3'),
        grade : () =>  cy.contains('الثاني الابتدائي'),
        phonenumber : () => cy.get('[name = "phone"]'),
        continueAsStudent : () => cy.get('.NewButton_btn-big__18Lpi'),
        freeplan : () => cy.get(':nth-child(1) > .Subscription_paymentPlans__plan__2SFvp'),
        nextStep : () => cy.get('.NewButton_btn-primary__7Sw3_'),
        firstSubject : () => cy.get(':nth-child(2) > .SemesterSubjects_subjectCard__option__3PpaU'),
        secondSubject : () =>  cy.get(':nth-child(5) > .SemesterSubjects_subjectCard__option__3PpaU'),
        subjectNextbtn : () => cy.get('.NewButton_btn-primary__7Sw3_'),
        firstsubjectService1 : () => cy.get(':nth-child(1) > .Services_row__1lTlC > :nth-child(1) > .Services_service__box__1UPlA'),
        firstsubjectService2 : () => cy.get(':nth-child(1) > .Services_row__1lTlC > :nth-child(2) > .Services_service__box__1UPlA'),
        firstsubjectService3 : () => cy.get(':nth-child(1) > .Services_row__1lTlC > :nth-child(3) > .Services_service__box__1UPlA'),
        secondsubjectService1 : () => cy.get(':nth-child(2) > .Services_row__1lTlC > :nth-child(1) > .Services_service__box__1UPlA'), 
        secondsubjectService2 : () => cy.get(':nth-child(2) > .Services_row__1lTlC > :nth-child(2) > .Services_service__box__1UPlA'),
        secondsubjectService3 : () => cy.get(':nth-child(2) > .Services_row__1lTlC > :nth-child(3) > .Services_service__box__1UPlA'),
        editBtn : () => cy.get('.Subscription_paymentDetails__header__2mWG1 > div > .material-icons'),
        uncheckSubj : () => cy.get(':nth-child(5) > .SemesterSubjects_subjectCard__option__3PpaU'),
        updateSubj : () => cy.get(':nth-child(1) > .SemesterSubjects_subjectCard__option__3PpaU'),
        enrollStudent : () => cy.get('.NewButton_btn-primary__7Sw3_')
    }
    selectGrade(){
        this.elements.gradeDropdown().click()
        this.elements.grade().click()
    }
    typePhonenumber(phoneNumber){

        this.elements.phonenumber().type(phoneNumber)
       
    }
    continueAsStudent()
    {
        this.elements.continueAsStudent().click()
    }
    selectFreeTrial()
    {
        this.elements.freeplan().click()
       
    }
    selectFreePlanNextbtn(){
        this.elements.nextStep().click()
    }
    selectSubjects()
    {
        this.elements.firstSubject().click()
        this.elements.secondSubject().click()
        
    }
    selectsubjectNextbtn(){
        this.elements.subjectNextbtn().click()
    }
    selectfirstSubjServices()
    {
        this.elements.firstsubjectService1().click()
        this.elements.firstsubjectService2().click()
        this.elements.firstsubjectService3().click()
    }
    selectsecondSubjServices()
    {
        this.elements.secondsubjectService1().click()
        this.elements.secondsubjectService2().click()
        this.elements.secondsubjectService3().click()
    }
    editBtn(){
        this.elements.editBtn().click()
        this.selectFreePlanNextbtn()
        this.elements.uncheckSubj().contains('رياضيات').click()
        this.elements.updateSubj().click()
        this.selectsubjectNextbtn()
        this.selectsecondSubjServices()
        cy.get('.NewButton_btn-primary__7Sw3_').click()
       
    }
    enrollStudent(){
        this.elements.enrollStudent().click()
    }
    
}