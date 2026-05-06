---
title: 'Promotion item will not show splitted after adding client preferences data'
slug: promotion-item-will-not-show-splitted-after-adding-client-preferences-data
status: PUBLISHED
createdAt: 2023-06-12T20:08:54.000Z
updatedAt: 2024-01-31T15:20:21.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: promotion-item-will-not-show-splitted-after-adding-client-preferences-data
locale: en
kiStatus: Backlog
internalReference: 842575
---

## Summary

When applying a More for Less promotion, the expected behavior is to separate the promotional item from the regular items, but the items will be grouped after adding client preferences data.

Depending on the moment the client preferences data is added, it creates an inconsistent experience for the client in the cart, or the order is created with items grouped.

## Simulation

- Add items to the cart to get a free or discounted one (the promotion and regular items will be splitted);
- Add client preferences data to the orderForm (the items will be grouped).

## Workaround

N/A