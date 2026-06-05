---
title: 'El conector heredado de Adyen no permite rechazar de forma asíncrona el procesamiento de un pago'
slug: el-conector-heredado-de-adyen-no-permite-rechazar-de-forma-asincrona-el-procesamiento-de-un-pago
status: PUBLISHED
createdAt: 2024-02-02T18:15:40.000Z
updatedAt: 2026-06-05T20:12:58.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: es
kiStatus: No Fix
internalReference: 976005
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El conector heredado de Adyen captura el pago cada vez que recibe el campo `"response":"[capture-received]"`. Sin embargo, este evento solo indica que se ha recibido la captura y que se procesará de forma asíncrona. Este comportamiento impide que se rechacen las capturas, ya que la notificación asíncrona encuentra un pago ya capturado y no lo reembolsa.

## Simulación

Depende de la respuesta de captura de Adyen; por lo tanto, es necesario que se capture un pago para recibir una notificación de captura fallida.

## Workaround

N/A