---
title: 'La importación de productos&SKUs no es compatible con ''lb'''
id: 1OjtnFf9MpY1IFzQa8Ua2t
status: PUBLISHED
createdAt: 2022-06-17T19:38:17.726Z
updatedAt: 2024-02-16T20:29:45.337Z
publishedAt: 2024-02-16T20:29:45.337Z
firstPublishedAt: 2022-06-17T19:38:18.052Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: productsskus-import-does-not-support-lb
locale: es
kiStatus: No Fix
internalReference: 337860
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la hoja de catálogo de Productos y SKUs no soporta la unidad de medida 'lb'. `/admin/Site/Relatorio_Skus.aspx`

En realidad se trata de una unidad de lb en nuestro SKU UI que es configurable:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/la-importacion-de-productosskus-no-es-compatible-con-lb_1.png)

Sin embargo, la importación de productos&sku actualmente devuelve un mensaje de error cada vez que un usuario intenta importar cualquier sku que contenga este valor, independientemente de si los otros campos son válidos:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/la-importacion-de-productosskus-no-es-compatible-con-lb_2.png)







## Simulación


1) Establecer "lb" como unidad de medida de un sku

2) Exportar una hoja de productos y skus para este sku filtrado

3) Intente importar de nuevo haciendo un pequeño cambio en, digamos, el nombre del sku. Recibirá el error.







## Workaround


Establecer los valores a través de la API y/o directamente a través del administrador.

