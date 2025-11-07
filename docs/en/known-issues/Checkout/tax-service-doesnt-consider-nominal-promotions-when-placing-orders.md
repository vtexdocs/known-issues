---
title: "Tax Service doesn't consider nominal promotions when placing orders"
slug: tax-service-doesnt-consider-nominal-promotions-when-placing-orders
status: PUBLISHED
createdAt: 2025-11-07T21:28:59.758Z
updatedAt: 2025-11-07T21:28:59.758Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-consider-nominal-promotions-when-placing-orders
locale: en
kiStatus: Backlog
internalReference: 900120
---

## Summary


When using tax service, if there is a nominal promotion applied in the cart and an item split happens, the request for the tax service system doesn't have the nominal promotion applied, not allowing to finish the purchase, and the message "The requested order could not be created. Please try again" will be shown.


#### Simulation



- Create a nominal promotion with fulfillment as order origin;
- Add items to the cart, make sure the items split (here you can limit the promotion to a certain quantity of items);
- Try to finish the purchase.


#### Workaround


N/A


