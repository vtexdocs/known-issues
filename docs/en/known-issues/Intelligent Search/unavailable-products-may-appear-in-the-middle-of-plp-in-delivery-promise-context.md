---
title: 'Unavailable products may appear in the middle of PLP in Delivery Promise context'
slug: unavailable-products-may-appear-in-the-middle-of-plp-in-delivery-promise-context
status: PUBLISHED
createdAt: 2025-11-26T14:27:36.252Z
updatedAt: 2025-11-26T14:27:36.252Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unavailable-products-may-appear-in-the-middle-of-plp-in-delivery-promise-context
locale: en
kiStatus: Backlog
internalReference: 1330836
---

## Summary


When `hideUnavailableItems` is `false`, it is expected that unavailable products appear at the end of the PLP. However, in the Delivery Promise context, unavailable products may appear in the middle of PLP.

This occurs because Intelligent Search evaluates the better-scoped seller’s availability apart from Delivery Promises. That affects the position of the product in PLP, but does not affect the Delivery Promises availability, keeping displaying the product as unavailable if it does not have stock in Delivery Promises.


#### Simulation



- Store:
In a store that uses **Delivery Promises** and has a postal code set, unavailable products appear in the middle of the **Product Listing Page (PLP)** results.


- Intelligent Search API:
When executing the Product Search route with `hideUnavailableItems = false`, you find unavailable products in the middle of available products in the search results.



#### Workaround


N/A



