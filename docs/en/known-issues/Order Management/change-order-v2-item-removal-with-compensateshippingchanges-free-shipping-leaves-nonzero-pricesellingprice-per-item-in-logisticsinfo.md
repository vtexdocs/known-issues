---
title: 'Change Order V2 item removal with compensateShippingChanges + free shipping leaves non-zero price/sellingPrice per item in logisticsInfo'
slug: change-order-v2-item-removal-with-compensateshippingchanges-free-shipping-leaves-nonzero-pricesellingprice-per-item-in-logisticsinfo
status: PUBLISHED
createdAt: 2026-11-16T22:27:56.000Z
updatedAt: 2026-11-16T22:27:56.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-order-v2-item-removal-with-compensateshippingchanges-free-shipping-leaves-nonzero-pricesellingprice-per-item-in-logisticsinfo
locale: en
kiStatus: Backlog
internalReference: 1485635
---

## Summary

When an item is removed through Change Order V2 on an order that has a free-shipping promotion, and the account has compensateShippingChanges enabled, the remaining item's per-item shipping in shippingData.logisticsInfo[].price and sellingPrice changes from 0 to the shipping amount that belonged to the removed item (e.g., 0 → 56). The expected value is still 0, because the shopper does not pay shipping.

The amount charged to the shopper and the order value stay correct: the shipping recalculated after the removal is offset by a manual discount of the same amount (ManualValues with a negative sign in the change totals, Shipping with a positive sign). Only the per-item freight in logisticsInfo is wrong.

Impact: integrations that sum logisticsInfo shipping per item (for example, to issue the invoice) get a total higher than the order value, and the invoice is rejected or diverges from the order. Engineering confirmed that this is not the intended behavior. In some occurrences listPrice of the remaining item also changed (to the removed item's share); that part could not be reproduced and is not confirmed.

## Simulation

Describe here what steps are needed to reproduce this behavior. Be careful not to expose confidential information, such as images or attachments.

## Workaround

1. When invoicing or reconciling, use the order value or the order's Shipping total in totals. Do not sum logisticsInfo shipping per item after a modification.

2. To get the original shipping per item, use the modification history: GET /api/order-system/orders/{changeOrderId}/changes (remove.shippingData and replace.from) instead of price/listPrice in logisticsInfo.