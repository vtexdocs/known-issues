---
title: "Payout and Transaction split don't work in the same order for Multilevel Omnichannel Inventory"
slug: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
status: PUBLISHED
createdAt: 2023-03-23T19:03:08.000Z
updatedAt: 2023-03-27T12:27:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
locale: en
kiStatus: Backlog
internalReference: 777201
---

## Summary

In a marketplace with multi-level relationship (MOI) sellers, when a cart is assembled with at least one seller using transaction split and others using payout split, the transactions with payout split will be duplicated repeating the items from different sellers. This scenario will not allow placing the order, and the message "Sorry. Could not process the requested payments." will be shown.

## Simulation

- Configure a seller with checkout endpoint / to use multi-level relationship (MOI);
- Configure a seller with fulfillment endpoint and enable transaction split;
- Assemble a cart with those sellers;
- Place the order.

## Workaround

Use payout split for all sellers