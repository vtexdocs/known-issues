---
title: 'Item added to change order is in another package after invoiced'
slug: item-added-to-change-order-is-in-another-package-after-invoiced
status: PUBLISHED
createdAt: 2021-08-12T23:01:42.000Z
updatedAt: 2023-05-09T12:40:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: item-added-to-change-order-is-in-another-package-after-invoiced
locale: en
kiStatus: Backlog
internalReference: 412526
---

## Summary

Items removed or added by the change order flow are not part of the package, so they will not show up in the invoice email, and in case all items in an order are removed and added later the invoice email is not sent, because the added items are not added to the original order package;

## Simulation

1 - Have an order in "**Handling shipping**" status and then select "_Item Change_";
2 - Add one or more units of an existing SKU to the order (or add a new SKU);
3 - Check that the unit has been added to the package;
4 - Invoice the order (via UI or API). In this case, I made it through the UI (_"Invoice package" > "Send an invoice" > "Total"_). But you can do this using this endpoint;
5 - And then, we can observe that, even after invoice the entire package, the added unit was in a separate package;
6 - And it is not possible to invoice this package separately;

The order will be normally in the "**Invoiced**" status, but this detail is not very "user-friendly" (separated packages):

## Workaround

Unfortunately, we don't have a workaround for this scenario.