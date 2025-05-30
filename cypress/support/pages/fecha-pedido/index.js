import dados from '../../../fixtures/fecha-pedido.json'

class ComprasPage {

  //Método de acesso a página inicial e validação dos campos
  acessaPaginaInicial(){
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

    this.acessaPaginaMice()
  }

  //Método usado para acessar a seção de mouses e suas respectivas validações
  acessaPaginaMice(){
    cy.get('#miceTxt').click()
    this.esperarLoader()
    cy.get('.pages a')
    .should('have.length', 2)
    .and(($li) => {
      expect($li.get(0).textContent).contains('HOME')
      expect($li.get(1).textContent).contains('MICE')
    })
  }

  adicionaItemCarrinho(){
    cy.get('li.ng-scope p a').contains(dados['nomeProduto']).click()
    cy.get('#Description h1').should('have.text', ` ${dados.produto} `)
    for (let index = 1; index < dados.quantidade; index++) {
      cy.get('.plus').click()
    }
    cy.get('.smoolMargin input').should('have.value', dados.quantidade)
    cy.contains('button', 'ADD TO CART').click()
    cy.get('#shoppingCartLink span').should('have.text', dados.quantidade).click()
    cy.get('.smollCell .price').contains(`$${dados.valor*dados.quantidade}`)
    cy.get('.productName').should('have.text', dados.produto)
    cy.get('tfoot :nth-child(1) [colspan="2"] .roboto-medium').contains(dados.valor*dados.quantidade)
    cy.get('#checkOutButton').click()
  }

  //Esse método garante que as ações só serão executadas após o desaparecimento do loader
  //O objetivo é garantir que a tela finalize seu carregamento
  esperarLoader(){
    cy.get('.loader').should('not.be.visible')
  }

  //Esse método esvazia o carrinho CASO tenha algum item
  esvaziaCarrinho(){
    cy.get('#shoppingCartLink').trigger('mouseover')
    
    //Esse trecho verificar se há itens no carrinho de compras
    //Caso true, clica no ícone X para esvaziar o carrinho
    cy.get('#shoppingCartLink span').then(($btn) => {
      if ($btn.is(':visible')) {
        cy.get('.removeProduct').click()
      }
    })
  }

  //Verifica os campos do frete e valida os dados apresentados
  frete(){
    cy.get('#detailslink label')
      .should('have.length', 2)
      .should('have.text', '1. SHIPPING DETAILS 2. PAYMENT METHOD')
    cy.get('#shippingCost').should('have.text', `$${dados.frete}.00`)
    cy.get('.totalValue').should('have.text', `$${(dados.frete) + (dados.valor * dados.quantidade)}`)
    cy.get('#next_btn').click()
  }

  //Verifica se os dados do cartão são os mesmos cadastrados
  cartao(){
    cy.get('.masterCreditSeccion span')
    .should('have.length', 5)
    .and(($span) => {
      expect($span.get(0).textContent).to.equal('MasterCredit')
      expect($span.get(1).textContent).contains('****')
      expect($span.get(2).textContent).contains('****')
      expect($span.get(3).textContent).contains('****')
      expect($span.get(4).textContent).contains(dados.cartao)
    })
    cy.get('#pay_now_btn_MasterCredit').click()
  }

  finalizaCompra(){
    this.frete()
    this.cartao()
  }

  confirmacaoCompra(){
    cy.get('#orderPaymentSuccess span').eq(0).should('have.text', 'Thank you for buying with Advantage')
    cy.get('.innerSeccion label')
    .should('have.length', 10)
    .and(($span) => {
      expect($span.get(0).textContent).contains('AUTOMATO')
      expect($span.get(5).textContent).contains('1258')
      expect($span.get(9).textContent).contains(`$${(dados.frete) + (dados.valor * dados.quantidade)}`)
    })
    cy.get('.innerSeccion label a').eq(1).should('have.text', Cypress.env('date'))
  }
}

export default new ComprasPage()