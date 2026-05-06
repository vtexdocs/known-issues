---
title: 'Método de redondeo inconsistente del conector DecidirV1 para los campos CSPTGRANDTOTALAMOUNT y CSITTOTALAMOUNT.'
slug: metodo-de-redondeo-inconsistente-del-conector-decidirv1-para-los-campos-csptgrandtotalamount-y-csittotalamount
status: PUBLISHED
createdAt: 2023-04-10T20:32:15.000Z
updatedAt: 2023-04-10T20:32:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: es
kiStatus: Backlog
internalReference: 787367
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El conector heredado DecidirV1 utiliza un método interno para calcular los campos `CSPTGRANDTOTALAMOUNT` y `CSITTOTALAMOUNT`, que es el producto entre el valor del producto y la cantidad. Este enfoque da como resultado una cadena con dos decimales. Por consiguiente, cuando el precio del producto contiene más de dos decimales, el valor del campo `CSPTGRANDTOTALAMOUNT` difiere, ya que se trata del propio importe del pago.

## Simulación

Realice un pedido utilizando DecidirV1 con un producto en el carrito cuyo precio tenga más de 3 decimales.

## Workaround

Para evitar estas discrepancias, recomendamos utilizar productos con un máximo de dos decimales o modificar el carrito de la compra para eliminar el uso de decimales.