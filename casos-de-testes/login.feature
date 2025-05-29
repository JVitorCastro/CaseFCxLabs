# language: pt

Funcionalidade: Login no sistema
  Um usuário do sistema
  Pode fazer login
  Para acessar funcionalidades restritas

  Esquema do Cenário: Login com diferentes combinações de usuário e senha
    Dado que o usuário esteja na página de login
    Quando preencher o usuário "<usuario>" e a senha "<senha>"
    E clicar no botão de login
    Então deve ver a mensagem "<mensagem>"

    Exemplos:
      | usuario   | senha       | mensagem                        |
      | automato  | Auto@150120 | Login realizado com sucesso     |
      | teste123  | Auto@150120 | Incorrect user name or password.|
      | automato  | 123456789   | Incorrect user name or password.|
      |           |             | Username field is required      |

  Cenário: Tentativas excessivas de Login
    Dado que o usuário acesse o sistema
    Quando realizar tentativas sucessivas de login
    Então deverá ser exibida a mensagem "User is temporary blocked from login"

