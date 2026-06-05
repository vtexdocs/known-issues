---
title: 'It is not possible to settle a transaction with the boleto method using BrasPag'
slug: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
status: PUBLISHED
createdAt: 2022-04-07T19:01:19.000Z
updatedAt: 2026-06-05T20:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
locale: en
kiStatus: No Fix
internalReference: 558065
---

## Summary

When the transaction with Boleto Bancário using the BrasPag connector is stuck in approved, payment in authorized and the API Settle the transaction is called, an error occurs in the capture due to the status is as settling, which does not allow the transaction to be effectively captured.


    Message: The payment status is not ready to settle. Current Status Settling.

## Simulation

To simulate it is necessary that the transaction is stuck in approved, which is not possible to force.

## Workaround

Request engineering team to change transaction status to settle