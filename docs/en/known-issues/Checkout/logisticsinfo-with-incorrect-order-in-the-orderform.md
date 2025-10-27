---
title: 'logisticsInfo with incorrect order in the orderForm'
slug: logisticsinfo-with-incorrect-order-in-the-orderform
status: PUBLISHED
createdAt: 2025-10-16T20:32:42.541Z
updatedAt: 2025-10-16T20:32:42.541Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: logisticsinfo-with-incorrect-order-in-the-orderform
locale: en
kiStatus: Backlog
internalReference: 1170225
---

## Summary


Items in `shippingData.logisticsInfo` are not ordered according to the `itemIndex` property, causing inconsistencies only in the checkout UI, but placing the order is still possible.


#### Simulation


There is no straightforward step-by-step process for replicating this scenario, but checking the orderForm via API.


#### Workaround


N/A


