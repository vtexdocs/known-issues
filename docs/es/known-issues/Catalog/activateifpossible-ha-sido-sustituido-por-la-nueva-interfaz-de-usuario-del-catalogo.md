---
title: '«ActivateIfPossible» ha sido sustituido por la nueva interfaz de usuario del catálogo'
slug: activateifpossible-ha-sido-sustituido-por-la-nueva-interfaz-de-usuario-del-catalogo
status: PUBLISHED
createdAt: 2026-06-15T18:04:30.000Z
updatedAt: 2026-06-15T18:04:30.000Z
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

Actualmente, si se cambia el valor de «ActivateIfPossible» de una SKU a «true» directamente a través de la API y, a continuación, se realiza un cambio en la interfaz de usuario del catálogo en esa misma SKU mientras aún no cumple todos los requisitos necesarios para estar activa, el campo vuelve a cambiarse a «false».

El comportamiento correcto sería que se mantuviera = true y que solo se modificara el valor de activación.

## Simulación

1 - crear una SKU
2 - en ella, cambiar el campo activateIfPossible a true
3 - acceder a la interfaz de usuario y cambiar cualquier valor sin rellenar todos los campos necesarios para que esté activa
4 - Recupera los datos de la SKU de nuevo https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId- y el campo activateIfPossible será = false

## Workaround

-