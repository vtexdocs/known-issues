---
title: 'Marketplace price override applies to all cart items regardless of the seller'
slug: marketplace-price-override-applies-to-all-cart-items-regardless-of-the-seller
status: PUBLISHED
createdAt: 2026-05-29T23:56:28.000Z
updatedAt: 2026-05-29T23:56:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-price-override-applies-to-all-cart-items-regardless-of-the-seller
locale: en
kiStatus: Backlog
internalReference: 1414414
---

## Summary

When a marketplace configures seller price override, any cart that includes at least one item from an overridden seller ends up applying the marketplace price to all items in the cart, including items from sellers that should not be overridden.

The visible symptom is mixed-seller carts showing marketplace price on non-overridden sellers. This affects Checkout carts in any sales channel where `sellersToOverride` is enabled and the cart contains items from both overridden sellers and non-overridden ones.

## Simulation

**Prerequisites: **
The marketplace must have sellersToOverride configured in Pricing for at least one seller.

**Steps:**


- Create a cart containing an item from seller X, whose price should be overridden.
- Add an item from seller Y to the same cart.

As a result, the item from seller Y incorrectly receives the marketplace price instead of its own price.

## Workaround

The marketplace can register seller product prices in its own account.