---
title: 'Inability to make partial cancellation with MercadoPagoV1'
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
locale: en
kiStatus: No Fix
internalReference: 286738
---

## Summary


When the partial cancellation is made in a debit payment, the gateway did not make a request to Mercado Pago and consequently the capture request is not made because the status made us understand that the payment was already captured, which means that the money of the customer is not refunded



## Simulation



1. Make a purchase with a debit card using the MercadoPagoV1 connector.
2. Make a partial cancellation



## Workaround


There isn't, it is a limitation of the system.

