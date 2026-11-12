---
title: 'El pago con tarjeta guardada utiliza el BIN de una tarjeta introducida previamente en el proceso de pago (la interfaz de usuario de la tarjeta conserva el número de tarjeta introducido después de cambiar a una tarjeta guardada).'
slug: el-pago-con-tarjeta-guardada-utiliza-el-bin-de-una-tarjeta-introducida-previamente-en-el-proceso-de-pago-la-interfaz-de-usuario-de-la-tarjeta-conserva-el-numero-de-tarjeta-introducido-despues-de-cambiar-a-una-tarjeta-guardada
status: PUBLISHED
createdAt: 2026-11-12T17:39:36.000Z
updatedAt: 2026-11-12T17:42:24.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: savedcard-payment-uses-the-bin-of-a-previously-typed-card-in-checkout-card-ui-keeps-the-typed-card-number-after-switching-to-a-saved-card
locale: es
kiStatus: Backlog
internalReference: 1484421
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si un comprador introduce un nuevo número de tarjeta y luego cambia a una tarjeta guardada, el pago se crea con la regla de pago seleccionada para la tarjeta introducida, pero se carga a la tarjeta guardada. Esto sucede porque la interfaz de usuario de la tarjeta conserva el número introducido tras el cambio y lo envía a la pasarela de pago junto con el `accountId` de la tarjeta guardada. La pasarela de pago selecciona la regla de pago a partir de los primeros 6 dígitos de ese número. Como resultado, el comprador puede obtener una opción de pago a plazos o una regla restringida por el emisor destinada a la tarjeta de otro banco, y el adquirente puede rechazar el pago. Cambiar entre dos tarjetas guardadas sin introducir ningún número no se ve afectado.

## Simulación

Con un comprador registrado que tiene tarjetas guardadas y una regla de pago restringida a un emisor específico (por ejemplo, que ofrece más plazos):

1. En Pago → Tarjeta de crédito, seleccione usar una nueva tarjeta e introduzca una tarjeta del emisor de la regla restringida. 2. Vuelve a la lista de tarjetas guardadas y selecciona una tarjeta guardada de otro emisor.

3. Realiza el pedido.

Las cuotas que se muestran en pantalla se recalculan para la tarjeta guardada, pero el pago se realiza con la restricción del emisor de la tarjeta introducida, mientras que el cargo se efectúa en la tarjeta guardada.

## Workaround

Si el cliente introdujo un número de tarjeta y luego desea pagar con una tarjeta guardada:

- Recarga la página de pago antes de seleccionar la tarjeta guardada, **o**

- Borra el campo del número de tarjeta antes de volver a la lista de tarjetas guardadas.