---
title: 'Order with change itens cannot be invoiced referencing the items'
slug: order-with-change-itens-cannot-be-invoiced-referencing-the-items
status: PUBLISHED
createdAt: 2025-11-05T12:13:02.108Z
updatedAt: 2025-11-05T12:13:02.108Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-change-itens-cannot-be-invoiced-referencing-the-items
locale: en
kiStatus: Backlog
internalReference: 784171
---

## Summary



Today, when removing an item from an order via the change items flow, the expectation is that the item will not be displayed during the invoice items flow;
however, due to the way the change flow acts on the order json, even though the item has been removed from the order it is still displayed when the user performs the Submit invoice referencing items process;

And for this reason the UI returns a message preventing the user from continuing with this invoice flow;


#### Simulation


1 - Have an order in "Handling shipment" status and select "Change item";
2 - Remove one or more units of an existing SKU from the order;
3 - Invoice the order (via UI), by selecting the option invoice - Submit invoice referencing items;
4 - And then, we can observe that the item removed from the order is still available for selection in this area;
5 - When trying to perform the flow of invoice items referencing items choosing or not the item that was removed the UI returns an error, thus preventing the user from continuing with the flow of invoice referencing item;



#### Workaround


** **
No workaround.


