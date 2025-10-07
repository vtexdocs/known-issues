-
internalReference: 1303282
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um usuário insere um serialNumber/código de terminal inexistente, o fluxo do conector de terminal deve mostrar um erro, mas o aplicativo nativo vtex.terminal-connector-app entra em um loop infinito e a tela permanece presa em "Aguardando pagamento no terminal".
Afeta os fluxos de POS do aplicativo de vendas que usam vtex.terminal-connector-app quando um código de terminal inválido é fornecido
## Simulação



- Inicie um pagamento no salesApp que abre o vtex.terminal-connector-app para coletar o serialNumber do terminal.
- Insira um código de terminal inexistente/inválido.
- Observe que os checkouts continuam a retornar ao aplicativo e a tela permanece em um loop em vez de fechar e retornar à página de checkouts.


## Workaround


Feche a tela de contestação do terminal usando o X superior e reinicie o fluxo de pagamento.



