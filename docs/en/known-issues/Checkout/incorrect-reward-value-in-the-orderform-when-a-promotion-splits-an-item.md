---
title: 'Incorrect reward value in the orderForm when a promotion splits an item'
slug: incorrect-reward-value-in-the-orderform-when-a-promotion-splits-an-item
status: PUBLISHED
createdAt: 2026-09-03T00:44:01.000Z
updatedAt: 2026-09-03T00:44:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-reward-value-in-the-orderform-when-a-promotion-splits-an-item
locale: en
kiStatus: Backlog
internalReference: 1456081
---

## Summary

When a promotion splits an item into multiple lines (for example, a “more for less” promotion), and a reward value promotion applies to the same item, the per-unit `rewardValue` is calculated and distributed incorrectly. The Checkout API receives the full reward value from RnB but fails to distribute it across the split items.

The correct reward calculation is `items.rewardValue × items.quantity`. This KI includes cases where the reward value is not calculated on a per-unit basis.

The loyalty card is created with the correct reward value. As far as we have been able to validate, the issue occurs only in the Checkout `orderForm`.

## Simulation

1. Create a promotion that can split items at checkout (for example, "More for less")
2. A promotion with **reward value** must be active.
3. Assemble a cart with a SKU valid for both promotions
4. Inspect the `items` array in the orderFormId.


`items.rewardValue` won't have a per-unit value.

## Workaround

N/A