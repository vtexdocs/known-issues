---
title: 'Pick-up point unselected by Checkout UI when changing SLA'
slug: pickup-point-unselected-by-checkout-ui-when-changing-sla
status: PUBLISHED
createdAt: 2025-11-07T22:01:04.228Z
updatedAt: 2025-11-07T22:01:04.228Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-unselected-by-checkout-ui-when-changing-sla
locale: en
kiStatus: Backlog
internalReference: 1199158
---

## Summary


Consider a cart with two or more items from different regular sellers, let's say, seller A and seller B. If pickup options were already selected as the SLAs to fulfill these items, when changing the selected pickup option for the items of one of the sellers (let's say, seller A) using the Pickup Point Modal, the Checkout UI unselects the pickup option selected for the items of the other seller (let's say, seller B).

When this happens, the UI sends `logisticsInfo[].selectedSla` as `null` for the items of seller B on the `/shippingData` request and the `logisticsInfo[].selectedSla` of these items on the orderForm defaults to a delivery one.


#### Simulation



- Add two items from 2 different sellers to the cart;
- Change to pick-up point;
- Change the selected SLA for one of the items.


#### Workaround


N/A


