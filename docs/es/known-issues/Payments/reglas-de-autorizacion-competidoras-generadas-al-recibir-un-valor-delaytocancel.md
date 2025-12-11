---
title: 'Reglas de autorización competidoras generadas al recibir un valor delayToCancel'
slug: reglas-de-autorizacion-competidoras-generadas-al-recibir-un-valor-delaytocancel
status: PUBLISHED
createdAt: 2025-12-11T16:09:14.288Z
updatedAt: 2025-12-11T16:09:14.288Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: competing-authorization-rules-generated-when-receiving-a-delaytocancel-value
locale: es
kiStatus: Backlog
internalReference: 1338614
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el conector actualiza el campo delayToCancel después de la primera respuesta de autorización, la pasarela VTEX pone en cola un nuevo flujo de autorización pero mantiene activo el original. El síntoma visible es que dos planes de reintento se ejecutan en paralelo, lo que puede cancelar la orden VTEX por el tiempo de retardo más bajo.

## Simulación



-

Iniciar una transacción con un delayToCancel inicial de 3 horas (10800s) en la respuesta de autorización.



-

Devuelve un nuevo delayToCancel de 4 días (345600s) en una respuesta posterior.



-

Observa que ambos "planes" de autorización continúan: los reintentos del primer plan siguen produciéndose (por ejemplo, cada hora hasta 3 intentos) mientras que el segundo plan también programa reintentos (por ejemplo, cada 4 horas hasta 24 intentos). El primer plan puede cancelar la orden antes de que finalicen los reintentos del segundo plan.




## Workaround


Prefiera enviar el delayToCancel más largo/más conservador en la primera respuesta de autorización para evitar poner en cola un plan corto que se cancelará antes de tiempo.



