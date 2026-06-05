---
title: 'Error when settling transaction with 2 cards - MercadoPagoV1'
slug: error-when-settling-transaction-with-2-cards-mercadopagov1
status: PUBLISHED
createdAt: 2021-07-14T21:48:28.000Z
updatedAt: 2026-06-05T21:03:44.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-settling-transaction-with-2-cards-mercadopagov1
locale: en
kiStatus: No Fix
internalReference: 395943
---

## Summary

When a transaction is processed through the **MercadoPagoV1** connector using **two credit cards**, the settlement request fails because VTEX incorrectly calls the MercadoPago API by **concatenating both TIDs** into a single request, instead of making individual calls for each payment.
**Current (incorrect) behavior:**

    GET https://api.mercadopago.com/v1/payments/15313374757_15313364925

**Expected behavior:**

    GET https://api.mercadopago.com/v1/payments/15313364925GET https://api.mercadopago.com/v1/payments/15313374757

As a result, the MercadoPago API returns a `404 Not Found` response, causing the settlement to fail.

## Simulation

Unable to reproduce in a controlled environment. The issue manifests in production for transactions using the **MercadoPagoV1** connector where the customer splits the payment across **two credit cards**.

## Workaround

There is no workaround available.