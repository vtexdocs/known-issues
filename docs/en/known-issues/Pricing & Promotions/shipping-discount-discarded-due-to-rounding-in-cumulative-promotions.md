---
title: 'Shipping discount discarded due to rounding in cumulative promotions'
slug: shipping-discount-discarded-due-to-rounding-in-cumulative-promotions
status: PUBLISHED
createdAt: 2026-10-07T22:47:33.000Z
updatedAt: 2026-10-07T22:48:21.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: shipping-discount-discarded-due-to-rounding-in-cumulative-promotions
locale: en
kiStatus: Backlog
internalReference: 1471558
---

## Summary

When cumulative shipping promotions are applied, rounding differences can cause a shipping discount to be discarded by RnB, even when the promotion should grant the discount.
This can happen when one promotion reduces the shipping cost and a second cumulative promotion applies an additional discount to the remaining amount. If the calculated discount becomes greater than the remaining shipping amount after rounding, RnB discards the discount.
For example, if the remaining shipping amount is R$ 0.01 and the calculated discount is rounded to a value slightly greater than R$ 0.01, the discount is not applied. As a result, the customer may still be charged a small shipping amount even though the combination of promotions should result in free shipping.

## Simulation

1. Configure two shipping promotions with the **cumulative** competition mode.
2. Configure the first promotion to reduce most of the shipping cost.
3. Configure the second promotion to apply an additional shipping discount.
4. Add a product to the cart that matches both promotions.
5. Apply the promotions and check the shipping discounts returned by RnB.
6. When the remaining shipping amount is very small, such as R$ 0.01, verify that the second promotion's discount may be discarded due to rounding.
7. Check the promotion `priceTag` and verify that the discarded discount is returned as R$ 0.00.

## Workaround

When possible, avoid combining cumulative shipping promotions that result in very small remaining shipping amounts.
Alternatively, configure the promotions to **compete** instead of accumulate, depending on the expected business rule.