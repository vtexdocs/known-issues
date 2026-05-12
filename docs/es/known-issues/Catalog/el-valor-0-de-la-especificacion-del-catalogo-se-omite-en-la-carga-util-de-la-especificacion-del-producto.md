---
title: 'El valor 0 de la especificación del catálogo se omite en la carga útil de la especificación del producto'
slug: el-valor-0-de-la-especificacion-del-catalogo-se-omite-en-la-carga-util-de-la-especificacion-del-producto
status: PUBLISHED
createdAt: 2026-05-12T17:13:15.000Z
updatedAt: 2026-05-12T17:13:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-specification-value-0-is-omitted-from-product-specification-payload
locale: es
kiStatus: Backlog
internalReference: 1405238
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una especificación de tipo numérico contiene el número «0» como único valor, estos datos no se devuelven correctamente a través de la API.

## Simulación

1 - Crea una especificación numérica en el catálogo de VTEX

2 - Insertar el valor único 0 en ella

3 - Recuperar estos datos para el producto en el que se insertó este valor de especificación mediante GET /api/catalog_system/pvt/products//specification

4 - El valor 0 NO se devolverá

## Workaround

Recuperar los datos por otros medios (p. ej.: hojas de cálculo)