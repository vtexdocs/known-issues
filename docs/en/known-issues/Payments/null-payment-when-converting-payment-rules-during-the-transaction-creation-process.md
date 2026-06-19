---
title: 'NULL payment when converting Payment Rules during the transaction creation process'
slug: null-payment-when-converting-payment-rules-during-the-transaction-creation-process
status: PUBLISHED
createdAt: 2026-06-19T17:42:12.000Z
updatedAt: 2026-06-19T17:42:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: null-payment-when-converting-payment-rules-during-the-transaction-creation-process
locale: en
kiStatus: Backlog
internalReference: 1424049
---

## Summary

Intermittently, the system responsible for returning the available merchant _paymentSystems_ can omit one or more options and log an error "Converting Payment System Rules NULL payment” during the payment creation, causing transactions to fail with messages like `“The connector configuration is invalid… PaymentSystemId found in the best option Rule configuration was not found in paymentSystem to merchant.”`

The visible symptom is orders being left incomplete and errors concentrated in short time windows.

## Simulation

It is not possible to simulate.

## Workaround

There is no workaround available.