---
title: 'Shipping Preview showing unavailability message for delivery'
slug: shipping-preview-showing-unavailability-message-for-delivery
status: PUBLISHED
createdAt: 2025-10-16T20:33:41.713Z
updatedAt: 2025-10-16T20:33:41.713Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-showing-unavailability-message-for-delivery
locale: en
kiStatus: Backlog
internalReference: 1170877
---

## Summary


The shipping preview in the cart does not consider the selected SLA, even though the Checkout API is correct. It shows the message "Shipping not available for your location."

 ![](https://vtexhelp.zendesk.com/attachments/token/oKGiw0BqXd83twkctR84fT0Wc/?name=image.png)

This behavior was noticed in particular countries, such as Argentina and Colombia, but it's not limited to those 2.


#### Simulation



- Add an item to the cart;
- Type a postal code with the available SLA.


#### Workaround


N/A - Refreshing the page will show the SLA.


