---
title: 'El proceso de pago permite añadir dos direcciones de entrega diferentes'
slug: el-proceso-de-pago-permite-anadir-dos-direcciones-de-entrega-diferentes
status: PUBLISHED
createdAt: 2023-11-06T22:03:09.000Z
updatedAt: 2023-11-07T21:28:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-to-add-2-different-addresses-for-delivery
locale: es
kiStatus: Backlog
internalReference: 931225
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El proceso de pago permite añadir dos direcciones de entrega diferentes en el formulario de pedido, por ejemplo, una «comercial» y otra «residencial» (definidas por el campo «addressType»), cuando una de ellas es desechable.

Cuando se seleccionan ambas direcciones, aparecerá el mensaje de error «No se puede comunicar con el vendedor», y el comprador no podrá continuar con los siguientes pasos.

## Simulación

- Envía una nueva dirección a través de la API «Añadir dirección de envío» y selecciona la opción de entrega;
- Añade un cliente que ya tenga un perfil completo a través de la API «Añadir perfil de cliente».

## Workaround

N/A