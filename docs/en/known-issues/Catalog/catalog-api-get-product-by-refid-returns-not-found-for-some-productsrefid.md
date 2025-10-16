---
title: Catalog API Get Product by RefId returns "not found" for some products/RefId
slug: catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid
status: PUBLISHED
createdAt: 2025-10-16T20:27:24.472Z
updatedAt: 2025-10-16T20:27:24.472Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid
locale: en
kiStatus: Backlog
internalReference: 1157371
---

## Summary


API Get Product by RefId returns "not found" for some products/RefId, even with ref registered in the VTEX catalog

✅️ if you search for the refid in the UI it returns the product
❌️ search using the route "/productgetbyrefid", returns not found

*Note: this issue also happens for when searching skubyrefid


#### Simulation



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://vtexhelp.zendesk.com/attachments/token/BksgxlJ6S9SSqeullsdgcvnUm/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/vpk2h8A9N3j95Cw6XF7CL3cbt/?name=image.png)




#### Workaround


n/a