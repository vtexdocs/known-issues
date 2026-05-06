---
title: 'Erro ao encerrar a conta de crédito do cliente'
slug: erro-ao-encerrar-a-conta-de-credito-do-cliente
status: PUBLISHED
createdAt: 2023-09-20T21:38:14.000Z
updatedAt: 2023-09-20T21:38:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-closing-customer-credit-account
locale: pt
kiStatus: Backlog
internalReference: 904432
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando as contas principais e secundárias têm o aplicativo Customer Credit instalado, a criação de uma conta de crédito ocorre em todas elas. Nesse cenário, há casos em que o fechamento da conta de crédito não funciona, e o seguinte erro é exibido:

`Erro ao fechar a conta.`

## Simulação

Não conseguimos replicar ou identificar a causa disso; em algumas contas, esse problema não ocorre.

## Workaround

Não há solução alternativa; o que pode ser feito é alterar o limite de crédito para zero, para que o método de pagamento não funcione para o e-mail registrado.