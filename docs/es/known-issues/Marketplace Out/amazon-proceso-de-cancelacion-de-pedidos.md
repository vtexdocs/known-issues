---
title: 'Amazon Proceso de cancelación de pedidos'
slug: amazon-proceso-de-cancelacion-de-pedidos
status: PUBLISHED
createdAt: 2022-05-30T22:12:14.000Z
updatedAt: 2026-06-30T21:04:57.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-order-cancellation-flow
locale: es
kiStatus: Fixed
internalReference: 588456
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

1. Cuando se cancela un pedido en Amazon, no se cancela en el OMS de VTEX. Bridge registra "El estado del pedido está cancelado en el marketplace", pero no activa la cancelación en VTEX; si el pedido de VTEX aún no existe, solo se cancela la reserva.

2. Cuando se cancela un pedido en el OMS, no se cancela en el marketplace.

## Simulación

1. En el menú de pedidos de Bridge, verá que se creó el pedido, pero cuando se cancela en Amazon, esta cancelación no se refleja en VTEX.

2. En el OMS, el pedido se cancela, pero esta cancelación no se refleja en el marketplace.

## Workaround

1. Cancele manualmente el pedido en el OMS de VTEX cuando Amazon lo reporte como cancelado.

2. La cancelación debe realizarse en el marketplace.

## **Notas internas**
Esta tarjeta consolida el trabajo para alinear la cancelación de pedidos entre Amazon y VTEX OMS en ambas direcciones, tal como se describe en el Problema conocido.

Alcance (desglose):

- Subtarea Amazon → VTEX (OMS): la cancelación originada en el marketplace debe reflejarse correctamente en VTEX (incluye Bridge, OMS y casos excepcionales descritos en la subtarea). **Completada.**
- Subtarea OMS → Amazon: la cancelación realizada en el OMS debe reflejarse en el marketplace (Amazon). **Completada.**