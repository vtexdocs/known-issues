---
title: 'PayPal Plus: las transacciones no se cancelan correctamente'
slug: paypal-plus-las-transacciones-no-se-cancelan-correctamente
status: PUBLISHED
createdAt: 2020-12-16T01:03:52.000Z
updatedAt: 2026-06-05T20:57:54.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypal-plus-transacoes-nao-sao-canceladas-com-sucesso
locale: es
kiStatus: No Fix
internalReference: 316713
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar cancelar una transacción procesada a través del conector **PayPal Plus**, la cancelación falla y se muestra el siguiente error:

> `Error al ejecutar la operación de cancelación. Consulte la excepción interna. Conector = PayPalPlus. Mensaje = La clave indicada no estaba presente en el diccionario.`

La transacción permanece en estado no cancelado y la operación de cancelación no se completa correctamente.

## Simulación

No se ha podido reproducir en un entorno controlado. El problema se produce en producción en transacciones procesadas a través del conector PayPal Plus cuando se activa una cancelación.

## Workaround

provisional**
No hay ninguna solución provisional disponible.