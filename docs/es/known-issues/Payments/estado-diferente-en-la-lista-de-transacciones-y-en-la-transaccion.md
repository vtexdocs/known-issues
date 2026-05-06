---
title: 'Estado diferente en la lista de transacciones y en la transacción'
slug: estado-diferente-en-la-lista-de-transacciones-y-en-la-transaccion
status: PUBLISHED
createdAt: 2020-11-24T14:56:47.000Z
updatedAt: 2023-12-12T22:11:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: divergent-status-on-the-transaction-list-and-on-the-transaction
locale: es
kiStatus: Fixed
internalReference: 308919
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El estado de las transacciones es diferente una vez que se abren, en comparación con lo que se muestra en la lista de transacciones.

## Simulación

Dado que no ocurre en todas las transacciones, la forma de simularlo es introducir una transacción aleatoria y comprobar si el estado que aparece en ella es el mismo que el establecido en la lista de transacciones.
De hecho, una vez que se accede a la transacción, el estado es diferente

## Workaround

provisional**
No hay ninguna solución provisional.