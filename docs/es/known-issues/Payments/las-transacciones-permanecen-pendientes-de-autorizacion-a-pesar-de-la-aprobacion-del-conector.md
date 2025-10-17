---
title: Las transacciones permanecen pendientes de autorización a pesar de la aprobación del conector
slug: las-transacciones-permanecen-pendientes-de-autorizacion-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2025-10-03T19:09:31.039Z
updatedAt: 2025-10-03T19:09:31.039Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-in-pending-authorization-despite-connector-approval
locale: es
kiStatus: Unknown
internalReference: 1302349
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las transacciones pueden quedarse atascadas en autorización pendiente incluso después de que el conector de pago devuelva un 200 OK con estado "aprobado". Los usuarios afectados ven que los pedidos permanecen en "pendiente de pago" y las transacciones no progresan a Autorizado/Aprobado. Esto podría afectar a cualquier flujo en el que la pasarela apruebe, pero el trabajador interno no avance el estado de la transacción.


#### Simulación


No es posible simular.

## Workaround



- Active el avance de autorización manualmente a través de la API de Payments Gateway:
- POST /api/pvt/transactions/{transactionId}/authorization-request
- Referencia: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request


