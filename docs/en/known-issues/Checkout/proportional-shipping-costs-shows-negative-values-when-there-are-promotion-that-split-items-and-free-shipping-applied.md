---
title: 'Proportional shipping costs shows negative values when there are promotion that split items and free shipping applied'
slug: proportional-shipping-costs-shows-negative-values-when-there-are-promotion-that-split-items-and-free-shipping-applied
status: PUBLISHED
createdAt: 2026-03-06T22:55:28.553Z
updatedAt: 2026-03-06T22:55:28.553Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: proportional-shipping-costs-shows-negative-values-when-there-are-promotion-that-split-items-and-free-shipping-applied
locale: en
kiStatus: Backlog
internalReference: 909925
---

## Summary

When using promotions that split items, such as the "More for Less" type, proportional shipping costs may display negative values.

This issue is visible when the "More for Less" discount is applied by the seller, and a free shipping promotion is applied by the marketplace, resulting in a discount being given. This behavior causes an infinite loop when attempting to complete a purchase.

## Simulation

There may be different combinations causing the issue since the weight is used to calculate the proportional shipping costs, making it hard to reproduce.

## Workaround

1.  Configure the free shipping promotion to be applied by the seller.
2. Configure the "More for Less" promotion in the marketplace and restrict it to the seller using the Seller Opt-in feature.