---
title: 'Incorrect ShippingEstimateDate for order FOB'
slug: incorrect-shippingestimatedate-for-order-fob
status: PUBLISHED
createdAt: 2025-11-14T19:16:45.409Z
updatedAt: 2025-11-14T19:16:45.409Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-shippingestimatedate-for-order-fob
locale: en
kiStatus: Backlog
internalReference: 269104
---

## Summary

"shippingEstimateDate" is incorrectly calculated for orders with the type FOB


#### Simulation



- Create an order via API sending the parameter `"isFOB": true` in the "shippingData"
- Do a Get Order and check that the parameter "ShippingEstimateDate" is not considering the "shippingEstimate" sent by the marketplace


#### Workaround


N/A


