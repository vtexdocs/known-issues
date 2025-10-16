---
title: Minimum of items can be sent as 0 through the field "numberOfItemsPerShipment" in API
slug: minimum-of-items-can-be-sent-as-0-through-the-field-numberofitemspershipment-in-api
status: PUBLISHED
createdAt: 2025-10-16T19:59:02.999Z
updatedAt: 2025-10-16T19:59:02.999Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: minimum-of-items-can-be-sent-as-0-through-the-field-numberofitemspershipment-in-api
locale: en
kiStatus: Backlog
internalReference: 1149818
---

## Summary


Minimum of items can be sent as 0 through the field "numberOfItemsPerShipment" in API, and when filed with 0, the shipping police becomes unavailable.


#### Simulation


API routes where, it's possible to send the field numberOfItemsPerShipment as 0:

https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-
https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies

After the field "numberOfItemsPerShipment" is filled with 0, the shipping simulation in the admin, will show the shipping police as available, but it will not work in the shopping process.


#### Workaround


Just modify the field "numberOfItemsPerShipment" to a value 1 our above.



