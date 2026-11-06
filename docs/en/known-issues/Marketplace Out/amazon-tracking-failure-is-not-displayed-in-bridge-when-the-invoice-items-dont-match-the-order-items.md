---
title: 'Amazon tracking failure is not displayed in Bridge when the invoice items don’t match the order items'
slug: amazon-tracking-failure-is-not-displayed-in-bridge-when-the-invoice-items-dont-match-the-order-items
status: PUBLISHED
createdAt: 2026-11-07T00:20:16.000Z
updatedAt: 2026-11-07T00:20:16.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-tracking-failure-is-not-displayed-in-bridge-when-the-invoice-items-dont-match-the-order-items
locale: en
kiStatus: Backlog
internalReference: 1482337
---

## Summary

In Amazon self-ship orders, when the invoice registered in the VTEX order has an item that is not in the Amazon order, the tracking information is not sent to Amazon, and no error message is displayed in Bridge. The order remains invoiced in VTEX, with no indication that Amazon did not receive the shipping confirmation.

The failure is recorded only in the integration logs, with the following messages:
Orders whose invoice lists the same items as the Amazon order are sent normally, with their status displayed in Bridge.


```
The VTEX invoiced item does not exist in the corresponding Amazon orderitem not found in order
```

## Simulation

1. Receive an Amazon self-ship order containing a kit and at least one other SKU.
2. Invoice the order in VTEX, listing the kit components together with the other SKU in the invoice items.
3. The tracking is not updated on Amazon.
4. In Bridge, no message is displayed for the order.

## Workaround

When invoicing the order, list the same SKUs as the Amazon order in the invoice items. For orders with a kit, list the kit SKU instead of its components.