---
title: 'Algunas especificaciones no se muestran en el panel de administración, pero se pueden consultar a través de la API'
slug: algunas-especificaciones-no-se-muestran-en-el-panel-de-administracion-pero-se-pueden-consultar-a-traves-de-la-api
status: PUBLISHED
createdAt: 2021-08-24T15:25:32.000Z
updatedAt: 2023-05-12T19:29:13.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: some-specs-are-not-displayed-in-admin-but-are-visible-via-api
locale: es
kiStatus: Backlog
internalReference: 418348
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas especificaciones no se muestran en el panel de administración, pero son visibles a través de la API.

## Simulación

Ver las especificaciones de un producto en el panel de administración y a través de la API.

## Workaround

Elimina las especificaciones de la API defectuosas para cada SKU de producto

- Especificaciones del producto: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/product/-productId-/specification/-specificationId-
- Especificaciones de SKU: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/specification/-specificationId-