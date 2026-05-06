---
title: 'O=OrderByBestDiscount muestra un orden incorrecto'
slug: oorderbybestdiscount-muestra-un-orden-incorrecto
status: PUBLISHED
createdAt: 2021-08-06T21:52:38.000Z
updatedAt: 2025-10-07T22:50:41.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbybestdiscount-brings-the-wrong-order
locale: es
kiStatus: Backlog
internalReference: 409119
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

OrderByBestDiscount se calcula teniendo en cuenta el `listPrice` y el `price` más bajos de entre todos los canales de venta disponibles

## Simulación

- Introduce más de un precio para el producto. Ej.: dos precios de catálogo diferentes en distintos vendedores
- Configura la ordenación de la página por descuento (O=OrderByBestDiscount)
- Comprueba que la ordenación no sigue el orden de los precios que se muestran

## Workaround

N/A