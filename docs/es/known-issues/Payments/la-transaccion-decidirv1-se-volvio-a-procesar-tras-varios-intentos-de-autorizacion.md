---
title: 'La transacción DecidirV1 se «volvió a procesar» tras varios intentos de autorización'
slug: la-transaccion-decidirv1-se-volvio-a-procesar-tras-varios-intentos-de-autorizacion
status: PUBLISHED
createdAt: 2021-06-18T21:35:54.000Z
updatedAt: 2026-06-05T20:41:09.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-transaction-got-reprocessed-after-some-retries-to-authorization
locale: es
kiStatus: No Fix
internalReference: 384009
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Esto ocurre cuando una transacción recibe el estado 480, que significa «REVISIÓN», y comienza a reintentarse hasta que recibe una carga útil nula. Por lo tanto, tras ello, «volvimos a procesar» la transacción, lo que provoca un error y su cancelación.

## Simulación

No hay forma de simular esto.

## Workaround

No hay ninguna solución alternativa disponible en este momento