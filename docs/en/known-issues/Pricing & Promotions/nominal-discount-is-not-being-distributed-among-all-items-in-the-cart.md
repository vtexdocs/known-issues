---
title: 'Nominal discount is not being distributed among all items in the cart'
slug: nominal-discount-is-not-being-distributed-among-all-items-in-the-cart
status: PUBLISHED
createdAt: 2021-02-11T20:46:12.000Z
updatedAt: 2024-07-20T02:21:57.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-is-not-being-distributed-among-all-items-in-the-cart
locale: en
kiStatus: Backlog
internalReference: 334130
---

## Summary

The Nominal Discount from promotions is not being distributed among all items in the cart.

This scenario is happening only in a few accounts.

The store has a nominal promotion and the discount is only being applied to one item in the cart, not proportionally distributing the discount to all the items like it is supposed to.

## Simulation

1. Create a regular promotion with a nominal discount;
2. Create a cart link where the promotion is applicable;
3. Check that the discount is being entirely applied to just one item instead of being distributed among all items.

PS: This doesn't happen every time and with every account.

## Workaround

To mitigate this issue, you can use the API Create or Update Coupon API to increase the `maxItemsPerClient` field. This allows the coupon to be applied to as many SKUs as permitted in this field.