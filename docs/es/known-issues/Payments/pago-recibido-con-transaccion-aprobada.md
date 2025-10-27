---
title: 'Pago recibido con transacción aprobada'
slug: pago-recibido-con-transaccion-aprobada
status: PUBLISHED
createdAt: 2025-10-16T20:34:53.518Z
updatedAt: 2025-10-16T20:34:53.518Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-received-while-transaction-approved
locale: es
kiStatus: Backlog
internalReference: 1174379
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, incluso si el conector (**pagelofacil**) devuelve la respuesta correcta, los pagos permanecen atascados como estado `recibido` después de que la transacción sea `aprobada`.

Para comprobar el estado del pago puede utilizar la API GET Payment details, que debería devolver `received` en este caso.

Además, es posible comprobar algunos registros que indican el cambio de estado de Recibido a Autorizando, sin embargo, no hay ningún efecto sobre el estado del pago.


#### Simulación

## Workaround

