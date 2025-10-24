---
title: 'El pago cancela la transacción después de la creación'
slug: el-pago-cancela-la-transaccion-despues-de-la-creacion
status: PUBLISHED
createdAt: 2025-10-16T17:29:13.925Z
updatedAt: 2025-10-16T17:29:13.925Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-after-creation
locale: es
kiStatus: Backlog
internalReference: 1157809
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Una transacción ya aprobada (y en algunos casos capturada) recibe una solicitud de cancelación directamente desde la caja:


    Una solicitud externa llamada para cancelar esta transacción Id = con Valor RequestId = . Prioridad: por defecto. Autor: vtex-service::checkout::stable.
Esta solicitud de cancelación se produce debido a un tiempo de espera cuando la caja llama a la ruta de pagos desde la pasarela, y el servicio tarda demasiado en responder.

Esto ocurre cuando el método `newGatewayCallback` se activa en dos puntos diferentes del flujo del pedido:



1. **1. Durante la fase de procesamiento del pedido**, cuando se llama al punto final `gatewayCallback/{orderGroup}`.
2. **Después de la autorización del pago**: cuando se llama al punto final `gatewayCallback/{orderGroup}/{messageCode}`.

En ambos casos, el `newGatewayCallback` realiza una petición a la pasarela de pago. Si la pasarela tarda demasiado en responder, puede producirse el mismo tipo de error de tiempo de espera en ambos casos.

Para mayor claridad:


- La primera llamada es una solicitud **POST** a `gatewayCallback`, que se produce justo después de que el usuario complete el proceso de pago.
- La segunda llamada es una solicitud **GET** a `gatewayCallback`, que se activa durante la confirmación del pago, es decir, cuando el comprador es redirigido a la pantalla "Pedido realizado".


## Simulación


La simulación no es posible.


## Workaround


No hay solución disponible.




