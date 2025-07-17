---
title: Catálogo Desactivar productid usando API no es inactivar SKU
slug: catalogo-desactivar-productid-usando-api-no-es-inactivar-sku
status: PUBLISHED
createdAt: 2025-07-17T19:33:31.265Z
updatedAt: 2025-07-17T19:33:31.265Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-inactivating-productid-using-api-isnt-inactivating-sku
locale: es
kiStatus: Backlog
internalReference: 1157944
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Desactivar productid usando API no es inactivar SKU
El producto sigue disponible en PDP


#### Simulación



✅️ Producto inactivo
❌️ SKU activo UI
❌️ Sku disponible en PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://vtexhelp.zendesk.com/attachments/token/FVMLGum8BwYRG5crfDPmb0Gef/?name=image.png)


#### Workaround


Siempre que se desee inactivar todo el producto, incluidas sus SKU, el comerciante deberá inactivar las SKU


