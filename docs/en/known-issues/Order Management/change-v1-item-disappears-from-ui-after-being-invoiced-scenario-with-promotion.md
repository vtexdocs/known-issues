---
title: 'Change v1 Item disappears from UI after being invoiced, scenario with promotion.'
slug: change-v1-item-disappears-from-ui-after-being-invoiced-scenario-with-promotion
status: PUBLISHED
createdAt: 2024-08-13T16:10:56.000Z
updatedAt: 2026-10-29T22:29:15.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-v1-item-disappears-from-ui-after-being-invoiced-scenario-with-promotion
locale: en
kiStatus: Fixed
internalReference: 1080187
---

## Summary

We identified a scenario in Change V1 where, after applying a "buy 2 and get a discount on the second unit promotion", when we invoice one of the items and the second is removed via Change V1, the information about the product that was invoiced disappears from the orders UI, leaving only the information about the item that was removed in Change V1.

Since Change V1 does not use the itemIndex, validation is done by the id, which generates this behavior.

In this case, we will also not have the information about the item invoiced in the API.

## Simulation

To simulate this scenario, you need to create a promotion of the type "buy 2 and get a discount on the second unit", then invoice only one of the items in the order and remove the other via change v1.
The behavior described in this KI will be identified, that is, the product that was invoiced will not appear in the Orders UI.

## Workaround

We are currently developing Change V2, where this scenario does not occur, we suggest migrating to change v2.