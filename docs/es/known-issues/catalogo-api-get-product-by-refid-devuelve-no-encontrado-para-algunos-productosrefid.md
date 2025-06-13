---
title: [Catálogo] API Get Product by RefId devuelve "no encontrado" para algunos productos/RefId
slug: catalogo-api-get-product-by-refid-devuelve-no-encontrado-para-algunos-productosrefid
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-get-product-by-refid-returns-not-found-for-some-productsrefid
locale: es
kiStatus: Backlog
internalReference: 1157371
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


API Get Product by RefId devuelve "no encontrado" para algunos productos/RefId, incluso con ref registrada en el catálogo VTEX

✅️ si se busca el refid en la UI devuelve el producto
❌️ búsqueda utilizando la ruta "/productgetbyrefid", devuelve no encontrado

*Nota: este problema también se produce al buscar skubyrefid


#### Simulación



https://VTEX.vtexcommercestable.com.br/api/catalog_system/pvt/products/productgetbyrefid/

 ![](https://vtexhelp.zendesk.com/attachments/token/BksgxlJ6S9SSqeullsdgcvnUm/?name=image.png)

 ![](https://vtexhelp.zendesk.com/attachments/token/vpk2h8A9N3j95Cw6XF7CL3cbt/?name=image.png)




#### Workaround


n/a