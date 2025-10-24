---
title: 'My Credits exibe o saldo do agente, não o do cliente, durante a personificação de televendas'
slug: my-credits-exibe-o-saldo-do-agente-nao-o-do-cliente-durante-a-personificacao-de-televendas
status: PUBLISHED
createdAt: 2025-10-02T12:44:51.951Z
updatedAt: 2025-10-02T12:44:51.951Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
locale: pt
kiStatus: Unknown
internalReference: 1301293
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um usuário com a função de Televendas se faz passar por um cliente e navega para Minha conta > Meus créditos, o saldo exibido corresponde ao crédito do próprio agente de televendas, em vez do crédito do cliente que se fez passar por ele.

Esse problema ocorre especificamente no fluxo de personificação de televendas e foi reproduzido internamente. O comportamento é causado pelo fato de o aplicativo My Credits buscar o e-mail do usuário autenticado de televendas na sessão, em vez da identidade do cliente representado.

Como resultado, o saldo incorreto pode ser mostrado aos agentes e clientes durante as compras assistidas por televendas, criando confusão e risco de erros nos pedidos.
## Simulação


## Workaround

