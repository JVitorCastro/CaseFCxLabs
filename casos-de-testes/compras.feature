language: pt

Funcionalidade: Compras
  Um usuário logado no sistema
  Deve conseguir realizar uma compra

Cenário: Compra com sucesso de um laptop
  Dado que o usuário esteja logado no sistema
  E esteja na página inicial
  Quando acessar a seção de laptops
  E selecionar um laptop disponível
  E adicioná-lo ao carrinho de compras
  E acessar a página do carrinho de compras
  E confirmar a finalização da compra
  Então a compra deve ser concluída com sucesso
  E o usuário deve ser redirecionado para a página de compra bem sucedida

Cenário: Limpeza carrinho de compras
  Dado que o usuário esteja logado no sistema
  E tenha ao menos um item no carrinho de compras
  Quando acessar a página do carrinho de compras
  Então deve poder esvaziar o carrinho de compras

Cenário: Alteração no pedido
  Dado que o usuário esteja logado no sistema
  E tenha ao menos um item no carrinho de compras
  Quando acessar a página do carrinho de compras
  E clicar em edit
  Então deve poder editar um item do carrinho de compras