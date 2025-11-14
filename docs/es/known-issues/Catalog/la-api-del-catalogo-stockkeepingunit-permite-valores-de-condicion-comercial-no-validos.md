---
title: 'La API del catálogo stockkeepingunit permite valores de condición comercial no válidos'
slug: la-api-del-catalogo-stockkeepingunit-permite-valores-de-condicion-comercial-no-validos
status: PUBLISHED
createdAt: 2025-11-14T19:14:40.521Z
updatedAt: 2025-11-14T19:14:40.521Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: stockkeepingunit-catalog-api-allows-invalid-commercial-condition-values
locale: es
kiStatus: Backlog
internalReference: 769053
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, la API de mantenimiento de existencias https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/{skuid} no realiza ninguna comprobación para el campo "CommercialConditionId".

Esto permite al usuario introducir datos no válidos, como un Id que no existe en una tienda determinada y, a continuación, al intentar acceder al formulario de este sku, se lanza un error.

## Simulación


En la carga útil de la API de inserción de SKU https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit, utilice un Id de condición comercial que no esté presente en la tienda.

A continuación, acceda a la interfaz de usuario de este sku creado y debería enfrentarse a un mensaje de error.

## Workaround


n/a



