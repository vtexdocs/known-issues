---
title: 'No se puede seleccionar el punto de recogida en los mercados con vendedores de varios niveles'
slug: no-se-puede-seleccionar-el-punto-de-recogida-en-los-mercados-con-vendedores-de-varios-niveles
status: PUBLISHED
createdAt: 2022-02-14T17:07:02.000Z
updatedAt: 2023-01-11T19:57:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-cant-be-selected-in-marketplaces-with-multilevel-sellers
locale: es
kiStatus: Backlog
internalReference: 524073
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un mercado con una relación multinivel (MOI), cuando se selecciona un punto de recogida, el mercado devuelve un error de comunicación con el vendedor, lo que impide el uso de puntos de recogida en el mercado junto con dichos vendedores.

En el segundo nivel (vendedor directo), el error interno es «La dirección no se puede utilizar para el canal de entrega indicado (código de estado: 400)».

Este comportamiento se produce porque la interfaz de usuario envía la solicitud con una combinación de `"selectedDeliveryChannel": null` y `"addressType": "search"`.

## Simulación

- Acceda a una cuenta del mercado que cuente con vendedores habituales que utilicen la relación multinivel (MOI).
- Busque una dirección que cuente con puntos de recogida que cubran la ubicación.
- Aparecerá un mensaje de error de comunicación del vendedor.

## Workaround

N/A