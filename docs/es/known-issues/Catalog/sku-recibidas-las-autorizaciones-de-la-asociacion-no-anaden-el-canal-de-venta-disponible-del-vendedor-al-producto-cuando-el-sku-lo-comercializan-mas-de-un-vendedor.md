---
title: 'SKU recibidas: las autorizaciones de la asociación no añaden el canal de venta disponible del vendedor al producto cuando el SKU lo comercializan más de un vendedor'
slug: sku-recibidas-las-autorizaciones-de-la-asociacion-no-anaden-el-canal-de-venta-disponible-del-vendedor-al-producto-cuando-el-sku-lo-comercializan-mas-de-un-vendedor
status: PUBLISHED
createdAt: 2022-04-18T17:15:15.000Z
updatedAt: 2023-05-09T19:05:55.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: received-skus-association-approvals-dont-add-the-sellers-available-sales-channel-on-the-product-when-the-sku-is-sold-by-more-than-1-seller
locale: es
kiStatus: Backlog
internalReference: 562472
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Un producto vendido por otro vendedor en el catálogo del marketplace está disponible para su venta en el canal de ventas de este vendedor.

Sin embargo, si un nuevo vendedor también envía el producto y el marketplace realiza una acción de asociación en el módulo «SKU recibidos» —lo que significa vincularlo a otro producto o a otro SKU—, el canal de ventas de este nuevo vendedor no se añadirá al producto, quedando solo el canal de ventas del vendedor original.

## Simulación

1. El vendedor 1, disponible en el canal de ventas A, envía un producto al marketplace;
2. El marketplace aprobó el producto del vendedor 1 como un nuevo producto en su catálogo;
3. El producto está disponible en el canal de ventas A;
4. El vendedor 2, disponible en el canal de ventas B, envía el mismo producto al marketplace;
5. El marketplace aprobó el producto como una acción de enlace a otro producto;
6. El producto sigue estando disponible únicamente en el canal de venta A.

## Workaround

Comprueba manualmente, a través de la API o de una hoja de cálculo, los demás canales de venta disponibles para los productos.