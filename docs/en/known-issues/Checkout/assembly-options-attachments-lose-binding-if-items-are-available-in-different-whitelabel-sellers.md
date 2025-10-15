---
title: Assembly options attachments lose binding if items are available in different white-label sellers
slug: assembly-options-attachments-lose-binding-if-items-are-available-in-different-whitelabel-sellers
status: PUBLISHED
createdAt: 2025-10-15T21:11:12.144Z
updatedAt: 2025-10-15T21:11:12.144Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: assembly-options-attachments-lose-binding-if-items-are-available-in-different-whitelabel-sellers
locale: en
kiStatus: Backlog
internalReference: 1074856
---

## Summary


Assembly options attachments lose binding when two items are added to the cart from different white-label sellers (one of the sellers can be seller 1), and both have the same attachments registered in the assembly options.

The expected behavior is that each attachment is delivered according to its assembly options. However, both attachments will be delivered by the same seller, causing all the assembly options attachments and the second item to show as unavailable.

 ![](https://vtexhelp.zendesk.com/attachments/token/pAnVC0tyWPYhIrtDBJJXfERRR/?name=image.png)


#### Simulation



- Register two assembly options with the same attachments;
- Register stock of each assembly option in different white-label sellers;
- Register stock of the attachment in both white-label sellers;
- Add the assembly options to a cart.


#### Workaround


N/A


