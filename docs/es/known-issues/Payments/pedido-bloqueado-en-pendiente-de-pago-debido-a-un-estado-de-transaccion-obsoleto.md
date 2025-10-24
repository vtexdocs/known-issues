---
title: 'Pedido bloqueado en pendiente de pago debido a un estado de transacción obsoleto'
slug: pedido-bloqueado-en-pendiente-de-pago-debido-a-un-estado-de-transaccion-obsoleto
status: PUBLISHED
createdAt: 2025-10-01T12:55:46.366Z
updatedAt: 2025-10-01T12:55:46.366Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-due-to-outdated-transaction-status
locale: es
kiStatus: Fixed
internalReference: 1195265
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


A veces, cuando la OMS comprueba en la pasarela el estado de la transacción antes de cambiar el pedido a Pago Aprobado, el estado es anterior al esperado, que debería ser **Aprobado.** Haciendo que el pedido se quede atascado en estado Pendiente de Pago.


#### Simulación


El error es intermitente y no se puede simular.

## Workaround


Abra un ticket con VTEX solicitando que la notificación de pago aprobado sea reenviada a OMS.



