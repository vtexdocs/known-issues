---
title: 'Erro in Change v2 flow with duplicated itens'
slug: erro-in-change-v2-flow-with-duplicated-itens
status: PUBLISHED
createdAt: 2025-10-16T20:51:00.542Z
updatedAt: 2025-10-16T20:51:00.542Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: erro-in-change-v2-flow-with-duplicated-itens
locale: en
kiStatus: Backlog
internalReference: 1219914
---

## Summary


The Change v2 functionality, used to modify orders directly on the platform, has a problem when the order contains two items with the same SKU ID. In this situation, when trying to delete, edit or manipulate one of the items, the system cannot correctly identify which item should be changed within the array of items, generating an error that prevents the change flow from continuing.
Once this error occurs, the change cannot be undone, and the change is not carried out correctly.


#### Simulation



- Create an order with two items that have the same SKU ID.

- Access the Change v2 screen for this order.

- Try to make a change (such as removing or editing one of the duplicate items).

- Notice that the system does not locate the item correctly and displays an error, preventing the change from proceeding.


#### Workaround



If the error has not yet been made (i.e. no action has been taken in Change v2), the merchant can use the old flow, Change v1, to edit the order.
If the change attempt via Change v2 has already taken place, we recommend:


- Continue with the order as normal until invoicing;
- Then carry out the return's process, if necessary;
- Alternatively, carry out the change manually, outside the platform, if this is a one-off scenario.



