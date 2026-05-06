---
title: 'Amazon Proceso de cancelación de pedidos'
slug: amazon-proceso-de-cancelacion-de-pedidos
status: PUBLISHED
createdAt: 2022-05-30T22:12:14.000Z
updatedAt: 2026-03-10T23:10:41.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-cancellation-flow
locale: es
kiStatus: Backlog
internalReference: 588456
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

1. Cuando se cancela un pedido en Amazon, no lo cancelamos en VTEX OMS.
Bridge registra «El estado del pedido es cancelado en el marketplace», pero no activa una cancelación en VTEX; si el pedido de VTEX aún no existe, solo se cancela la reserva.
2. Cuando se cancela un pedido en el OMS, el pedido no se cancela en el marketplace.

## Simulación

1. En el menú de pedidos del puente, verás la información de que el pedido se ha creado, pero cuando se cancela en Amazon no se refleja en VTEX.
2. En el OMS, el pedido se cancela, pero esta cancelación no se refleja en el marketplace.

## Workaround

provisional**

1. Cancela manualmente el pedido en VTEX OMS cuando Amazon lo marque como cancelado.
2. La cancelación debe realizarse en el marketplace.