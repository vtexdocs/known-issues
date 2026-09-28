---
title: 'Un error en el sistema de eventos al final de una transacción provoca que un pedido quede incompleto.'
slug: un-error-en-el-sistema-de-eventos-al-final-de-una-transaccion-provoca-que-un-pedido-quede-incompleto
status: PUBLISHED
createdAt: 2021-08-27T23:54:04.000Z
updatedAt: 2026-09-28T22:53:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-with-event-system-at-the-end-of-a-transaction-causes-an-order-to-be-incomplete
locale: es
kiStatus: Fixed
internalReference: 421137
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se produce un error en el sistema de eventos al final de una transacción, el pedido que el cliente intentaba realizar no se finaliza y queda incompleto. La acción "RaiseEvent" es una acción interna que se activa en los últimos pasos de la creación del pedido, siempre después de que se haya realizado la transacción/pago (no necesariamente aprobado o analizado; estos procesos pueden tener sus propios flujos y tiempos). Si se produce un error en este paso, por ejemplo, al final de una compra (GatewayCallback), el usuario no puede completar su compra, cancelándose así la transacción debido al fallo de este evento.

## Simulación

No es posible realizar una simulación, pero podemos consultar los registros:

RaiseEventyAsync falló en los últimos 30 días, según el tipo de flujo de trabajo.

RaiseEventAsync y RaiseEventAsyncV2 en los tipos de flujo de trabajo PlaceOrder y NewGatewayCallback.

## Workaround

N/A