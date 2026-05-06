---
title: 'La división del pago al finalizar la compra puede generar información incorrecta en el campo «paymentData» de los pedidos (NO-PAYMENT)'
slug: la-division-del-pago-al-finalizar-la-compra-puede-generar-informacion-incorrecta-en-el-campo-paymentdata-de-los-pedidos-nopayment
status: PUBLISHED
createdAt: 2021-02-02T22:45:40.000Z
updatedAt: 2023-01-02T14:35:23.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-split-may-generate-incorrect-information-in-the-paymentdata-of-orders-nopayment
locale: es
kiStatus: Backlog
internalReference: 330802
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La información de pago entre diferentes pedidos del mismo «orderGroup» puede ser incorrecta cuando se paga más de un pedido a través del mismo «merchant» (la cuenta que gestiona el pago). Los importes pagados son correctos, ya que corresponden a la suma de cada pedido del grupo, pero los importes correspondientes a cada uno de ellos no figuran en el objeto «paymentData» del pedido.

Cuando esto ocurre, se toma como base uno de los pedidos del grupo y se presenta la suma de estos valores, mientras que los demás pedidos quedan con una transacción vacía, en la que su ID es «NO-PAYMENT».

El pedido de cumplimiento no se ve afectado, ya que nunca contiene datos específicos sobre el pago que se realizó en el marketplace y tiene el reparto correcto, junto con la descripción del «importe asumido por el afiliado». La situación es problemática cuando el marketplace quiere consumir los pedidos de la tienda, incluidos los enviados por otros vendedores, y luego contabilizar los importes de pago de cada parte (lo que suele ser útil para la conciliación).

Nota: este escenario está directamente relacionado con el reparto del pago realizado por el propio proceso de pago.

## Simulación

En teoría, cualquier carrito con varios vendedores, pero en el que el pago se realiza directamente al marketplace.

## Workaround

A efectos de integración de pedidos, es posible buscar si hay más pedidos en el mismo «orderGroup» para comprobar sus valores y poder redistribuirlos entre los pedidos del mismo grupo.