---
title: Promotion validation uses unit price instead of total item price
slug: promotion-validation-uses-unit-price-instead-of-total-item-price
status: PUBLISHED
createdAt: 2025-09-18T20:20:39.719Z
updatedAt: 2025-09-18T20:20:39.719Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-validation-uses-unit-price-instead-of-total-item-price
locale: en
kiStatus: Backlog
internalReference: 1081841
---

## Summary


Promotions that depend on a minimum or maximum amount may fail when applied to items with a unit multiplier. The system evaluates the adjusted unit price (base price × multiplier) instead of the item’s total value, leading to inconsistencies.


#### Simulation



1. Set up a free shipping promotion with a minimum cart value threshold.
2. Add a product to the cart that is priced based on a unit multiplier (e.g., price per kilogram) rather than a fixed price.
3. Ensure that the total value of items in the cart exceeds the minimum value required for the promotion to apply. However, the real value of the item, considering the unit multiplier, should make the total cart value lower than the promotion's minimum requirement.
4. Verify that the promotion does not apply when the total cart value exceeds the required minimum due to the item’s unit multiplier.


#### Workaround


Currently, there is no available workaround for this issue.



