import ComprasPage from '../support/pages/fecha-pedido'
import LoginPage from '../support/pages/login'

describe('Fechamento de pedido', () => {

  context('Cenários de sucesso', () => {
    beforeEach(() => {
      LoginPage.loginSucesso()
      ComprasPage.esvaziaCarrinho()
    })

    it('Compra de um item', () => {
      ComprasPage.acessaPaginaInicial()
      ComprasPage.adicionaItemCarrinho()
      ComprasPage.finalizaCompra()
      ComprasPage.confirmacaoCompra()
    })
  })

})