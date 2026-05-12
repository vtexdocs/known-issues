---
title: 'Se ha producido un error al procesar el segundo reembolso o la segunda cancelación con el mismo importe que el primero'
slug: se-ha-producido-un-error-al-procesar-el-segundo-reembolso-o-la-segunda-cancelacion-con-el-mismo-importe-que-el-primero
status: PUBLISHED
createdAt: 2024-10-16T23:27:18.000Z
updatedAt: 2026-05-12T17:35:41.000Z
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

Al solicitar un segundo reembolso parcial por el mismo importe que el primero, la pasarela devuelve el siguiente mensaje:

Mensaje: La tarjeta regalo ya ha sido reembolsada.


O si se solicita una segunda cancelación parcial por el mismo importe que la primera, la pasarela devuelve:

Mensaje: «La tarjeta regalo ya ha sido cancelada»


Aunque esto queda registrado en la interacción, el segundo reembolso/cancelación no se procesa realmente.
Este escenario es mucho más habitual en el caso del segundo reembolso/cancelación con el mismo importe, pero también puede darse en reembolsos posteriores, siempre que el importe solicitado sea igual a la suma de los reembolsos ya procesados.

## Simulación

1. Realice una compra exclusivamente con una tarjeta regalo (GC);
2. Finalice la transacción;
3. Emita un reembolso parcial por un importe inferior a la mitad del pago total;
4. Solicite otro reembolso por el mismo importe que el primero.

## Workaround

En los casos de reembolso, abra un ticket con el servicio de asistencia para aplicar la solución alternativa interna.
En los casos de cancelación, cancele manualmente con su proveedor.