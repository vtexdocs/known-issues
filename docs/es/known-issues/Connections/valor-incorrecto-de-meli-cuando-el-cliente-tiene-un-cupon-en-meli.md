---
title: 'Valor incorrecto de MELI cuando el cliente tiene un cupón en MELI'
slug: valor-incorrecto-de-meli-cuando-el-cliente-tiene-un-cupon-en-meli
status: PUBLISHED
createdAt: 2024-01-22T11:57:44.000Z
updatedAt: 2024-10-01T12:14:29.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-incorrect-value-when-client-has-coupon-on-meli
locale: es
kiStatus: Fixed
internalReference: 969297
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el cliente ha utilizado un cupón en MELI; en MELI hay varios tipos de cupones. Algunos de ellos no se tienen en cuenta en los cálculos de VTEX OMS.

## Simulación

En VTEX OMS, el valor del pedido puede diferir del importe que MELI cobró al cliente, debido a que algunos tipos de cupones no se tienen en cuenta al crear el pedido en VTEX.

## Workaround

provisional**

Para los pedidos de ME1, si el vendedor necesita disponer del valor correcto del pedido con el fin de enviar el importe de la factura a MELI, puede utilizar el campo de VTEX OMS denominado «total_paid_amount»; este campo tiene en cuenta actualmente todos los valores de los cupones.