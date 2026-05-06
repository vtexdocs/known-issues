---
title: 'ProductImpression no muestra todos los productos cuando se muestra el SKU de forma individual'
slug: productimpression-no-muestra-todos-los-productos-cuando-se-muestra-el-sku-de-forma-individual
status: PUBLISHED
createdAt: 2022-12-15T22:30:41.000Z
updatedAt: 2026-01-06T15:59:19.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productimpression-doesnt-show-all-the-products-when-the-sku-is-individually-showed
locale: es
kiStatus: Backlog
internalReference: 717617
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la tienda «separa» el SKU de un producto para mostrarlo individualmente en la página de inicio, la métrica «ProductImpression» de GTM solo detecta los productos por su «productID», y no por cada «SKUId». Por lo tanto, si el producto tiene tres SKU diferentes en la página de búsqueda, la métrica «ProductImpression» solo lo mostrará como un único producto.

## Simulación

Ve a cualquier tienda que «separe» el SKU de un producto en productos individuales e intenta ver el ProductImpression desde la capa de datos en GTM.

## Workaround

N/A