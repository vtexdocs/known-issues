---
title: 'Deleted Customer Credit rules will appear at checkout if not deactivated previously'
slug: deleted-customer-credit-rules-will-appear-at-checkout-if-not-deactivated-previously
status: PUBLISHED
createdAt: 2024-03-04T23:06:45.000Z
updatedAt: 2024-03-04T23:06:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: deleted-customer-credit-rules-will-appear-at-checkout-if-not-deactivated-previously
locale: en
kiStatus: Backlog
internalReference: 994066
---

## Summary

If you have `vtex.custom-payments` app installed and delete a Customer Credit payment rule without deactivating it first it will be rendered at checkout.

## Simulation

With `vtex.custom-payments` installed in the account create several Customer Credit installment rules and delete one without deactivating, you will see it at checkout.

## Workaround

It's possible to manually fix this with the help of support team.