language: pt

Funcionalidade: Compra
  Um usuário logado no sistema
  Deve conseguir realizar uma compra

Cenário: Compra com sucesso de um laptop
  Dado que o usuário esteja logado no sistema
  E esteja na página inicial
  Quando acessar a seção de laptops
  E selecionar um laptop disponível
  E adicioná-lo ao carrinho de compras
  E acessar a página do carrinho
  E confirmar a finalização da compra
  Então a compra deve ser concluída com sucesso
  E o usuário deve ser redirecionado para a página de compra bem sucedida
