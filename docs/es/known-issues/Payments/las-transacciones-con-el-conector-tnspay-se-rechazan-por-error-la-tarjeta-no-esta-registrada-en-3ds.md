---
title: 'Las transacciones con el conector TNSPay se rechazan por error: la tarjeta no está REGISTRADA en 3DS'
slug: las-transacciones-con-el-conector-tnspay-se-rechazan-por-error-la-tarjeta-no-esta-registrada-en-3ds
status: PUBLISHED
createdAt: 2022-03-14T16:21:44.000Z
updatedAt: 2026-06-05T21:21:11.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: es
kiStatus: No Fix
internalReference: 541687
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar el conector **TNSPay** con la **autenticación 3DS** configurada, una condición de carrera provoca que el método de autorización se llame **dos veces en un intervalo de 2 segundos**. La segunda respuesta de autorización solo llega después de que la transacción ya haya entrado en el flujo de cancelación, lo que da lugar a que la transacción sea denegada con el error:

> `Tarjeta no INSCRITA en 3DS`

Los campos de pago también quedan en un estado inconsistente como consecuencia del intento de autorización duplicado.
El problema se identifica por la aparición dos veces del siguiente registro al inicio de la transacción:

> `Autorizar usando 3DS dadas las configuraciones 3DS: siempre MinimumValue`

## Simulación

No se puede reproducir en un entorno controlado. La condición de carrera se produce de forma intermitente en producción.

## Workaround

provisional**
No hay ninguna solución provisional