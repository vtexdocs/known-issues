---
title: 'En iOS, el último dígito del campo «Número de documento» (RUT) se borra aleatoriamente'
slug: en-ios-el-ultimo-digito-del-campo-numero-de-documento-rut-se-borra-aleatoriamente
status: PUBLISHED
createdAt: 2023-10-18T22:53:12.000Z
updatedAt: 2023-10-19T13:02:00.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: document-number-field-rut-randomly-getting-last-digit-deleted-on-ios
locale: es
kiStatus: Backlog
internalReference: 921944
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Solo en Safari/iOS, al introducir el número de documento y pasar a los campos de datos del cliente, se borra el último dígito del campo del número de documento (RUT).

## Simulación

- Introduce un número de documento válido en el campo RUT;
- Ve al campo siguiente (teléfono);
- Vuelve al campo del documento, borra el número y vuelve a escribir el mismo;
- Vuelve a cambiar la entrada y se borrará el último dígito del campo RUT.

## Workaround

provisional**
N/A