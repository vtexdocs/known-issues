---
title: 'El campo «referencia» siempre está establecido como nulo'
slug: el-campo-referencia-siempre-esta-establecido-como-nulo
status: PUBLISHED
createdAt: 2023-04-26T22:31:26.000Z
updatedAt: 2023-04-26T22:32:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: field-reference-always-set-as-null
locale: es
kiStatus: Backlog
internalReference: 797989
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El campo `reference` de la dirección del punto de recogida siempre aparece como nulo, aunque esté registrado en la API de puntos de recogida.

## Simulación

- Registra un punto de recogida a través de la API, incluyendo el campo `address.reference`;
- Añade un artículo al carrito;
- Realiza una consulta Get Order y comprueba el campo `pickupPoints.reference`: es nulo.

## Workaround

provisional**
N/A