---
title: 'La transacción se cancela tras pasar de Autorizada a Iniciada'
slug: la-transaccion-se-cancela-tras-pasar-de-autorizada-a-iniciada
status: PUBLISHED
createdAt: 2025-12-19T13:48:53.360Z
updatedAt: 2025-12-19T13:48:53.360Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-gets-cancelled-after-reverting-from-authorized-to-started
locale: es
kiStatus: Backlog
internalReference: 1341471
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Algunos pagos aprobados y capturados por el conector pasan más tarde a Cancelado y terminan como Cancelado sin que el cliente realice una acción de cancelación. El síntoma visible es que las transacciones que estaban Autorizadas/Capturadas de repente muestran Cancelación, y los registros internos muestran un intento de transición de estado no válido de Iniciado a Autorizado, lo que indica que el flujo de trabajo volvió a un estado anterior.
El problema afecta al flujo de trabajo de VTEX Payments Gateway cuando se produce una transición no válida y desencadena el flujo de cancelación después de un tiempo de espera.


#### Simulación


No es posible simular

## Workaround


No hay solución disponible en este momento.



