---
title: 'Inability to make partial cancellation with MercadoPagoV1'
slug: inability-to-make-partial-cancellation-with-mercadopagov1
status: PUBLISHED
createdAt: 2020-09-11T15:36:02.000Z
updatedAt: 2026-06-05T20:52:09.000Z
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