---
title: 'Paypal Plus - Transações não são canceladas com sucesso'
slug: paypal-plus-transacoes-nao-sao-canceladas-com-sucesso
status: PUBLISHED
createdAt: 2020-12-16T01:03:52.000Z
updatedAt: 2026-06-05T20:57:54.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypal-plus-transacoes-nao-sao-canceladas-com-sucesso
locale: en
kiStatus: No Fix
internalReference: 316713
---

## Summary

When attempting to cancel a transaction processed through the **PayPal Plus** connector, the cancellation fails with the following error:

> `Error executing Cancellation operation. Please, see the inner exception. Connector = PayPalPlus. Message = The given key was not present in the dictionary.`

The transaction remains in a non-cancelled state, and the cancellation operation does not complete successfully.

## Simulation

Unable to reproduce in a controlled environment. The issue occurs in production for transactions processed through the PayPal Plus connector when a cancellation is triggered.

## Workaround

There is no workaround available.