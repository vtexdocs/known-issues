---
title: Catalog Inactivating productid using API isn't inactivating SKU
slug: catalog-inactivating-productid-using-api-isnt-inactivating-sku
status: PUBLISHED
createdAt: 2025-07-24T17:43:17.789Z
updatedAt: 2025-07-24T17:43:17.789Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-inactivating-productid-using-api-isnt-inactivating-sku
locale: en
kiStatus: Backlog
internalReference: 1157944
---

## Summary


Inactivating productid using API isn't inactivating SKU
Product stay available at PDP


#### Simulation



✅️ Inactive product
❌️ Active SKU UI
❌️ Sku available from PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://vtexhelp.zendesk.com/attachments/token/FVMLGum8BwYRG5crfDPmb0Gef/?name=image.png)


#### Workaround


Whenever the whole product including their SKUs wants to be inactivated, the merchant needs to inactivate the SKUs


