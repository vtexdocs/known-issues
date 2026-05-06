---
title: 'El indicador «Nombre del producto» de XML no funciona correctamente'
slug: el-indicador-nombre-del-producto-de-xml-no-funciona-correctamente
status: PUBLISHED
createdAt: 2023-10-26T11:34:56.000Z
updatedAt: 2023-10-26T11:34:56.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xmls-product-name-flag-not-working-properly
locale: es
kiStatus: Backlog
internalReference: 925965
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear un archivo XML, disponemos de dos opciones diferentes para establecer el nombre del producto: las opciones «Nombre del producto» y «Nombre del producto + Nombre del SKU». Sin embargo, la opción «Nombre del producto» no se tiene en cuenta, y el nombre del producto en el archivo sigue la siguiente regla:
- Si el producto tiene más de un SKU o el nombre del SKU es igual al nombre del producto = solo se mostrará el nombre del producto
- Si el producto tiene un solo SKU y el nombre del SKU no es igual al nombre del producto = se concatenarán el nombre del producto y el nombre del SKU

## Simulación

1. Compruebe si tiene en el catálogo productos que se ajusten a la descripción anterior
2. Cree un XML seleccionando el indicador «Nombre del producto»
3. Observe que, para los productos con un solo SKU, el nombre del producto se concatenará con el nombre del SKU

## Workaround

N/A