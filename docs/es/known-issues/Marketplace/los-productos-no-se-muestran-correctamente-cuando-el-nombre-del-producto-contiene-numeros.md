---
title: 'Los productos no se muestran correctamente cuando el nombre del producto contiene números'
slug: los-productos-no-se-muestran-correctamente-cuando-el-nombre-del-producto-contiene-numeros
status: PUBLISHED
createdAt: 2023-03-01T18:54:58.000Z
updatedAt: 2023-10-19T12:08:10.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: products-not-being-correctly-matched-when-the-productname-contains-numbers
locale: es
kiStatus: Fixed
internalReference: 762525
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el vendedor envía un SKU al marketplace, el sistema Matcher se encarga de consultar el catálogo del marketplace y verificar si ya existe un producto similar a los SKU del vendedor.
Para ello, se basa principalmente en el nombre del producto.

Sin embargo, esta búsqueda no siempre funciona cuando el nombre del producto contiene caracteres numéricos.

## Simulación

1. El vendedor envía SKU al marketplace con números en el nombre del producto;
2. Los SKU se aprobarán por separado (en lugar de tener una coincidencia) en el catálogo del marketplace.

## Workaround

Envía el producto sin números en su nombre.