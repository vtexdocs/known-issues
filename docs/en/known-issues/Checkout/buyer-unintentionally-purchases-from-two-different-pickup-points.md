---
title: 'Buyer unintentionally purchases from two different pickup points'
slug: buyer-unintentionally-purchases-from-two-different-pickup-points
status: PUBLISHED
createdAt: 2021-06-14T22:20:22.000Z
updatedAt: 2026-09-17T15:38:30.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: buyer-unintentionally-purchases-from-two-different-pickup-points
locale: en
kiStatus: No Fix
internalReference: 381546
---

## Summary

When the buyer selects a pickup store where some of the items are unavailable, the screen shows the selection as done and highlights the store that has all the products as the selected one. The buyer can move on to payment and ends up buying from two different pickup points, without that being visible anywhere in the interface.

## Simulation

- Go to checkout for some affected store.
- In the pickup step, select a store where one of the items is unavailable.
- The screen shows the selection as done, and a different store appears as selected.
- Proceed to payment — it is enabled and the purchase can be completed from two pickup points.

## Workaround

There is no workaround available