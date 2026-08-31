---
title: 'Error al procesar el segundo reembolso o cancelación con el mismo valor que el primero.'
slug: error-al-procesar-el-segundo-reembolso-o-cancelacion-con-el-mismo-valor-que-el-primero
status: PUBLISHED
createdAt: 2024-10-16T23:27:18.000Z
updatedAt: 2026-09-01T01:03:24.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-or-cancellation-with-the-same-value-as-the-first
locale: es
kiStatus: Backlog
internalReference: 1118560
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al solicitar un segundo reembolso parcial del mismo valor que el primero, la pasarela de pago devuelve el siguiente mensaje:

Mensaje: La tarjeta de regalo ya ha sido reembolsada.

O bien, si se solicita una segunda cancelación parcial del mismo valor que la primera, la pasarela de pago devuelve:

Mensaje: "La tarjeta de regalo ya ha sido cancelada".

Aunque esto se registra en la interacción, el segundo reembolso/cancelación no se procesa realmente.

Este escenario es mucho más común para el segundo reembolso/cancelación del mismo valor, pero también puede ocurrir en reembolsos posteriores, siempre que el importe solicitado sea igual a la suma de los reembolsos ya procesados.

## Simulación

1. Realice una compra exclusivamente con una tarjeta de regalo (CG);

2. Finalice la transacción;

3. Emita un reembolso parcial por un importe inferior a la mitad del pago total;

4. Solicite otro reembolso por el mismo importe que el primero.

## Workaround

Para casos de reembolso, por favor, abra un ticket con soporte para que apliquen la solución alternativa interna.

Para casos de cancelación, cancele manualmente con su proveedor.