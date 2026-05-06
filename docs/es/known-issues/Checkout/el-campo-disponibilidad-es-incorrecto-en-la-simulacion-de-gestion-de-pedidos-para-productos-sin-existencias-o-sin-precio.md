---
title: 'El campo «disponibilidad» es incorrecto en la simulación de gestión de pedidos para productos sin existencias o sin precio'
slug: el-campo-disponibilidad-es-incorrecto-en-la-simulacion-de-gestion-de-pedidos-para-productos-sin-existencias-o-sin-precio
status: PUBLISHED
createdAt: 2023-03-17T17:46:52.000Z
updatedAt: 2023-10-04T14:22:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: availability-field-is-incorrect-in-fulfillment-simulation-for-no-stock-or-price-products
locale: es
kiStatus: Backlog
internalReference: 773537
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un producto está agotado o no tiene precio, la

## Simulación

de gestión de pedidos indica erróneamente que el campo `availability` es `available`.
Este comportamiento también se aplica al contexto de la selección de regalos, donde el campo `selectableGifts` se ve igualmente afectado por este problema.


1. Si el artículo tiene precio, pero no hay existencias, la simulación de cumplimiento devolverá «availability»: «nullPrice» cuando no haya dirección;
2. Si el artículo tiene precio, pero no hay existencias, la simulación de cumplimiento devolverá «availability»: «available» cuando haya una dirección.


## **Simulación**

- Disponer de un producto sin stock ni precio en un vendedor
- Realizar una simulación de cumplimiento

## Workaround

N/A