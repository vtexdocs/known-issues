---
title: 'Amazon Flujo de cancelación de pedidos'
slug: amazon-flujo-de-cancelacion-de-pedidos
status: PUBLISHED
createdAt: 2026-03-10T20:11:14.345Z
updatedAt: 2026-03-10T20:11:14.345Z
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

1. Cuando se cancela un pedido en Amazon, no lo cancelamos en VTEX OMS. Bridge registra «El estado del pedido se ha cancelado en el marketplace», pero no activa una cancelación en VTEX; si el pedido de VTEX aún no existe, solo se cancela la reserva. 2. Cuando se cancela un pedido en el OMS, el pedido no se cancela en el marketplace.

## Simulación

1. En el menú de pedidos de Bridge, verá la información de que se ha creado el pedido, pero cuando se cancela en Amazon no se refleja en VTEX.
2. En el OMS, el pedido se cancela, pero esta cancelación no se refleja en el marketplace.

## Workaround

1. Cancele manualmente el pedido en VTEX OMS cuando Amazon lo informe como cancelado. 2. La cancelación debe realizarse en el marketplace.