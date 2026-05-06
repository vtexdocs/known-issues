---
title: 'El evento «productClick» tiene en cuenta un ID de SKU incorrecto'
slug: el-evento-productclick-tiene-en-cuenta-un-id-de-sku-incorrecto
status: PUBLISHED
createdAt: 2023-04-11T17:38:04.000Z
updatedAt: 2023-04-11T17:38:04.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: productclick-event-considers-the-incorrect-sku-id
locale: es
kiStatus: Backlog
internalReference: 788145
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El evento `productClick` toma en cuenta un ID de SKU incorrecto al utilizar el bloque «Selector de SKU del resumen del producto». Siempre utilizará la primera SKU de la lista de productos.

## Simulación

- Configure el bloque «Selector de SKU del resumen del producto»;
- Seleccione una especificación de SKU y acceda a la página de detalles del producto (PDP);
- En la consola, escriba «dataLayer»;
- El valor «variant» del evento productClick será diferente al seleccionado anteriormente.

## Workaround

N/A