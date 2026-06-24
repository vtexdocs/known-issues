---
title: 'Carts created from order replacement do not receive promotions correctly'
slug: carts-created-from-order-replacement-do-not-receive-promotions-correctly
status: PUBLISHED
createdAt: 2021-11-22T23:31:57.000Z
updatedAt: 2026-06-24T23:48:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: carts-created-from-order-replacement-do-not-receive-promotions-correctly
locale: en
kiStatus: Backlog
internalReference: 473424
---

## Summary

Carts created through the Replace Order option on the **"**My Orders**"** page remains tied to the promotion from the original order. However, the system does not re-evaluate promotion eligibility when the shopper changes the payment method or shipping address, even though the promotion rules may vary based on those factors.

This has been observed during the order replacement flow when shoppers update their address or payment method. As a result, the discount vanishes from the cart.

## Simulation

- Have a promotion for payment methods or free shipping
- Close the order, which must have a discount from those promotions
- On my orders screen, choose to change the order
- Back to the cart, choose to pay with a different payment method, or change the shipping address or SLA
- The discount will not be shown

## Workaround

N/A