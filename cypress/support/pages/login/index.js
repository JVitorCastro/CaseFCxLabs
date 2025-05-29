import dados from '../../../fixtures/login.json'

class LoginPage {

  loginSucesso(){
    cy.visit('/')
    this.esperarLoader()
    cy.get('#Layer_1').should('be.visible')
    cy.get('.logo').should('be.visible')
    cy.get('.logo span')
      .should('have.length', 5)
      .and(($span) => {
        expect($span.get(0).textContent).to.equal('dvantage')
        expect($span.get(1).textContent).to.equal('DEMO')
      })
    cy.get('header[ng-show="welcome"] li.nav-li-Links')
      .should('have.length', 4)
      .and(($li) => {
        expect($li.get(0).textContent).contains('CONTACT US')
        expect($li.get(1).textContent).contains('POPULAR ITEMS')
        expect($li.get(2).textContent).contains('SPECIAL OFFER')
        expect($li.get(3).textContent).contains('OUR PRODUCTS')
      })
    cy.get('#menuUser').click()
    cy.get('.PopUp .login').should('be.visible')
    cy.get('input[name="username"]').type(dados.user)
    cy.get('input[name="password"]').type(dados.password)
    cy.get('#sign_in_btn').click()
    cy.get('#menuUserLink span').should('have.text', dados.user)
  }

  esperarLoader(){
    cy.get('.loader').should('not.be.visible')
  }

}

export default new LoginPage()