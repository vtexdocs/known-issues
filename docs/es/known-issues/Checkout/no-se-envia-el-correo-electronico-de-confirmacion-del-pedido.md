---
title: 'No se envía el correo electrónico de confirmación del pedido'
slug: no-se-envia-el-correo-electronico-de-confirmacion-del-pedido
status: PUBLISHED
createdAt: 2021-09-01T18:28:19.000Z
updatedAt: 2023-08-28T14:53:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: confirmed-order-email-not-being-sent
locale: es
kiStatus: Fixed
internalReference: 423628
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El proceso de pago no asigna todos los flujos en los que «GatewayCallback» debe activar el evento «Raised OrderPlaced», por lo que es probable que los flujos no asignados no activen este evento como se esperaba, lo que afecta directamente al envío del correo electrónico de confirmación del pedido.

## Simulación

No hay forma de simular este escenario.

## Workaround

N/A