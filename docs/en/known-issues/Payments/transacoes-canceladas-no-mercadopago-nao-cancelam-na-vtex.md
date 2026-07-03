---
title: 'Transações canceladas no MercadoPago não cancelam na VTEX'
slug: transacoes-canceladas-no-mercadopago-nao-cancelam-na-vtex
status: PUBLISHED
createdAt: 2021-04-26T23:06:53.000Z
updatedAt: 2026-07-03T15:21:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacoes-canceladas-no-mercadopago-nao-cancelam-na-vtex
locale: en
kiStatus: No Fix
internalReference: 360653
---

## Summary

When a payment is manually canceled in the MercadoPago panel after the transaction has already progressed past the authorization step in VTEX, the cancellation notification sent by MercadoPago is ignored. VTEX continues processing the transaction to completion, while the payment remains canceled on MercadoPago's side, creating a status divergence between the two systems. The order appears as completed in VTEX, but the payment was never actually collected.

## Simulation

Unable to reproduce in a controlled way. The issue requires MercadoPago to send a cancellation notification at a specific point in the transaction flow, after VTEX has already advanced past the `authorizing` status, which cannot be forced consistently.

## Workaround

Not available.