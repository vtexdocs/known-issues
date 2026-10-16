---
title: 'El saldo de la tarjeta de regalo cambió a pesar de que la solicitud de transacción falló.'
slug: el-saldo-de-la-tarjeta-de-regalo-cambio-a-pesar-de-que-la-solicitud-de-transaccion-fallo
status: PUBLISHED
createdAt: 2021-12-20T21:59:01.000Z
updatedAt: 2026-10-17T00:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-balance-changed-even-though-the-transaction-request-failed
locale: es
kiStatus: Backlog
internalReference: 491195
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se crea una transacción con una tarjeta de regalo (débito o crédito), la API puede devolver un error aunque el saldo de la tarjeta ya se haya modificado.

Esto ocurre porque la transacción se registra en dos pasos:

1. Se actualiza el saldo de la tarjeta de regalo (débito o crédito).

2. Se guarda el registro de la transacción.

Si el segundo paso falla, la API devuelve un error (normalmente HTTP 400 con el mensaje «Se canceló una tarea»), pero el cambio de saldo del primer paso no se revierte.

- **Realización de un pedido:** Se debita la tarjeta de regalo, el pago falla y el pedido queda incompleto, pero el saldo no se reembolsa tras la cancelación de la transacción.

- **Reintento:** Si se vuelve a intentar la transacción tras este error, incluso con el mismo `requestId`, se procesa de nuevo y se abona o debita el saldo de la tarjeta de regalo más de una vez. - **Lista de transacciones:** Las transacciones afectadas por este problema afectan el saldo de la tarjeta de regalo, pero no se devuelven mediante `GET /api/giftcards/{giftCardId}/transactions`.

## Simulación

No es posible realizar una simulación.

## Workaround

- **Débito:** Realice el reembolso manualmente a través de la interfaz de usuario de la tarjeta de regalo. Si la tarjeta de regalo tiene la propiedad `Recargable: No`, el reembolso debe realizarse mediante la API de transacciones de tarjetas de regalo.

- **Crédito:** No reintente automáticamente si una solicitud de transacción devuelve un error o expira. Verifique el saldo de la tarjeta de regalo antes de reintentar y revierta los créditos duplicados que ya se hayan aplicado.