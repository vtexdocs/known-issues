---
title: 'ew UI does not suggest the correct Item to be returned once the order has a change'
slug: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
status: PUBLISHED
createdAt: 2023-01-18T15:04:39.000Z
updatedAt: 2023-01-18T17:05:33.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
locale: en
kiStatus: Backlog
internalReference: 735854
---

## Summary

New UI does not suggest the correct item to be returned.
The new UI suggest the item not already invoiced as output or can suggest the item removed from the original items. It happens when order has a change even change value. The "itemsReturnable" is not correct on "api/orders/..invoices/summary".

## Simulation

Create an order with two or more items execute a change removing the itemindex0 and try the return on new UI. The itemindex0 will e a option to be returned.

## Workaround

There is no workaround for now.