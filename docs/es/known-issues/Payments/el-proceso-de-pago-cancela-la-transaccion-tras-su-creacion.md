---
title: 'El proceso de pago cancela la transacción tras su creación.'
slug: el-proceso-de-pago-cancela-la-transaccion-tras-su-creacion
status: PUBLISHED
createdAt: 2026-03-04T16:33:14.130Z
updatedAt: 2026-03-04T16:33:14.130Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-cancels-transaction-after-creation
locale: es
kiStatus: Fixed
internalReference: 1157809
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Una transacción ya aprobada (y en algunos casos capturada) recibe una solicitud de cancelación directamente desde el checkout: Una aplicación externa llamada para cancelar esta transacción Id = con Valor RequestId = . Prioridad: predeterminada. Autor: vtex-service::checkout::stable. Esta solicitud de cancelación se produce debido a un tiempo de espera cuando el checkout llama a la ruta de pagos desde la pasarela y el servicio tarda demasiado en responder.

Esto ocurre cuando el método `GatewayCallback` se activa en dos puntos diferentes del flujo del pedido: 1. **Durante la etapa de procesamiento del pedido**, cuando se llama al punto final `gatewayCallback/{orderGroup}`. 2. **Después de la autorización del pago**, cuando se llama al punto final `gatewayCallback/{orderGroup}/{messageCode}`.

En ambos casos, `GatewayCallback` realiza una solicitud a la pasarela de pago. Si la pasarela tarda demasiado en responder, puede producirse el mismo tipo de error de tiempo de espera en cualquiera de los dos escenarios. Para aclararlo aún más: - La primera llamada es una **solicitud POST** a `gatewayCallback`, que se produce justo después de que el usuario complete el proceso de pago.
- La segunda llamada es una **solicitud GET** a `gatewayCallback`, que se activa durante la confirmación del pago, es decir, cuando el comprador es redirigido a la pantalla «Pedido realizado».

## Simulación

La simulación no es posible.

## Workaround

No hay ninguna solución alternativa disponible.