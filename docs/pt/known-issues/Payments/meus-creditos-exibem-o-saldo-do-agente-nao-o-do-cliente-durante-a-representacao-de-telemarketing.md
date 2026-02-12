---
title: 'Meus créditos exibem o saldo do agente, não o do cliente, durante a representação de telemarketing.'
slug: meus-creditos-exibem-o-saldo-do-agente-nao-o-do-cliente-durante-a-representacao-de-telemarketing
status: PUBLISHED
createdAt: 2026-02-12T18:02:30.061Z
updatedAt: 2026-02-12T18:02:30.061Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
locale: pt
kiStatus: Backlog
internalReference: 1301293
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 Quando um usuário com a função de televendas se faz passar por um cliente e navega até Minha conta > Meus créditos, o saldo exibido corresponde ao crédito do próprio agente de televendas, em vez do crédito do cliente representado.

Esse problema ocorre especificamente no fluxo de representação de televendas e foi reproduzido internamente. O comportamento é causado pelo aplicativo Meus créditos, que busca o e-mail do usuário autenticado de televendas da sessão, em vez da identidade do cliente representado. Como resultado, o saldo incorreto pode ser exibido para agentes e clientes durante compras assistidas por televendas, criando confusão e risco de erros nos pedidos.
## Simulação


## Workaround

