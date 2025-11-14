---
title: 'Los caracteres especiales en invoiceNumber hacen que falle el flujo posterior a la compra'
slug: los-caracteres-especiales-en-invoicenumber-hacen-que-falle-el-flujo-posterior-a-la-compra
status: PUBLISHED
createdAt: 2025-11-14T19:26:04.371Z
updatedAt: 2025-11-14T19:26:04.371Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-characters-in-invoicenumber-cause-postpurchase-flow-to-fail
locale: es
kiStatus: Fixed
internalReference: 953285
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Durante el flujo de facturas, el sistema de Pedidos permite introducir valores en el campo "`invoiceNumber`" (vía UI o API) que contengan caracteres especiales, ya sea al principio, en medio o al final, por ejemplo: `"#123456"`, `"123/456"` o `"123456/"`.

Sin embargo, el sistema SNO encargado de registrar la factura no puede procesar correctamente estos valores, lo que puede repercutir en diversos flujos posteriores a la compra. Esto puede dar lugar a errores o fallos en la ejecución de procesos como:


- Actualizaciones de seguimiento;
- Cambio del estado del pedido a "Facturado";
- Comunicación con el sistema GiftCardHub;
- Y cualquier otro flujo que dependa del campo "invoiceNumber".

## Simulación


1- Facture un pedido introduciendo el siguiente número de factura de ejemplo: "#123456"; (caracteres especiales al principio, en medio del número o al final)

2- Tenga en cuenta que el pedido no se actualizará al estado facturado

3- En el caso de los flujos que impliquen a un vendedor, en el Obtener Pedido del pedido del vendedor será posible ver la factura guardada, pero aún así el pedido del marketplace no se actualizará a facturado, ya que el sistema no podrá pasar la factura.

## Workaround


Los pedidos con facturas que contienen caracteres especiales no se pueden ajustar posteriormente. Para evitar interrupciones durante el flujo de pedidos recomendamos utilizar sólo caracteres alfanuméricos en el campo `invoiceNumber`.