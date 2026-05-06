---
title: "Order replacement feature doesn't work when the replaced cart and original order have the same value"
slug: order-replacement-feature-doesnt-work-when-the-replaced-cart-and-original-order-have-the-same-value
status: PUBLISHED
createdAt: 2023-07-21T14:49:19.000Z
updatedAt: 2023-12-18T20:17:16.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-replacement-feature-doesnt-work-when-the-replaced-cart-and-original-order-have-the-same-value
locale: en
kiStatus: Fixed
internalReference: 866622
---

## Summary

The Order replacement feature doesn't work when the replaced cart has the same value as the original order, and the payment system is "Reuse Payment".

## Simulation

- Activate the Order replacement feature;
- Complete an order and change something, for example, from size small to large;
- Make sure the replaced cart has the same value as the original order;
- In the payment step, select "Reuse Payment".

## Workaround

Select a payment method different from "Reuse Payment". The previous transaction will be canceled and refunded; a new one will be created.