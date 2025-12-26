---
title: 'Las transacciones permanecen atascadas en Pendiente de autorización a pesar de la aprobación del conector'
slug: las-transacciones-permanecen-atascadas-en-pendiente-de-autorizacion-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2025-12-26T14:33:27.893Z
updatedAt: 2025-12-26T14:33:27.893Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-pending-authorization-despite-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1344356
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, el Transaction Worker no consigue avanzar la transacción al estado esperado, incluso después de recibir una respuesta correcta (200 OK) del conector. Como resultado, las transacciones pueden permanecer atascadas en Pendiente de Autorización y los pedidos correspondientes en **"Pendiente de Pago "**. Este comportamiento puede ocurrir cuando el conector devuelve correctamente una respuesta de autorización, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.



#### Simulación


No es posible simular.

## Workaround


Transacción atascada en Pendiente de Autorización Ejecute la siguiente API para adelantar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request



