---
title: 'El campo «Nombre del tipo de servicio» se ha devuelto incorrectamente a través de la API'
slug: el-campo-nombre-del-tipo-de-servicio-se-ha-devuelto-incorrectamente-a-traves-de-la-api
status: PUBLISHED
createdAt: 2024-01-04T16:35:59.000Z
updatedAt: 2024-01-04T16:35:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: service-type-name-field-wrongly-returned-via-api
locale: es
kiStatus: Backlog
internalReference: 961278
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, las API del catálogo de SKU no devuelven correctamente el nombre del tipo de servicio. En su lugar, devuelven el nombre del valor del servicio.

## Simulación

1. Realice una solicitud GET SKU sobre un SKU asociado a un servicio: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Observe que el objeto de servicios devuelve un campo serviceTypeId y un campo Name; sin embargo, el campo Name no muestra el nombre del tipo de servicio en sí.

## Workaround

N/A