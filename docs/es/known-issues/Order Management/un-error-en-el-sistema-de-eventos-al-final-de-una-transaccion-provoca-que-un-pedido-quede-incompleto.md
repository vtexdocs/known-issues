---
title: 'Un error en el sistema de eventos al final de una transacción provoca que un pedido quede incompleto'
slug: un-error-en-el-sistema-de-eventos-al-final-de-una-transaccion-provoca-que-un-pedido-quede-incompleto
status: PUBLISHED
createdAt: 2021-08-27T23:54:04.000Z
updatedAt: 2025-02-11T19:42:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-with-event-system-at-the-end-of-a-transaction-causes-an-order-to-be-incomplete
locale: es
kiStatus: Backlog
internalReference: 421137
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se produce un error en el sistema de eventos al final de una transacción, el pedido que el cliente intentaba realizar no se completa y queda pendiente. La acción «RaiseEvent» es una acción interna que se activa en los últimos pasos de la creación del pedido, siempre después de que se haya realizado la transacción o el pago (no necesariamente aprobados o analizados; pueden tener sus propios flujos y plazos), cuando se produce un error en este paso, ya sea al final de una compra, por ejemplo, GatewayCallback, el usuario no puede completar su compra, cancelándose así la transacción debido al fallo de este evento.

## Simulación

No hay forma de simularlo, pero podemos consultar los registros:

RaiseEventyAsync ha fallado en los últimos 30 días, contabilizados por tipo de flujo de trabajo

RaiseEventAsync y RaiseEventAsyncV2 en los tipos de flujo de trabajo PlaceOrder y NewGatewayCallback

## Workaround

N/A