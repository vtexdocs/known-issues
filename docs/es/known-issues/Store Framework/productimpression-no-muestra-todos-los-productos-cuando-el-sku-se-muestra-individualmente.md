---
title: 'ProductImpression no muestra todos los productos cuando el SKU se muestra individualmente'
slug: productimpression-no-muestra-todos-los-productos-cuando-el-sku-se-muestra-individualmente
status: PUBLISHED
createdAt: 2026-01-06T14:17:34.813Z
updatedAt: 2026-01-06T14:17:34.813Z
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


Cuando la tienda "separa" el SKU de un producto para mostrarlo individualmente en el escaparate, el ProductImpression del GTM sólo ve los productos por su productID, no por cada SKUId. Así que si el producto tiene 3 SKUs diferentes en la página de búsqueda, el ProductImpression sólo lo mostrará como un producto.


#### Simulación


Ir a cualquier tienda que "separa" el SKU de un producto en productos individuales y tratar de ver el ProductImpression de la capa de datos en GTM.

## Workaround



N/A