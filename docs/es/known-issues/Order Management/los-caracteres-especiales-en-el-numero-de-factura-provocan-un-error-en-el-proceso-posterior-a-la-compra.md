---
title: 'Los caracteres especiales en el número de factura provocan un error en el proceso posterior a la compra'
slug: los-caracteres-especiales-en-el-numero-de-factura-provocan-un-error-en-el-proceso-posterior-a-la-compra
status: PUBLISHED
createdAt: 2023-12-14T21:31:06.000Z
updatedAt: 2025-05-06T16:17:50.000Z
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

Durante el flujo de facturación, el sistema de pedidos permite introducir valores en el campo «`invoiceNumber`» (a través de la interfaz de usuario o la API) que contengan caracteres especiales, ya sea al principio, en medio o al final, por ejemplo: `«#123456»`, `«123/456»` o `«123456/»`.

Sin embargo, el sistema SNO encargado de registrar la factura no puede procesar estos valores correctamente, lo que puede afectar a diversos flujos posteriores a la compra. Esto puede provocar errores o fallos en la ejecución de procesos tales como:


- Seguimiento de actualizaciones;
- Cambio del estado del pedido a «Facturado»;
- Comunicación con el sistema GiftCardHub;
- Y cualquier otro flujo que dependa del campo «invoiceNumber».

## Simulación

1- Facture un pedido introduciendo el siguiente número de factura de ejemplo: «#123456»; (caracteres especiales al principio, en medio del número o al final)

2- Tenga en cuenta que el pedido no se actualizará al estado «facturado»

3- En el caso de flujos en los que intervenga un vendedor, en la sección «Obtener pedido» del pedido del vendedor se podrá ver la factura guardada, pero, aun así, el pedido del marketplace no se actualizará a «facturado», ya que el sistema no podrá transmitir la factura.

## Workaround

Los pedidos con facturas que contengan caracteres especiales no se pueden modificar posteriormente. Para evitar interrupciones durante el flujo del pedido, recomendamos utilizar únicamente caracteres alfanuméricos en el campo `invoiceNumber`.