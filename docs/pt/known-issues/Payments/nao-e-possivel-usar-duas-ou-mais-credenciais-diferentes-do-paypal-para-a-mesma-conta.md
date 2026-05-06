---
title: 'Não é possível usar duas ou mais credenciais diferentes do PayPal para a mesma conta.'
slug: nao-e-possivel-usar-duas-ou-mais-credenciais-diferentes-do-paypal-para-a-mesma-conta
status: PUBLISHED
createdAt: 2021-10-29T16:43:27.000Z
updatedAt: 2023-06-23T18:23:50.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
locale: pt
kiStatus: Backlog
internalReference: 459704
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o usuário registra duas afiliações diferentes na mesma conta usando o PayPalPlus, a plataforma não atualiza o cache quando há uma alteração em uma regra de pagamento; ou seja, é possível usar apenas uma credencial por conta.

## Simulação

Registre duas afiliações diferentes com credenciais distintas e crie regras levando em conta essas duas afiliações.
Conclua duas compras, cada uma com uma das regras, e na carga útil da transação você poderá ver que, apesar de inserir as regras corretas, o merchant_id (identificação da conta na qual o dinheiro será depositado) é o mesmo.

## Workaround

N/A