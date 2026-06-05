---
title: 'Não é possível usar duas ou mais credenciais diferentes do PayPal para a mesma conta.'
slug: nao-e-possivel-usar-duas-ou-mais-credenciais-diferentes-do-paypal-para-a-mesma-conta
status: PUBLISHED
createdAt: 2021-10-29T19:43:27.000Z
updatedAt: 2026-06-05T20:52:53.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
locale: pt
kiStatus: No Fix
internalReference: 459704
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o usuário registra duas afiliações diferentes na mesma conta usando o PayPalPlus, a plataforma não atualiza o cache quando ocorre uma alteração na regra de pagamento; ou seja, é possível usar apenas uma credencial por conta.

## Simulação

Registre duas afiliações diferentes com credenciais distintas e crie regras considerando essas duas afiliações.
Conclua duas compras, cada uma com uma das regras, e na carga útil da transação você poderá ver que, apesar de inserir as regras corretas, o merchant_id (identificação da conta na qual o dinheiro será depositado) é o mesmo.

## Workaround

N/A