---
title: 'Los productos creados mediante API y no asociados a ningún SKU se muestran como disponibles en el panel de administración al usar cualquier filtro.'
slug: los-productos-creados-mediante-api-y-no-asociados-a-ningun-sku-se-muestran-como-disponibles-en-el-panel-de-administracion-al-usar-cualquier-filtro
status: PUBLISHED
createdAt: 2021-12-22T20:00:29.000Z
updatedAt: 2026-09-24T14:40:21.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-created-by-api-and-not-associated-with-any-sku-are-being-shown-as-available-on-the-admin-when-using-any-filter
locale: es
kiStatus: Fixed
internalReference: 492648
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los productos creados mediante la API y no asociados a ningún SKU aparecen como disponibles en el panel de administración al usar cualquier filtro, pero no aparecen si se busca directamente por el ID del producto.

## Simulación

- Crear un producto usando la API del catálogo: `/api/catalog/pvt/product?an=`;

- Buscar este producto en el panel de administración usando el filtro de ID del producto: myvtex.com/admin/Site/Produto.aspx. No se mostrará el producto.

- Buscar este producto en el panel de administración usando cualquier otro filtro, por ejemplo, el filtro de categoría. El producto aparecerá como disponible, pero no lo está.

![](https://vtexhelp.zendesk.com/attachments/token/yclXUD1jCWcb4efGFE18MigeN/?name=inline1508453060.png)

Estos nuevos productos sin SKU no están disponibles en la tienda, por lo que el problema se limita a la interfaz de usuario.

## Workaround

No existe ninguna solución alternativa.