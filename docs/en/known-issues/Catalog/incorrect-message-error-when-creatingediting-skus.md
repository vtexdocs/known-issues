---
title: 'Incorrect message error when creating/editing SKUs'
slug: incorrect-message-error-when-creatingediting-skus
status: PUBLISHED
createdAt: 2025-12-05T20:27:39.711Z
updatedAt: 2025-12-05T20:27:39.711Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-message-error-when-creatingediting-skus
locale: en
kiStatus: Backlog
internalReference: 774518
---

## Summary


In order to create or edit an SKU is necessary to fill in the required fields, such as shipment weight, height, width, and length. However, when we leave one of these fields without a valid value and save the SKU, Admin returns a message error about specifications, even when there are no required specifications to be filled.



#### Simulation



- Go to Catalog Module
- Add a new product and save it to create a new SKU
- Complete all the fields, except for shipment information - which is required
- Save the SKU and note that 2 messages will pop up: "Invalid parameters" and "Specifications not entered Check tab"


#### Workaround


There is no workaround


