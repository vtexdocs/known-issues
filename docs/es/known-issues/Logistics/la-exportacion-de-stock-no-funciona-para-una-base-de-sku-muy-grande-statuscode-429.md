---
title: 'La exportación de stock no funciona para una base de SKU muy grande (StatusCode: 429).'
slug: la-exportacion-de-stock-no-funciona-para-una-base-de-sku-muy-grande-statuscode-429
status: PUBLISHED
createdAt: 2025-02-12T21:05:36.000Z
updatedAt: 2026-08-12T20:47:08.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-export-does-not-work-for-a-very-large-sku-base-statuscode-429
locale: es
kiStatus: Scheduled
internalReference: 1178575
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para clientes con una base de SKU muy grande (más de 500 000), la exportación de inventario no funcionará. En algunos casos, durante el proceso de exportación, se generará el mensaje `StatusCode: 429 Message: Too Many Requests` en nuestros registros internos, y el correo electrónico con la hoja de cálculo nunca llegará.

## Simulación

En cualquier cuenta con más de 500 000 SKU, la hoja de cálculo de inventario nunca llegará al correo electrónico.

## Workaround

**Evite exportar todos los almacenes a la vez.** **

También puede probar otra alternativa para solucionar este problema utilizando nuestras API de inventario para configurar un repartidor:

Por almacén:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (con todos los almacenes):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Tenga en cuenta que este proceso a través de la API consume mucho tiempo y probablemente generará un informe de inventario desactualizado.