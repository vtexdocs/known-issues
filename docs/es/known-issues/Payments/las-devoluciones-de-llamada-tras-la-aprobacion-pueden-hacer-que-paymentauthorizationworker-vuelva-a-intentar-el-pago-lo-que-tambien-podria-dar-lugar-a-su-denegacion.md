---
title: 'Las devoluciones de llamada tras la aprobación pueden hacer que PaymentAuthorizationWorker vuelva a intentar el pago, lo que también podría dar lugar a su denegación.'
slug: las-devoluciones-de-llamada-tras-la-aprobacion-pueden-hacer-que-paymentauthorizationworker-vuelva-a-intentar-el-pago-lo-que-tambien-podria-dar-lugar-a-su-denegacion
status: PUBLISHED
createdAt: 2023-01-25T19:58:26.000Z
updatedAt: 2023-09-15T18:22:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callbacks-after-approval-may-trigger-paymentauthorizationworker-to-retry-payment-which-may-also-deny-it
locale: es
kiStatus: Backlog
internalReference: 740499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el proveedor envía una respuesta de callback inmediatamente después de la autorización, esto puede desencadenar un nuevo intento de autorización. Por lo tanto, en algunos casos en los que la transacción incluye más de un pago y uno de ellos es una tarjeta regalo, un nuevo intento de autorización puede cancelar la transacción si no hay fondos disponibles.

## Simulación

No se puede simular, ya que depende de la respuesta de callback del proveedor.

## Workaround

N/A