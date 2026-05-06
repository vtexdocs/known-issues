---
title: 'El pedido «con interés» presenta problemas al intentar devolver todos los artículos y reembolsar el importe total del pago'
slug: el-pedido-con-interes-presenta-problemas-al-intentar-devolver-todos-los-articulos-y-reembolsar-el-importe-total-del-pago
status: PUBLISHED
createdAt: 2021-06-01T17:52:51.000Z
updatedAt: 2023-09-18T20:52:55.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-interest-has-problems-when-trying-to-return-all-the-items-and-refund-the-total-payment
locale: es
kiStatus: Backlog
internalReference: 376077
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La plataforma impide la devolución de importes superiores al importe total del pedido. Esto supone un problema a la hora de gestionar devoluciones de pedidos en los que el método de pago incluye intereses.
Además del **importe total**, los pedidos tienen un **importe facturado** que, por motivos legales, no puede incluir los intereses aplicados en función del método de pago.
En consecuencia, la plataforma devuelve un error con el estado 400 cuando se intenta emitir una factura de devolución con un importe superior al facturado anteriormente.

###

## Simulación

1. En tu tienda, crea un pedido con intereses aplicados al pago;
2. Intente realizar una devolución del importe total pagado a través de la API con la solicitud de envío de factura;
3. Observe que la API devuelve un error con el estado 400, lo que indica que no es posible emitir una factura de tipo INPUT con un importe superior al importe total del pedido.

###

## Workaround

N/A