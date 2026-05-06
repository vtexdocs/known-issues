---
title: 'El reordenamiento de colecciones falla en el caso de colecciones de gran tamaño'
slug: el-reordenamiento-de-colecciones-falla-en-el-caso-de-colecciones-de-gran-tamano
status: PUBLISHED
createdAt: 2021-08-05T17:56:52.000Z
updatedAt: 2026-01-29T22:35:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: reorder-collection-failing-for-large-collections
locale: es
kiStatus: Backlog
internalReference: 408140
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la nueva interfaz de usuario de administración de Colecciones, cuando un usuario intenta reordenar la visualización de los productos, la mutación GraphQL del catálogo que lleva a cabo esta acción suele fallar debido a un tiempo de espera agotado en la operación.

## Simulación

1) Abre una colección en el panel de administración que contenga un gran volumen de productos.
2) Realiza el reordenamiento arrastrando y soltando o seleccionando manualmente la nueva posición del producto.
3) Aparecerá un mensaje de error en la pantalla.

## Workaround

provisional**
N/A