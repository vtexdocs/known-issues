---
title: 'Índice de exportación de especificaciones del producto fuera de rango'
slug: indice-de-exportacion-de-especificaciones-del-producto-fuera-de-rango
status: PUBLISHED
createdAt: 2021-12-03T17:27:30.000Z
updatedAt: 2024-01-10T20:25:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-export-index-out-of-range
locale: es
kiStatus: Backlog
internalReference: 481095
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar exportar las especificaciones de producto desde la interfaz de usuario «Importación y exportación», si existe algún valor nulo o alguna relación nula en la categoría que se va a exportar, el proceso fallará y aparecerá el mensaje «Índice fuera de rango». En otras palabras, la categoría debe tener registrados directamente en su propio nivel un campo de producto, productos y productos con valores asociados.

## Simulación

1) Vaya a la interfaz de usuario de exportación de especificaciones de producto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Haga clic con el botón derecho del ratón en una categoría en la que no haya ningún campo de especificación de producto registrado

3) Aparecerá un mensaje de error que indica «Índice fuera de rango».

## Workaround

Exporte la categoría principal o secundaria de la categoría deseada

o

Utilice la API de obtención de especificaciones de producto para recuperar los datos: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification