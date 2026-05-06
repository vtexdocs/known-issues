---
title: 'Restricciones del campo «isValueChangeable» para transacciones con un «minimumValue» de 0,01'
slug: restricciones-del-campo-isvaluechangeable-para-transacciones-con-un-minimumvalue-de-001
status: PUBLISHED
createdAt: 2023-05-12T19:59:21.000Z
updatedAt: 2023-05-12T19:59:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: isvaluechangeable-field-limitations-for-transaction-with-minimumvalue-of-001
locale: es
kiStatus: Backlog
internalReference: 825122
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Solo hay dos formas de modificar el campo `isValueChangeable` de una transacción: cuando se produce una división y cuando el `maximumValue` es igual al `minimumValue`. Además, cabe destacar que todas las transacciones se crean con un `minimumValue` de 0,01. Como resultado, cuando se crea una transacción con un valor de 0,01, el campo `isValueChangeable` se establece automáticamente en `false`.

## Simulación

Crea una transacción con un valor de 0,01 y accede a la ruta /capabilities.

## Workaround

N/A