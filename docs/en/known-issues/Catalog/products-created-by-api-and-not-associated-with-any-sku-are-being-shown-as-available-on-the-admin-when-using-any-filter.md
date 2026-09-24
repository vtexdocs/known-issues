---
title: 'Products created by API and not associated with any SKU are being shown as available on the Admin when using any filter'
slug: products-created-by-api-and-not-associated-with-any-sku-are-being-shown-as-available-on-the-admin-when-using-any-filter
status: PUBLISHED
createdAt: 2021-12-22T20:00:29.000Z
updatedAt: 2026-09-24T14:40:21.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-created-by-api-and-not-associated-with-any-sku-are-being-shown-as-available-on-the-admin-when-using-any-filter
locale: en
kiStatus: Fixed
internalReference: 492648
---

## Summary

Products created by API and not associated with any SKU are being shown as available on the Admin when using any filter but not being shown at the Admin if we search directly by the ProductId.

## Simulation

- Create a Product using the Catalog API: `/api/catalog/pvt/product?an=`;
- Search for this product on the Admin using the ProductId filter: myvtex.com/admin/Site/Produto.aspx. It will not return the product;
- Search for this product on the Admin using any other filter, for example, the Category filter. The product will be shown as available, but it is not available.

 ![](https://vtexhelp.zendesk.com/attachments/token/yclXUD1jCWcb4efGFE18MigeN/?name=inline1508453060.png)

These new products without any SKU are not available in the store, so the problem here is only on the UI

## Workaround

There is no workaround.