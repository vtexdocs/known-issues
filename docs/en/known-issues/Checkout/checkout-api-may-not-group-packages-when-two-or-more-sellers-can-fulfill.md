---
title: 'Checkout API may not group packages when two or more sellers can fulfill'
slug: checkout-api-may-not-group-packages-when-two-or-more-sellers-can-fulfill
status: PUBLISHED
createdAt: 2023-05-03T22:24:28.000Z
updatedAt: 2023-05-03T22:24:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-api-may-not-group-packages-when-two-or-more-sellers-can-fulfill
locale: en
kiStatus: Backlog
internalReference: 802156
---

## Summary

When two or more sellers can fulfill a cart with more than one item, Checkout API may not group packages selecting different sellers for each product. This increases the shipping value for the shopper.

This behavior was noticed when two items were added to the cart; one of the items could be fulfilled by only one seller, and a package split happened even though the other item could be fulfilled by the same seller. But it's not limited to thethis scenatrio.

## Simulation

There is no easy way to replicate the scenario, but refer to orders/cart where the issue happened.

## Workaround

N/A