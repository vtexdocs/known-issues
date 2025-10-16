---
title: Discrepancy in display of reservations in Inventory Management
slug: discrepancy-in-display-of-reservations-in-inventory-management
status: PUBLISHED
createdAt: 2025-10-16T20:51:12.897Z
updatedAt: 2025-10-16T20:51:12.897Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: discrepancy-in-display-of-reservations-in-inventory-management
locale: en
kiStatus: Backlog
internalReference: 1220722
---

## Summary



The inventory management screen exhibits unexpected behavior where the quantity of reserved items displayed on the home screen is greater than the quantity displayed in the reserved items modal. This behavior occurs for reservations in the "Canceled_AbortedCommitted" status, and these reservations are not filtered correctly on the home screen.


#### Simulation



There is no easy way to reproduce this scenario, but there is a high chance to occur with reservation with the status "Canceled_AbortedCommitted".


#### Workaround



When canceling the reservation again, the cancellation works and the reservation no longer appears in the user interface.

https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel?endpoint=post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel

