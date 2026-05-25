---
title: 'El pago se ha quedado en el estado «Recibido»: la transacción no pasa al estado «Aprobado»'
slug: el-pago-se-ha-quedado-en-el-estado-recibido-la-transaccion-no-pasa-al-estado-aprobado
status: PUBLISHED
createdAt: 2026-05-22T17:27:29.000Z
updatedAt: 2026-05-25T14:51:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-stuck-in-received-status-transaction-does-not-progress-to-approved-status
locale: es
kiStatus: Backlog
internalReference: 1411012
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, un pago **aparece sin un estado visible** en el panel de administración (PCI Gateway) y permanece estancado con `"status": "Received"` en la base de datos, como si el flujo de autorización nunca se hubiera iniciado para ese pago concreto. Esto ocurre incluso cuando la transacción en sí ya ha avanzado (por ejemplo, a `Authorized`) y otros pagos dentro de la misma transacción pueden haber progresado con normalidad.
El pago afectado no tiene «fecha de autorización», tiene «tid»/«nsu» nulos y «ConnectorResponses» vacíos, lo que indica que la solicitud de autorización nunca se envió o nunca se registró para esa entrada de pago.

## Simulación

No es posible simularlo.

## Workaround

Abre un ticket para el equipo de soporte técnico del producto.