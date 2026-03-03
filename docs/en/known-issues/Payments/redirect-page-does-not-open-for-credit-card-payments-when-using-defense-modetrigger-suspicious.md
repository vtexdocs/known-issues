---
title: 'Redirect page does not open for credit card payments when using Defense Mode/Trigger: suspicious'
slug: redirect-page-does-not-open-for-credit-card-payments-when-using-defense-modetrigger-suspicious
status: PUBLISHED
createdAt: 2026-03-03T18:26:10.896Z
updatedAt: 2026-03-03T18:26:10.896Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: redirect-page-does-not-open-for-credit-card-payments-when-using-defense-modetrigger-suspicious
locale: en
kiStatus: Backlog
internalReference: 887866
---

## Summary

The redirect page does not open. When the shopper completes the purchase, he is not redirected to the payment partner's page to finalize the payment steps. The shopper is taken to the place order screen without actually making any payment.

This behavior happens for Defense Mode and "Trigger: suspicious".

## Simulation

1. Select/configure a payment method that uses redirect and is a credit card;
2. Activate defense mode, or "Trigger: suspicious" is activated;
3. Go to checkout and complete a purchase using the payment method that has redirect process, for example, 3ds;
4. See that the payment method is not displayed on the screen and goes directly to placeOrder

## Workaround

- Disable defense mode;
- For "Trigger: suspicious.", open a ticket with product support.