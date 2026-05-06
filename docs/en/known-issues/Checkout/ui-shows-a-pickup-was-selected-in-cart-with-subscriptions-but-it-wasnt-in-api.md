---
title: "UI shows a pick-up was selected in cart with subscriptions but it wasn't in API"
slug: ui-shows-a-pickup-was-selected-in-cart-with-subscriptions-but-it-wasnt-in-api
status: PUBLISHED
createdAt: 2024-03-08T19:08:01.000Z
updatedAt: 2024-03-08T19:08:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-a-pickup-was-selected-in-cart-with-subscriptions-but-it-wasnt-in-api
locale: en
kiStatus: Backlog
internalReference: 996976
---

## Summary

Pick-up options are offered to shoppers in a cart with an item with a subscription. When one of the pick-ups is selected, checkout changes to delivery automatically, but the UI still shows that the pick-up was selected.

## Simulation

- Configure a subscription;
- Add the item with the subscription to the cart;
- In the shipping step, select "Pick up in store";
- Check the orderForm via API, and delivery will be selected.

## Workaround

Open a ticket to VTEX Support asking to enable pickup points for subscription orders.