---
title: "Product Insert/Update API allows '\n' in the textLink field."
id: 5TfUw5tTxBEu9HkL3ypBKw
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.325Z
updatedAt: 2024-02-16T20:28:55.474Z
publishedAt: 2024-02-16T20:28:55.474Z
firstPublishedAt: 2022-06-28T16:55:54.138Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-insertupdate-api-allows-n-in-the-textlink-field
locale: en
kiStatus: No Fix
internalReference: 486459
---

## Summary


Currently, the APIs for the Catalog product Insertion or Update allows the character "\n" in the textLink





## Simulation


1) Use the GET product API to fetch data from a product https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-get-product

2) Update the product data via API inserting a "\n" character in the textLink field: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-put-product

3) Open the given product URL, you'll receive a 404 response.





## Workaround


Saving this data via UI (Produto.aspx) saves the data correctly, allowing for the product page to be properly rendered.

