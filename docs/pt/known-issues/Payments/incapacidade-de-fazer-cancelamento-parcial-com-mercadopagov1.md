---
title: 'Incapacidade de fazer cancelamento parcial com MercadoPagoV1'
id: 59aimeqhjGVOVkP9f6A9ls
status: PUBLISHED
createdAt: 2022-06-28T16:44:19.059Z
updatedAt: 2024-02-16T20:30:01.307Z
publishedAt: 2024-02-16T20:30:01.307Z
firstPublishedAt: 2022-06-28T16:44:19.331Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-make-partial-cancellation-with-mercadopagov1
locale: pt
kiStatus: No Fix
internalReference: 286738
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o cancelamento parcial é feito em um pagamento de débito, o portal não fez um pedido ao Mercado Pago e, consequentemente, o pedido de captura não é feito porque o status nos fez entender que o pagamento já foi capturado, o que significa que o dinheiro do cliente não é reembolsado



## Simulação



1. Fazer uma compra com um cartão de débito usando o conector MercadoPagoV1.
2. Fazer um cancelamento parcial



## Workaround


Não há, é uma limitação do sistema.

