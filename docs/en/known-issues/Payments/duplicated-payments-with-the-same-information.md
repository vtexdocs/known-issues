---
title: Duplicated payments with the same information
slug: duplicated-payments-with-the-same-information
status: PUBLISHED
createdAt: 2025-10-16T20:28:04.541Z
updatedAt: 2025-10-16T20:28:04.541Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duplicated-payments-with-the-same-information
locale: en
kiStatus: Backlog
internalReference: 1154246
---

## Summary


Duplicated payments with the same information sent to the gateway, leading to transaction cancellation.

It is possible to confirm the scenario by checking some information, such as:


- The error log returned in the transaction

Ex:

**PaymentGateway**
_Transaction value (111503.00) is not equal to payments sum (223006.00)._



-

Using the API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, check the number of objects in the transaction.payments array. If two objects are found, this KI fits with the scenario.



#### Simulation


It is not possible to simulate


#### Workaround


There is no workaround available.



