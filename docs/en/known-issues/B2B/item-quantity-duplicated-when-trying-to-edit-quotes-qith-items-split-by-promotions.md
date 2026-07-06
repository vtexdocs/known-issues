---
title: 'Item quantity duplicated when trying to edit quotes qith items split by promotions'
slug: item-quantity-duplicated-when-trying-to-edit-quotes-qith-items-split-by-promotions
status: PUBLISHED
createdAt: 2026-07-06T22:36:55.000Z
updatedAt: 2026-07-06T22:36:55.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: item-quantity-duplicated-when-trying-to-edit-quotes-qith-items-split-by-promotions
locale: en
kiStatus: Backlog
internalReference: 1430768
---

## Summary

When editing the item's quantity of a quote that contains items split by promotion, the quantity added for one of the item entries will be duplicated for the other one, not reflecting the calculation done by Checkout. Additionally, it's not possible to edit the first digit of the item's quantity (it remains as 1).

## Simulation

- Create a new Quote using a cart with items split by promotion (ex.: buy 3, get 1 for free)
- Try to edit the item quantity's of the quote; In the UI, two things will happen:
  - The first digit will not be updated, it will remain as 1
  - The quantity added for one of the entries of the split item will be duplicated for the other entry (ex.: adding 12 for the normal priced entry and the UI will replicate 12 for the free entry)

- By saving the quote and using it, the total quantity will be added to the orderForm and the promotion will be calculated as expected (ex.: if 12 units were added for each entry, 24 units of the item will be added to the orderForm; then, 18 units will be charged in full and 6 will be added for free, as per the buy 3 get 1 promotion rule)

## Workaround

Do not update quotes with items split by promotion, create new ones.