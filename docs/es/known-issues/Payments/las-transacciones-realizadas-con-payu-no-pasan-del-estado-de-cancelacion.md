---
title: 'Las transacciones realizadas con PayU no pasan del estado de cancelación'
slug: las-transacciones-realizadas-con-payu-no-pasan-del-estado-de-cancelacion
status: PUBLISHED
createdAt: 2021-02-25T15:56:28.000Z
updatedAt: 2026-06-05T21:12:59.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-made-with-payu-do-not-change-from-cancelling-status
locale: es
kiStatus: No Fix
internalReference: 338124
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una transacción que utiliza el conector **PayU** pasa al estado **«En proceso de cancelación»**, no logra avanzar al estado **«Cancelada»**. Esto ocurre porque el conector PayU devuelve el código de respuesta `PENDING_TRANSACTION_REVIEW` con el mensaje `PENDING_REVIEW`, que VTEX Gateway no reconoce como una respuesta de cancelación válida, lo que hace que la transacción quede bloqueada permanentemente en «Cancelando».

## Simulación

No se puede reproducir en un entorno controlado. El problema no se produce en todas las cuentas y se manifiesta de forma intermitente en producción. Las transacciones atascadas en «Cancelando» se pueden identificar filtrando por estado en el panel de administración de Gateway.

## Workaround

provisional**
Activa manualmente la cancelación de la transacción a través de la API:

    POST /api/payments/pvt/transactions/{transactionId}/cancellation-request

Referencia: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction