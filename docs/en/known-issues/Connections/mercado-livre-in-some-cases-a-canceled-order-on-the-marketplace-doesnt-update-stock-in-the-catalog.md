---
title: Mercado Livre In some cases, a canceled order on the marketplace doesn't update stock in the catalog
slug: mercado-livre-in-some-cases-a-canceled-order-on-the-marketplace-doesnt-update-stock-in-the-catalog
status: PUBLISHED
createdAt: 2025-10-16T19:57:44.231Z
updatedAt: 2025-10-16T19:57:44.231Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-in-some-cases-a-canceled-order-on-the-marketplace-doesnt-update-stock-in-the-catalog
locale: en
kiStatus: Backlog
internalReference: 1146768
---

## Summary


In some cases, a canceled order on the marketplace doesn't update stock in the catalog. This scenario impacts accounts that work with few units in stock (1 / 2 units)



#### Simulation



Scenario
Ad with one unit in stock
When an order is completed with the last unit in stock > Mercado Livre resets the ad stock and pauses

In some situations
Order created on Mercado Livre > Mercado Livre clears stock and pauses ad
Minutes later this order was canceled on Mercado Livre
Order canceled > Mercado Livre returns stock and activates the ad on Mercado Livre
But the stock doesn't return to the VTEX Catalog inventory



#### Workaround


Ad to have more than 2 units in stock



