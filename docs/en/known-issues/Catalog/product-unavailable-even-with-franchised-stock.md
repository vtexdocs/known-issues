---
title: 'Product unavailable even with franchised stock'
slug: product-unavailable-even-with-franchised-stock
status: PUBLISHED
createdAt: 2025-09-10T13:35:39.286Z
updatedAt: 2025-09-10T13:35:39.286Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-unavailable-even-with-franchised-stock
locale: en
kiStatus: No Fix
internalReference: 404499
---

## Summary


If the product is out of stock in the marketplace, on any other regular sellers, and the **show out of stock** flag is unchecked, the product will be displayed out of stock on the storefront or Search API, even though it has stock in franchise accounts. It is possible to add the product to the cart.


    Show out of stock? • False -> 404• True -> regionalization -> check stocks from franchise accounts

##

#### Simulation



- Put stock in the franchise account.
- Set the flag `Show out of stock` as `no`.
-

See the product is unavailable on the front.



#### Workaround


Set `Show out of stock` as `yes` in the marketplace account.


