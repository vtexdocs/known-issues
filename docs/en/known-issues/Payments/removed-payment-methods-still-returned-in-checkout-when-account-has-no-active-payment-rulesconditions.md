---
title: 'Removed payment methods still returned in Checkout when account has no active payment rules/conditions'
slug: removed-payment-methods-still-returned-in-checkout-when-account-has-no-active-payment-rulesconditions
status: PUBLISHED
createdAt: 2026-03-19T14:11:19.614Z
updatedAt: 2026-03-19T14:11:19.614Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: removed-payment-methods-still-returned-in-checkout-when-account-has-no-active-payment-rulesconditions
locale: en
kiStatus: Backlog
internalReference: 1380926
---

## Summary

When an account deletes/disable all its payment rules in `/admin/pci-gateway#/rules`, Checkout continues to return payment methods in `orderForm.paymentData.paymentSystems` for that seller. The visible symptom is that headless/front-ends may display payment methods that should be unavailable for the account because they are still listed in paymentSystems.

## Simulation

1. Delete/disable all payment conditions for an account.
2. Add items sold by the affected seller or marketplace to a cart in the marketplace checkout.
3. Retrieve the orderForm and inspect orderForm.paymentData.paymentSystems.
4.

Observe that payment methods are still returned in paymentSystems despite the seller having no active payment rules. The getPaymentSystems for the seller or marketplace returned the methods, even though the account rules were inactive/deleted.

## Workaround

Open a ticket to the support team to apply an internal workaround.