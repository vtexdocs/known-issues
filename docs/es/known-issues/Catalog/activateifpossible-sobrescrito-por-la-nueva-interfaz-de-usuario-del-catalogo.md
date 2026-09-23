---
title: 'ActivateIfPossible Sobrescrito por la nueva interfaz de usuario del catálogo'
slug: activateifpossible-sobrescrito-por-la-nueva-interfaz-de-usuario-del-catalogo
status: PUBLISHED
createdAt: 2026-06-15T18:04:30.000Z
updatedAt: 2026-09-23T16:41:47.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activateifpossible-overwritten-by-new-catalog-ui
locale: es
kiStatus: Backlog
internalReference: 1420981
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, si se cambia el valor de un SKU a `ActivateIfPossible = true` directamente a través de la API y luego se realiza un cambio en la interfaz de usuario del catálogo para el mismo SKU, cuando aún no cumple con todos los requisitos necesarios para estar activo, el campo vuelve a cambiar a `false`.

El comportamiento correcto sería que permaneciera en `true` y que solo se cambiara el valor de activo.

## Simulación

1 - Crear un SKU
2 - Cambiar el valor del campo `activateIfPossible` a `true`
3 - Acceder a la interfaz de usuario y cambiar cualquier valor sin completar todos los campos necesarios para que esté activo
4 - Obtener nuevamente los datos del SKU (https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-) y el valor del campo `activateIfPossible` será `false`

## Workaround

-