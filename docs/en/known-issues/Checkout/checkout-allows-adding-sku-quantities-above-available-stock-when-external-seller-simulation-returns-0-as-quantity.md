---
title: 'Checkout allows adding SKU quantities above available stock when external seller simulation returns 0 as quantity'
slug: checkout-allows-adding-sku-quantities-above-available-stock-when-external-seller-simulation-returns-0-as-quantity
status: PUBLISHED
createdAt: 2025-10-31T18:42:22.237Z
updatedAt: 2025-10-31T18:42:22.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-adding-sku-quantities-above-available-stock-when-external-seller-simulation-returns-0-as-quantity
locale: en
kiStatus: Backlog
internalReference: 1316990
---

## Summary


When an external seller returns quantity 0 in the simulation payload, the checkout system proceeds as if any requested quantity is available. The visible symptom is that carts and simulations accept quantities greater than the SKU’s real stock (e.g., adding 20 or 30 units when only 4 are available).

This affects marketplace scenarios with external sellers whose simulation endpoint responds with 0 instead of the requested quantity or the stock-capped quantity.

However, if the stock balance and quantity are sent as 0, our API returns `withoutStock`.


#### Simulation



- Prerequisites: An account integrated with an external seller whose simulation endpoint consistently returns 0 for the quantity field, regardless of the requested quantity or stock.
- Call the Checkout simulation API with an item from the external seller, requesting a quantity higher than the seller’s real stock. Note that the simulation accepts the requested quantity instead of capping at the stock level.



#### Workaround


Ask the external seller to adjust their simulation response. The seller must return the exact quantity requested only when it is equal to or lower than the product’s current stock.



