---
title: 'Las transacciones con el conector TNSPay se rechazan por error: la tarjeta no está REGISTRADA en 3DS'
slug: las-transacciones-con-el-conector-tnspay-se-rechazan-por-error-la-tarjeta-no-esta-registrada-en-3ds
status: PUBLISHED
createdAt: 2022-03-14T13:21:44.000Z
updatedAt: 2023-04-10T16:10:35.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: es
kiStatus: Backlog
internalReference: 541687
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Por defecto, se cancelan y enviamos dos solicitudes de autorización 3DS, pero aún no has recibido la respuesta a la solicitud de autorización.
La segunda respuesta solo aparece una vez que ya se ha iniciado el proceso de cancelación.

El problema se debe a una condición de carrera, lo que provoca que los campos de pago sean inconsistentes.
Al inicio del proceso, el primer registro es

`Autorizar mediante 3DS con las configuraciones 3DS: siempre MinimumValue`

El método de autorización se llamó dos veces en dos segundos.

## Simulación

No se puede simular

## Workaround

No hay ninguna solución alternativa