---
title: 'La importación de las especificaciones del producto con el tipo «texto» no activa la indexación del producto'
slug: la-importacion-de-las-especificaciones-del-producto-con-el-tipo-texto-no-activa-la-indexacion-del-producto
status: PUBLISHED
createdAt: 2024-03-12T19:36:44.000Z
updatedAt: 2024-03-12T19:36:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-import-with-type-text-does-not-trigger-the-products-indexation
locale: es
kiStatus: Backlog
internalReference: 998658
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al importar las especificaciones de un producto, los tipos con valores predefinidos (como «Casilla de selección» o «Botón de opción») activan la indexación del producto, pero cuando el tipo es «Texto», esto no ocurre.

## Simulación

- Registra un campo de tipo «Texto» dentro de la categoría
- Importa un archivo con un nuevo valor
- Observa que el valor se actualizará en el panel de administración, pero el producto no se reindexará

## Workaround

Configura este tipo de campo a través del panel de administración o la API