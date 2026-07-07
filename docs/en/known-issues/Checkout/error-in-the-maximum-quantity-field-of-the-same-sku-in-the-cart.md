---
title: 'Error in the maximum quantity field of the same SKU in the Cart'
slug: error-in-the-maximum-quantity-field-of-the-same-sku-in-the-cart
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-07T16:33:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-the-maximum-quantity-field-of-the-same-sku-in-the-cart
locale: en
kiStatus: Backlog
internalReference: 587394
---

## Summary

When the store configures the field “maximum quantity of the same SKU in the cart” and it is an order coming from a marketplace, if the quantity of items in the order is greater than the one configured in the admin, it is allowing the orders to be integrated, not respecting the maximum amount of configured skus.

The scenario doesn't happen when using the Place Fulfillment Order API:

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

## Simulation

Trying to insert an order from a marketplace with the quantity above the value configured in the maximum quantity field of the same SKU in the admin cart.

## Workaround

N/A