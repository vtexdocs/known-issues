---
title: 'Shopee El importe de la protección del producto se añade al total del envío de los pedidos integrados.'
slug: shopee-el-importe-de-la-proteccion-del-producto-se-anade-al-total-del-envio-de-los-pedidos-integrados
status: PUBLISHED
createdAt: 2026-09-29T23:20:48.000Z
updatedAt: 2026-09-29T23:20:48.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-product-protection-amount-is-added-to-the-shipping-total-of-integrated-orders
locale: es
kiStatus: Backlog
internalReference: 1468080
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un pedido de Shopee incluye Protección de Producto (la garantía que el comprador añade al finalizar la compra), el importe pagado se suma al costo de envío al integrar el pedido en VTEX. Como resultado, el pedido muestra un valor de envío superior al que debería y la factura se emite con un total mayor al importe correcto.

## Simulación

1. Realiza un pedido en Shopee con Protección de Producto añadida.

2. Espera a que el pedido se integre en VTEX.

3. Abre el pedido en el panel de administración de VTEX y verifica el valor del envío: incluye el importe de la Protección de Producto.

4. Factura el pedido: el total de la factura es superior al esperado debido al importe de la Protección de Producto.

## Workaround

N/A