---
title: 'Error closing Customer Credit account'
slug: error-closing-customer-credit-account
status: PUBLISHED
createdAt: 2023-09-20T21:38:14.000Z
updatedAt: 2023-09-20T21:38:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-closing-customer-credit-account
locale: en
kiStatus: Backlog
internalReference: 904432
---

## Summary

When main and sub accounts have the Customer Credit app installed the creation of a creditAccount happens in all of them. In this scenario there are cases where closing the creditAccount doesn't work, the folowing error appears:

`Error while closing account.`

## Simulation

We were not able to replicate or identify what causes this, in some accounts this issue does not occur.

## Workaround

NA, what can be done is change the credit limit to zero so the payment method won't work for the registered email.