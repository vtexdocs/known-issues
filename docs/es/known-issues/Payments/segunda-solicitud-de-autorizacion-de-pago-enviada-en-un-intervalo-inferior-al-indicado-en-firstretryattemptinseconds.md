---
title: 'Segunda solicitud de autorización de pago enviada en un intervalo inferior al indicado en FirstRetryAttemptInSeconds.'
slug: segunda-solicitud-de-autorizacion-de-pago-enviada-en-un-intervalo-inferior-al-indicado-en-firstretryattemptinseconds
status: PUBLISHED
createdAt: 2025-10-16T20:30:34.788Z
updatedAt: 2025-10-16T20:30:34.788Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: second-payment-authorization-request-being-sent-within-an-interval-shorter-than-what-is-stated-in-firstretryattemptinseconds
locale: es
kiStatus: Backlog
internalReference: 1165831
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El pago se cancela porque la pasarela envía la segunda solicitud de autorización antes de lo establecido en las reglas de autorización. Normalmente, el socio de pago no puede procesar la segunda solicitud debido al corto intervalo entre las 2 solicitudes, lo que lleva a una respuesta "denegada" y a la cancelación de la transacción.

## Simulación


No es posible simular este escenario.

## Workaround


Una posible solución sería en el lado del conector asociado, haciéndolo más resistente para manejar una posible segunda solicitud dentro de un intervalo más corto de lo que se indica en FirstRetryAttemptInSeconds.


