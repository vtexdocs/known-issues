---
title: 'Impossibilidade de usar duas ou mais credenciais diferentes do PayPal para a mesma conta.'
slug: impossibilidade-de-usar-duas-ou-mais-credenciais-diferentes-do-paypal-para-a-mesma-conta
status: PUBLISHED
createdAt: 2025-11-14T19:28:45.914Z
updatedAt: 2025-11-14T19:28:45.914Z
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


Quando o usuário registra duas afiliações diferentes na mesma conta usando o PayPalPlus, a plataforma não atualiza o cache para quando houver uma alteração em uma regra de pagamento, ou seja, é possível usar apenas uma credencial por conta.
## Simulação


Registre duas afiliações diferentes com credenciais diferentes e crie regras considerando essas duas afiliações.
Feche duas compras, cada uma com uma das regras, e no payload da transação você pode ver que, apesar de inserir as regras corretas, o merchant_id (identificação da conta na qual o dinheiro cairá) é o mesmo
## Workaround


N/A



