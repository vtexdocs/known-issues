---
title: 'Los pagos a débito que utilizan el conector Firstdata no pueden liquidarse debido a un error en el campo TransactionState'
slug: los-pagos-a-debito-que-utilizan-el-conector-firstdata-no-pueden-liquidarse-debido-a-un-error-en-el-campo-transactionstate
status: PUBLISHED
createdAt: 2025-11-14T19:27:03.114Z
updatedAt: 2025-11-14T19:27:03.114Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
locale: es
kiStatus: Backlog
internalReference: 461095
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al utilizar el conector Firstdata para procesar pagos de débito, nuestro código está diseñado para esperar que el campo TransactionState se establezca como "CAPTURED". Sin embargo, hemos encontrado un problema en el que el proveedor está enviando ambos valores "CAPTURED" y "SETTLED", lo que está causando un error:


    Mensaje de error: Unknown Error on AutoSettle. Hay un error en el documento XML (1, 745). & Error al ejecutar la operación de Liquidación. Consulte la excepción interna. Conector: Firstdata. Mensaje: La cadena de entrada no tenía el formato correcto.



#### Simulación


No es posible simular ya que es un comportamiento intermitente que depende de la respuesta del proveedor de pago.

## Workaround


N/A



