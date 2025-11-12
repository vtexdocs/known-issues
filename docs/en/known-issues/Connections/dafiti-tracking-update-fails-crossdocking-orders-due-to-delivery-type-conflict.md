---
title: 'Dafiti Tracking update fails Crossdocking orders due to delivery type conflict'
slug: dafiti-tracking-update-fails-crossdocking-orders-due-to-delivery-type-conflict
status: PUBLISHED
createdAt: 2025-11-12T17:38:36.687Z
updatedAt: 2025-11-12T17:38:36.687Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-tracking-update-fails-crossdocking-orders-due-to-delivery-type-conflict
locale: en
kiStatus: Backlog
internalReference: 1323882
---

## Summary


By definition, the integration always sends the delivery type as **dropship**.
However, some merchants work with **crossdocking** orders.
When attempting to update the tracking information for these orders, Dafiti returns an error because the integration tries to change the delivery type from _crossdocking_ to _dropship_, which is not allowed.


#### Simulation



- Create or identify an order in Dafiti with **delivery type = crossdocking**.
- Trigger a tracking update from VTEX to Dafiti.
- Observe that the API response fails, as the integration attempts to set the delivery type to **dropship**, creating a conflict with the current value.


#### Workaround


N/A



