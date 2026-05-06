---
title: 'Los pagos con tarjeta de débito que utilizan el conector de Firstdata no se pueden liquidar debido a un error en el campo «TransactionState»'
slug: los-pagos-con-tarjeta-de-debito-que-utilizan-el-conector-de-firstdata-no-se-pueden-liquidar-debido-a-un-error-en-el-campo-transactionstate
status: PUBLISHED
createdAt: 2021-11-02T17:34:01.000Z
updatedAt: 2023-06-23T17:24:36.000Z
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

Al utilizar el conector de Firstdata para procesar pagos con tarjeta de débito, nuestro código está diseñado para que el campo «TransactionState» esté establecido en «CAPTURED». Sin embargo, hemos detectado un problema por el que el proveedor envía tanto el valor «CAPTURED» como «SETTLED», lo que provoca un error:


    Mensaje de error: Error desconocido en AutoSettle. Hay un error en el documento XML (1, 745). & Error al ejecutar la operación de liquidación. Consulte la excepción interna. Conector: Firstdata. Mensaje: La cadena de entrada no tenía el formato correcto.

## Simulación

No es posible simularlo, ya que se trata de un comportamiento intermitente que depende de la respuesta del proveedor de pagos.

## Workaround

N/A