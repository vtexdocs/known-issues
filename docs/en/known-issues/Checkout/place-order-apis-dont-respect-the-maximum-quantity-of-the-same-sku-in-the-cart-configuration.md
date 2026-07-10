---
title: "Place Order APIs don't respect the maximum quantity of the same SKU in the cart configuration"
slug: place-order-apis-dont-respect-the-maximum-quantity-of-the-same-sku-in-the-cart-configuration
status: PUBLISHED
createdAt: 2022-05-27T20:26:06.000Z
updatedAt: 2026-07-11T00:15:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-apis-dont-respect-the-maximum-quantity-of-the-same-sku-in-the-cart-configuration
locale: en
kiStatus: Backlog
internalReference: 587394
---

## Summary

When the store configures the field “maximum quantity of the same SKU in the cart” and one of the following APIs is used to place the order:

`https://..com.br/api/fulfillment/pub/orders?sc=&affiliateId=`
`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

If the quantity of one of the items in the order is greater than the one configured in this configuration, Checkout is allowing the orders to be created, not respecting the limit set.

## Simulation

Try to create an order with the quantity above the value configured in the maximum quantity of same SKU per cart configuration using one of the APIs mentioned above.

## Workaround

Use one of the following APIs to place an order:

In case of Fulfillment Orders (External Marketplaces):

`https://..com.br/api/fulfillment/pvt/orders?sc=&affiliateId=`

In case of Marketplace Orders (Headless Checkout):

`https://..com.br/api/checkout/pub/orderForm//transaction`