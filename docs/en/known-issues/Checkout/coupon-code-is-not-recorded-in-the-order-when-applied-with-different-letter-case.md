---
title: 'Coupon code is not recorded in the order when applied with different letter case'
slug: coupon-code-is-not-recorded-in-the-order-when-applied-with-different-letter-case
status: PUBLISHED
createdAt: 2026-08-31T23:21:24.000Z
updatedAt: 2026-08-31T23:21:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: coupon-code-is-not-recorded-in-the-order-when-applied-with-different-letter-case
locale: en
kiStatus: Backlog
internalReference: 1454466
---

## Summary

When a shopper applies a coupon using a different letter case than the one registered in Rates & Benefits (for example, typing `Frete1` for a coupon registered as `frete1`), the promotion is applied correctly and the discount is granted, but the coupon code is not recorded in the order.

The order total, the discount, and `ratesAndBenefitsData` remain correct — only the marketing record is affected.

## Simulation

1. In the Admin, create a coupon with a lowercase code (for example, `frete1`) and link it to an active promotion.
2. Create a cart and add an item eligible for that promotion.
3. Apply the coupon using a different letter case than the registered one
4. Confirm in the orderForm response that the promotion was applied.
5. Place the order.
6. Retrieve the order details by using the Get order API and check the `marketingData` field. The coupon code is not there.

Coupon will be an empty string when the cart had no UTM data, and `marketingData` itself is `null` when the cart had any UTM field filled in.

## Workaround

Normalize the coupon code to lowercase in the storefront or application before sending it to Checkout.