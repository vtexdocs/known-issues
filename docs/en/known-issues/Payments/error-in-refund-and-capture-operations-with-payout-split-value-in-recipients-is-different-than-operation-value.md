---
title: 'Error in refund and capture operations with Payout Split - "Value in recipients * is different than operation value *."'
slug: error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value
status: PUBLISHED
createdAt: 2022-11-14T20:24:52.000Z
updatedAt: 2024-02-02T20:52:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value
locale: en
kiStatus: Backlog
internalReference: 698005
---

## Summary

Due to rounding problems when recalculating the recipients of a transaction with Payout Split, either in the capture or in the refund, we receive the following exception from the gateway, since the sum of the recipient's value differs from the transaction value.


    Vtex.Practices.ExceptionHandling.ValidationException: Value in recipients (xx.989999999999999999999999988) is different than operation value (xx.99). at Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...

## Simulation

Cannot simulate

## Workaround

There is no workaround