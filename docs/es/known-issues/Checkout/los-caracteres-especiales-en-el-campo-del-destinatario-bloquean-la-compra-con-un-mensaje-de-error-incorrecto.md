---
title: 'Los caracteres especiales en el campo del destinatario bloquean la compra con un mensaje de error incorrecto.'
slug: los-caracteres-especiales-en-el-campo-del-destinatario-bloquean-la-compra-con-un-mensaje-de-error-incorrecto
status: PUBLISHED
createdAt: 2021-03-10T17:33:01.000Z
updatedAt: 2026-09-17T15:43:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: special-characters-in-the-delivery-receiver-field-block-the-purchase-with-a-wrong-error-message
locale: es
kiStatus: No Fix
internalReference: 342759
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La pantalla de pago no valida los caracteres especiales en el campo del destinatario. El comprador puede introducir caracteres especiales; la compra no se completa y aparece el error: "El campo Número en los datos de envío no es válido".

## Simulación

1. Vaya al paso de envío en el proceso de pago.
2. Introduzca !!!!!!?!?!?!?!?!?!?!** en "Destinatario".
3. Intente completar la compra; aparece el error "El campo Número en los datos de envío no es válido" y la compra no se completa.

## Workaround

N/A