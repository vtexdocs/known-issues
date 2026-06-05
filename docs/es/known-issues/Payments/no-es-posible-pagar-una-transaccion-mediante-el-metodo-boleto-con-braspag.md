---
title: 'No es posible pagar una transacción mediante el método «boleto» con BrasPag'
slug: no-es-posible-pagar-una-transaccion-mediante-el-metodo-boleto-con-braspag
status: PUBLISHED
createdAt: 2022-04-07T19:01:19.000Z
updatedAt: 2026-06-05T20:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: it-is-not-possible-to-settle-a-transaction-with-the-boleto-method-using-braspag
locale: es
kiStatus: No Fix
internalReference: 558065
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la transacción con Boleto Bancário mediante el conector BrasPag se queda bloqueada en «aprobada», el pago está autorizado y se llama a la API para liquidar la transacción, se produce un error en la captura debido a que el estado es «en liquidación», lo que no permite que la transacción se capture efectivamente.


    Mensaje: El estado del pago no está listo para liquidarse. Estado actual: Liquidación.

## Simulación

Para simularlo, es necesario que la transacción se quede atascada en «aprobada», lo cual no es posible forzar.

## Workaround

provisional**
Solicitar al equipo de ingeniería que cambie el estado de la transacción a «liquidación».