---
title: 'Amazon El error de seguimiento no se muestra en Bridge cuando los artículos de la factura no coinciden con los artículos del pedido.'
slug: amazon-el-error-de-seguimiento-no-se-muestra-en-bridge-cuando-los-articulos-de-la-factura-no-coinciden-con-los-articulos-del-pedido
status: PUBLISHED
createdAt: 2026-11-07T00:20:16.000Z
updatedAt: 2026-11-07T00:20:16.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-tracking-failure-is-not-displayed-in-bridge-when-the-invoice-items-dont-match-the-order-items
locale: es
kiStatus: Backlog
internalReference: 1482337
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los pedidos de Amazon con envío propio, cuando la factura registrada en el pedido de VTEX incluye un artículo que no aparece en el pedido de Amazon, la información de seguimiento no se envía a Amazon y no se muestra ningún mensaje de error en Bridge. El pedido permanece facturado en VTEX, sin ninguna indicación de que Amazon no haya recibido la confirmación de envío.

El fallo se registra únicamente en los registros de integración, con los siguientes mensajes:
Los pedidos cuya factura incluye los mismos artículos que el pedido de Amazon se envían normalmente y su estado se muestra en Bridge.

El artículo facturado en VTEX no existe en el pedido de Amazon correspondiente. Artículo no encontrado en el pedido.

## Simulación

1. Reciba un pedido de Amazon con envío propio que contenga un kit y al menos otro SKU.

2. Facture el pedido en VTEX, incluyendo los componentes del kit junto con el otro SKU en la factura.

3. El seguimiento no se actualiza en Amazon.

4. En Bridge, no se muestra ningún mensaje para el pedido.

## Workaround

Al facturar el pedido, incluya los mismos SKU que en el pedido de Amazon. Para pedidos con un kit, incluya el SKU del kit en lugar de sus componentes.