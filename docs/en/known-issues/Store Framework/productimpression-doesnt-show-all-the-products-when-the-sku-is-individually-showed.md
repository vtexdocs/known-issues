---
title: "ProductImpression doesn't show all the products when the SKU is individually showed"
slug: productimpression-doesnt-show-all-the-products-when-the-sku-is-individually-showed
status: PUBLISHED
createdAt: 2026-01-06T14:17:26.495Z
updatedAt: 2026-01-06T14:17:26.495Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-doesnt-show-all-the-products-when-the-sku-is-individually-showed
locale: en
kiStatus: Backlog
internalReference: 717617
---

## Summary


When the store "detaches" the SKU from a product to be exhibited individually on the storefront the ProductImpression from the GTM only sees the products by its productID, not by each SKUId. So if the product has 3 different SKUs on the search page, the ProductImpression will only show it as one product.


#### Simulation


Go to any store that "detaches" the SKU from a product into individual products and try to see the ProductImpression from the Data Layer on GTM.


#### Workaround



N/A