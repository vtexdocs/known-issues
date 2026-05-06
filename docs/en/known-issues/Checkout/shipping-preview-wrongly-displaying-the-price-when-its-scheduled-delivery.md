---
title: "Shipping Preview wrongly displaying the price when it's scheduled delivery"
slug: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
status: PUBLISHED
createdAt: 2022-02-25T18:08:32.000Z
updatedAt: 2024-03-27T15:39:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-price-when-its-scheduled-delivery
locale: en
kiStatus: Fixed
internalReference: 532487
---

## Summary

Delivery price displayed in shipping-preview (cart) is incorrect when items are scheduled delivery and all these items leave in the same SLA. Even with the API returning the correct value, the UI does not reflect this information and displays the incorrect value.

## Simulation

Add two or more items in the cart with scheduled delivery, the UI will show a different value than the API return

## Workaround

N/A