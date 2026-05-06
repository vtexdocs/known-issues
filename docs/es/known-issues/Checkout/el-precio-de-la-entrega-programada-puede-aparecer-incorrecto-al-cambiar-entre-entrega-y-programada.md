---
title: 'El precio de la entrega programada puede aparecer incorrecto al cambiar entre «Entrega» y «Programada»'
slug: el-precio-de-la-entrega-programada-puede-aparecer-incorrecto-al-cambiar-entre-entrega-y-programada
status: PUBLISHED
createdAt: 2023-03-13T20:36:16.000Z
updatedAt: 2023-03-13T20:36:16.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: scheduled-delivery-may-show-incorrect-price-when-switching-between-delivery-and-scheduled
locale: es
kiStatus: Backlog
internalReference: 770250
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se configura una promoción con un valor máximo de envío, si se cambia varias veces entre el envío estándar y el envío programado, es posible que el precio del envío programado que aparece en la interfaz de usuario sea diferente

## Simulación

- Crea una promoción con un valor máximo de envío;
- Crea un carrito que incluya envío estándar y envío programado;
- Selecciona el envío estándar;
- Selecciona el envío programado;
- Sigue alternando entre ambos y, en algún momento, el precio del envío programado puede diferir del de la API.

## Workaround

N/A