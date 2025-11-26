---
title: 'Product returning as unavailable even with stock in a whitelabel seller'
slug: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
status: PUBLISHED
createdAt: 2025-11-26T20:40:09.992Z
updatedAt: 2025-11-26T20:40:09.992Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: en
kiStatus: No Fix
internalReference: 404499
---

## Summary


For stores using the Legacy CMS (Portal) or while using the Catalog Search API, if a product is out of stock in the marketplace and available only on a whitelabel seller, and if the product is not set as "show out of stock", it will be considered unavailable. The PDP will behave as a 404 page; also, it won't be returned on the API.

This scenario also affects the PDP for stores using the VTEX IO Store Framework, which are based on the Catalog Search API.

This doesn't happen with Intelligent Search, which provides full support for this scenario when using search regionalization.


#### Simulation



- Register stock only in a franchise account.
- Disable the flag "Show out of stock".
-

The PDP should behave as if the product is unavailable.



#### Workaround


Enable "Show out of stock" in the marketplace account.



