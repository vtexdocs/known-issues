---
title: 'O Conector de Terminal faz um loop em vez de mostrar um erro quando um código de terminal inválido é inserido (Sales App POS)'
slug: o-conector-de-terminal-faz-um-loop-em-vez-de-mostrar-um-erro-quando-um-codigo-de-terminal-invalido-e-inserido-sales-app-pos
status: PUBLISHED
createdAt: 2025-10-07T12:21:19.009Z
updatedAt: 2025-10-07T12:21:19.009Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: terminal-connector-loops-instead-of-showing-error-when-invalid-terminal-code-is-entered-sales-app-pos
locale: pt
kiStatus: Backlog
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



