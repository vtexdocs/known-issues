---
title: 'Los pedidos permanecen en «Pago pendiente» incluso después de que la transacción haya sido aprobada o finalizada.'
slug: los-pedidos-permanecen-en-pago-pendiente-incluso-despues-de-que-la-transaccion-haya-sido-aprobada-o-finalizada
status: PUBLISHED
createdAt: 2026-02-12T18:03:42.966Z
updatedAt: 2026-02-12T18:03:42.966Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-remain-in-payment-pending-even-after-transaction-is-approved-or-finished
locale: es
kiStatus: Backlog
internalReference: 1349138
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los pedidos pueden permanecer bloqueados en «Pago pendiente» aunque la transacción relacionada ya haya sido aprobada o finalizada en Pagos.

Esto ocurre cuando el OMS comprueba el estado de la transacción en la pasarela antes de actualizar el pedido a «Pago aprobado» y recibe un estado anterior al estado «Aprobado» esperado. Como resultado, el pedido no avanza, aunque la notificación de pago ya se haya enviado correctamente al OMS. #### Simulación

## Workaround

