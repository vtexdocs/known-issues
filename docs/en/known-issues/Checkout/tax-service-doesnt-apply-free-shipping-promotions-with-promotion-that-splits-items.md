---
title: "Tax Service doesn't apply free shipping promotions with promotion that splits items"
slug: tax-service-doesnt-apply-free-shipping-promotions-with-promotion-that-splits-items
status: PUBLISHED
createdAt: 2025-11-07T21:32:13.799Z
updatedAt: 2025-11-07T21:32:13.799Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-apply-free-shipping-promotions-with-promotion-that-splits-items
locale: en
kiStatus: Backlog
internalReference: 995527
---

## Summary


When using the tax service, if there is a promotion that splits items, for example, a More for Less promotion and a free shipping promotion, the free shipping is not applied correctly for all items in the tax service request, causing a wrong calculation and avoiding the order being created with the message "The requested order could not be created. Please try again."


#### Simulation



- Configure Tax Service;
- Create a More for Less promotion with fulfillment as the order origin and limit the promotion to a certain quantity of items;
- Create a free shipping promotion with fulfillment as order origin;
- Assemble a cart and try to place the order.


#### Workaround


N/A


