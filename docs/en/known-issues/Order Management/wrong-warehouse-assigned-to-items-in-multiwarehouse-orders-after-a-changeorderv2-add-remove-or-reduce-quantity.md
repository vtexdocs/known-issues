---
title: 'Wrong warehouse assigned to items in multi-warehouse orders after a ChangeOrderV2 (add, remove or reduce quantity)'
slug: wrong-warehouse-assigned-to-items-in-multiwarehouse-orders-after-a-changeorderv2-add-remove-or-reduce-quantity
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-11-25T00:19:25.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-warehouse-assigned-to-items-in-multiwarehouse-orders-after-a-changeorderv2-add-remove-or-reduce-quantity
locale: en
kiStatus: Backlog
internalReference: 1433311
---

## Summary

When an order with items fulfilled from different warehouses is modified through the post-purchase change flow, an item may end up saved with the wrong warehouse. It can happen when an item is added, and also when other items are removed or have their quantity reduced: a remaining item may be reassigned to the warehouse (and shipping rate) of another item in the order. The order record and the Admin then show a warehouse that differs from the stock reservation, which keeps the original warehouse. It does not originate from invoicing or from the ERP.

## Simulation

1. Marketplace order with two items served by different warehouses that share the same delivery dock, same shipping option.

2. Reduce the quantity of one item, or remove a line, through the change flow.

3. Compare the item’s warehouse in the order before and after the change, and the stock reservation. The reservation is not updated.

## Workaround

No validated workaround for removals or quantity reductions. The stock reservation keeps the original warehouse, so inventory is not affected; the divergence is in the order record. If the exact warehouse is critical, avoid removing items from multi-warehouse orders through the change flow (not validated).