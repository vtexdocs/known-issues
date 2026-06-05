---
title: 'El conector ERedRest no registra el pago de una solicitud GET cuando su importe es inferior al valor total del pago'
slug: el-conector-eredrest-no-registra-el-pago-de-una-solicitud-get-cuando-su-importe-es-inferior-al-valor-total-del-pago
status: PUBLISHED
createdAt: 2022-09-22T23:56:07.000Z
updatedAt: 2026-06-05T20:43:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erederest-connector-doesnt-capture-payment-from-get-request-when-its-amount-is-lower-than-the-total-value-of-the-payment
locale: es
kiStatus: No Fix
internalReference: 664081
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los casos en que se produce una cancelación parcial, por ejemplo, en el propio pago antes de iniciar la operación de liquidación, nuestro conector para ERedeRest no puede pasar al estado de «Captura del pago», ya que el importe capturado por el proveedor no se corresponde con el aprobado inicialmente, debido a que existe una condición en el código de nuestro conector que así lo establece.

## Simulación

Crea una transacción con ERedeRest; justo después de la autorización, envía una cancelación parcial y, a continuación, captura el resto del importe del pago. Además, este error solo se producirá si la primera solicitud agota el tiempo de espera o, de cualquier forma, no podemos obtener la primera respuesta; en ese caso, realizaremos una nueva solicitud GET para verificar este pago, por lo que, aunque el estado sea «Aprobado», no avanzaremos de estado porque el importe devuelto es inferior al valor de la transacción.

## Workaround

provisional**
No hay ninguna solución provisional disponible.