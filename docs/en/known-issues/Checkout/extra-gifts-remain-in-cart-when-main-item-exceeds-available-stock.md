---
title: 'Extra gifts remain in cart when main item exceeds available stock'
slug: extra-gifts-remain-in-cart-when-main-item-exceeds-available-stock
status: PUBLISHED
createdAt: 2026-05-09T00:29:32.000Z
updatedAt: 2026-05-09T00:29:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: extra-gifts-remain-in-cart-when-main-item-exceeds-available-stock
locale: en
kiStatus: Backlog
internalReference: 1404248
---

## Summary

When a shopper adds a quantity of a gift-eligible SKU that exceeds its available inventory, the Checkout pipeline initially adds gifts for the full requested quantity, but only the in-stock quantity of the main item is persisted. As a result, extra gift items remain in the orderForm beyond what the final main-item quantity warrants.

Affected scenarios involve gift promotions configured as “1 gift per eligible item”.

## Simulation

- Prerequisites:
  - A gift promotion that adds 1 gift SKU per unit of an eligible main SKU.
  - The eligible main SKU must have limited availability (e.g., total available stock = 3).

- Steps:
  - Create a new cart (via Checkout UI or Create New Cart API (`forceNewCart=true`)).
  - Add a quantity of the eligible main SKU greater than its available stock (e.g., request 5 units when only 3 exist).
  - Observe that the Checkout adds gifts matching the requested quantity (e.g., 5 gift units) to the orderForm even though only part of the main item persists (e.g., 3 units). The extra gifts remain until another pipeline-triggering action is performed.

## Workaround

Perform another orderForm update that triggers the Checkout Pipeline, such as posting `/clientProfileData` or `/shippingData` to remove the extra gifts. Since new pipeline triggering requests always remove the extra gifts and the Place Order request itself triggers the pipeline, it's not possible to place an order with the extra gifts.