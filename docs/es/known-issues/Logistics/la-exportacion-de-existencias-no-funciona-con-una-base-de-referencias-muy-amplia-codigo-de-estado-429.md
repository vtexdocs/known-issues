---
title: 'La exportación de existencias no funciona con una base de referencias muy amplia (código de estado: 429)'
slug: la-exportacion-de-existencias-no-funciona-con-una-base-de-referencias-muy-amplia-codigo-de-estado-429
status: PUBLISHED
createdAt: 2026-04-24T18:26:46.730Z
updatedAt: 2026-04-24T18:26:46.730Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-export-does-not-work-for-a-very-large-sku-base-statuscode-429
locale: es
kiStatus: Backlog
internalReference: 1178575
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para los clientes que cuentan con una base de SKU muy amplia, es decir, más de 500 000, la exportación de inventario no funcionará. En algunos casos, durante el proceso de exportación, comenzará a aparecer el mensaje «StatusCode: 429 Message: Too Many Requests» en nuestros registros internos, y el correo electrónico con la hoja de cálculo nunca llegará.

## Simulación

En cualquier cuenta que tenga más de 500 000 SKU, la hoja de cálculo de inventario nunca llegará al correo electrónico.

## Workaround

**Evita exportar todos los almacenes a la vez. **

O prueba otra alternativa para solucionar este problema utilizando nuestras API de inventario para configurar un runner:

Por almacén:
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-

Por SKU (con todos los almacenes):
https://developers.vtex.com/docs/api-reference/logistics-api#get-/api/logistics/pvt/inventory/skus/-skuId-

Ten en cuenta que este proceso a través de la API lleva mucho tiempo y es muy probable que genere un informe de inventario desactualizado.