---
title: 'Shopee El importe de la protección del producto se añade al total del pedido en los pedidos integrados.'
slug: shopee-el-importe-de-la-proteccion-del-producto-se-anade-al-total-del-pedido-en-los-pedidos-integrados
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-10-14T18:19:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-order-total-of-integrated-orders
locale: es
kiStatus: Backlog
internalReference: 1468080
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un pedido de Shopee incluye Protección de Producto (la garantía que el comprador añade al finalizar la compra), el importe pagado se incluye en el total del pedido al integrarse en VTEX. Dependiendo del pedido, este importe aparece en el precio del artículo o en el costo de envío. Como resultado, el total del pedido en VTEX es superior al valor de la mercancía y la factura se emite con un importe mayor al correcto.

## Simulación

1. Realiza un pedido en Shopee con Protección de Producto añadida.

2. Espera a que el pedido se integre en VTEX.

3. Abre el pedido en el panel de administración de VTEX: el total del pedido coincide con el importe pagado por el comprador, incluyendo la Protección de Producto. Este importe se añade al precio del artículo (como ajuste de precio del vendedor) o al costo de envío.

4. Factura el pedido: el total de la factura es superior al esperado debido al importe de la Protección de Producto.

## Workaround

N/A