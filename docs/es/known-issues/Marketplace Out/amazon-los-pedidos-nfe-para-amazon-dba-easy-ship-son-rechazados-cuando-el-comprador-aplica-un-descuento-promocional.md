---
title: 'Amazon Los pedidos NF-e para Amazon DBA (Easy Ship) son rechazados cuando el comprador aplica un descuento promocional.'
slug: amazon-los-pedidos-nfe-para-amazon-dba-easy-ship-son-rechazados-cuando-el-comprador-aplica-un-descuento-promocional
status: PUBLISHED
createdAt: 2026-08-13T16:45:01.000Z
updatedAt: 2026-08-13T16:45:01.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-nfe-for-amazon-dba-easy-ship-orders-rejected-when-a-promotional-discount-is-applied-by-the-buyer
locale: es
kiStatus: Backlog
internalReference: 1447551
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La notificación de envío (NF-e) para pedidos de Amazon DBA (Easy Ship) se rechaza, posiblemente cuando el comprador paga con un método de pago que ofrece un descuento o incentivo promocional (p. ej., Pix), lo que provoca la cancelación automática del pedido.

## Simulación

- Realice un pedido a través del programa Amazon DBA (Easy Ship) donde el comprador paga con un método que ofrece un descuento o incentivo promocional (p. ej., Pix).

- Emita la notificación de envío (NF-e) con el valor total del pedido (que ya incluye el descuento aplicado por Amazon).

- Envíe la factura a Amazon.

- El pedido se cancela automáticamente tras el rechazo de la factura, posiblemente porque el valor del producto no coincide con el esperado.

![](https://vtexhelp.zendesk.com/attachments/token/RsGjBGfPvONupT0u4R6vhWSTt/?name=image.png)

## Workaround

No hay ninguna solución alternativa disponible.