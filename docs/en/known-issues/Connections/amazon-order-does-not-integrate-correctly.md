---
title: 'Amazon order does not integrate correctly'
slug: amazon-order-does-not-integrate-correctly
status: PUBLISHED
createdAt: 2025-11-25T21:11:57.041Z
updatedAt: 2025-11-25T21:11:57.041Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-does-not-integrate-correctly
locale: en
kiStatus: Fixed
internalReference: 1109828
---

## Summary


Amazon order is not sent to OMS correctly or it does not follow the entire workflow correctly getting stuck at some stage.



#### Simulation


In order to make the reservation for Amazon orders, the integration does not setup the deliveryChannel information.

Most of the times the lack of this info has no impacts on the order, but in some error scenarios (like timeout to confirm the reservation) the logistics system needs this information to reprocess the order.


#### Workaround


N/A



