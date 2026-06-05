---
title: 'La tarjeta «Save» no funciona con PayU debido al importe de la validación'
slug: la-tarjeta-save-no-funciona-con-payu-debido-al-importe-de-la-validacion
status: PUBLISHED
createdAt: 2021-02-15T20:17:51.000Z
updatedAt: 2026-06-05T21:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-for-payu-due-to-the-amount-of-validation
locale: es
kiStatus: No Fix
internalReference: 334891
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar guardar una tarjeta utilizando la afiliación de PayU en tiendas de Argentina (Latam), se produce un error debido al bajo importe que cobramos para validar la tarjeta de crédito. Por este motivo, no es posible utilizar esta funcionalidad.

## Simulación

1. Accede a una tienda que utilice PayU como afiliado
2. Intenta guardar la tarjeta en «Mis cuentas»
3. Comprueba la transacción que se ha generado a raíz de ello
4. Aparecerá el siguiente error:

    Código del conector: ERROR - Mensaje: Respuesta inesperada: propiedad: order.description, mensaje: El tamaño debe estar entre 1 y 255 - Mensaje de origen: propiedad: order.description, mensaje: El tamaño debe estar entre 1 y 255

##

## Workaround

provisional**
Por el momento no hay ninguna solución provisional para esto.