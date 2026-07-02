---
title: 'Para deudas con CieloV3 no estamos respetando el estado de la respuesta.'
slug: para-deudas-con-cielov3-no-estamos-respetando-el-estado-de-la-respuesta
status: PUBLISHED
createdAt: 2021-05-11T23:59:02.000Z
updatedAt: 2026-07-02T15:58:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: for-debt-with-cielov3-we-are-not-respecting-the-status-of-the-response
locale: es
kiStatus: No Fix
internalReference: 367284
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se procesa una transacción de débito a través de CieloV3 y Cielo devuelve el estado "esperando respuesta" en la segunda llamada de autorización, VTEX lo interpreta erróneamente como una denegación y cancela la transacción. Como resultado, el pago del cliente se rechaza, aunque aún se esté procesando en Cielo.

## Simulación

No se ha podido reproducir a demanda. El comportamiento depende de que Cielo devuelva un estado intermedio específico durante el flujo de autorización, lo cual no se puede forzar externamente.

## Workaround

No disponible.