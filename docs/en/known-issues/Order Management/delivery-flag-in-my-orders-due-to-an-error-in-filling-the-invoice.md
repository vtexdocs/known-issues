---
title: 'Delivery Flag in My Orders. Due to an error in filling the Invoice.'
slug: delivery-flag-in-my-orders-due-to-an-error-in-filling-the-invoice
status: PUBLISHED
createdAt: 2022-03-21T22:58:11.000Z
updatedAt: 2026-10-29T21:20:17.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delivery-flag-in-my-orders-due-to-an-error-in-filling-the-invoice
locale: en
kiStatus: Fixed
internalReference: 547053
---

## Summary

If the order invoice does not have the correct information on the quantity of items and the order SKU Ids. It will not be possible to insert the "`Delivered`" flag in 'My Orders'.

## Simulation

To simulate this behavior, it is possible to place an order with only one Item.

When invoicing the order, insert the ID of another item on the invoice and/or insert the quantity of more Items.

After invoicing the order, do the "update tracking" and enter the information of "`isDelivered: true`".

We will have the order information "delivered" in the UI, however, in "My Orders" it will continue with the information of "Sending Order".

## Workaround

Be careful not to insert more items on the invoice and/or items with different order IDs. Because in these cases the order will not have the "delivered" flag in My Orders.