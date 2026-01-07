---
title: 'Promotion Simulator UI shows an incorrect number of items compared to the actual cart'
slug: promotion-simulator-ui-shows-an-incorrect-number-of-items-compared-to-the-actual-cart
status: PUBLISHED
createdAt: 2026-01-07T18:03:25.503Z
updatedAt: 2026-01-07T18:03:25.503Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-simulator-ui-shows-an-incorrect-number-of-items-compared-to-the-actual-cart
locale: en
kiStatus: Backlog
internalReference: 1347847
---

## Summary


The Promotion Simulator UI may display a different number of items than the actual quantity present in the cart. This issue does not affect the discounts applied or the final prices in the orderForm. It is strictly a UI visualization issue, caused by how items are split internally in the cart during promotion evaluation.

## Simulation



-

Configure two More for Less promotions:

- The first promotion applies a discount when the customer buys 2 items from a specific collection.

- The second promotion applies a higher discount when the customer buys 3 items from the same collection.

-

Set both promotions to:

- Apply the discount to only one item in the cart.

- Select the cheapest item as the discount target.

- Allow accumulation with other promotions.

- Add 3 SKUs from the promotional collection to the cart.
- Open the Promotion Simulator in the checkout.
- Observe that the Promotion Simulator UI displays 5 items, even though only 3 items exist in the cart.

## Workaround


N/A



