---
title: 'Inconsistent gift calculation when mixing eligible SKUs in Buy One Get One promotion'
slug: inconsistent-gift-calculation-when-mixing-eligible-skus-in-buy-one-get-one-promotion
status: PUBLISHED
createdAt: 2026-04-20T14:26:12.275Z
updatedAt: 2026-04-20T14:26:12.275Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: inconsistent-gift-calculation-when-mixing-eligible-skus-in-buy-one-get-one-promotion
locale: en
kiStatus: Backlog
internalReference: 1395338
---

## Summary

In Buy One Get One promotions configured with multiple eligible SKUs, gift calculation becomes inconsistent when different SKUs individually meet the minimum quantity. Instead of summing the number of eligible gift occurrences per SKU, the system calculates the number of gifts based on the **minimum number of occurrences across SKUs**, which can lead to counterintuitive results where adding more eligible items reduces the number of gifts granted.

## Simulation

1. Configure a Buy One Get One promotion with:
  - Multiple eligible SKUs
  - Minimum quantity = 3 units per SKU
  - Gift multiplier enabled
  - Same rules applied to all SKUs
2. Test the following cart scenarios:
  - 3 units of SKU A → 1 gift ✅
  - 6 units of SKU A → 2 gifts ✅
  - 6 units of SKU A + 2 units of SKU B → 2 gifts ✅
  - 6 units of SKU A + 3 units of SKU B → 1 gift ❌
  - 9 units of SKU A → 3 gifts ✅
  - 9 units of SKU A + 3 units of SKU B → 1 gift ❌
  - 9 units of SKU A + 6 units of SKU B → 2 gifts ❌
Observe that:

- When a second SKU reaches the minimum quantity, it starts participating in the calculation.
- The system then computes the number of gifts using the **minimum value of occurrences across SKUs**, instead of summing them.

## Workaround

There is no complete workaround available. As a mitigation, merchants can:

- Avoid mixing multiple SKUs under the same Buy One Get One promotion condition when using quantity-based rules, or
- Split promotions by SKU to prevent cross-SKU interaction in the gift calculation logic