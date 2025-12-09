---
title: "add_to_cart event doesn't send the discount info and the discount price"
slug: addtocart-event-doesnt-send-the-discount-info-and-the-discount-price
status: PUBLISHED
createdAt: 2025-12-09T17:54:04.523Z
updatedAt: 2025-12-09T17:54:04.523Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-event-doesnt-send-the-discount-info-and-the-discount-price
locale: en
kiStatus: Backlog
internalReference: 1337368
---

## Summary


When a product has a promotion applied, the add_to_cart event should send the discount information and the price with the discount. This is described on the GA4 documentation: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?utm_source=chatgpt.com&client_type=gtag#add_to_cart_item. But right now, our add_to_Cart event is not doing it.


#### Simulation


Try to add a product to the cart of your store and look at the add_to_cart_event. There is no discount on the response, and the price is still the full price.


#### Workaround


N/A



