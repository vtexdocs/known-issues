---
title: 'Los campos de respuesta vacíos se devuelven como "null" para los conectores con campos adicionales habilitados.'
slug: los-campos-de-respuesta-vacios-se-devuelven-como-null-para-los-conectores-con-campos-adicionales-habilitados
status: PUBLISHED
createdAt: 2026-11-18T20:35:00.000Z
updatedAt: 2026-11-18T20:35:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: empty-response-fields-returned-as-null-for-connectors-with-additional-fields-enabled
locale: es
kiStatus: Backlog
internalReference: 1486591
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los campos devueltos en la respuesta de autorización se guardan en los datos de pago como **cadena de texto** en lugar de su tipo original. Esto ocurre en los conectores que tienen habilitada la función `additional-fields`. El valor devuelto por el conector y almacenado en el pago es correcto; solo se ve afectado el tipo de dato almacenado.

El problema afecta principalmente a las transacciones sin tarjeta (por ejemplo, Pix) realizadas a través de la aplicación de Ventas cuando el conector que procesa la transacción tiene habilitada la función `additional-fields`. En estas transacciones, se espera que los campos de pago como `nsu` y `generatedCardToken` sean nulos y, por lo tanto, se guardan como "null". Este mismo valor se transfiere al pedido, donde el campo NSU del pago se muestra como "null".

## Simulación

1. Configure una condición de pago de Pix utilizando un conector que tenga habilitada la función `additional-fields`;
2. Realice un pedido a través de la aplicación de ventas, seleccionando un método de pago que no sea con tarjeta (p. ej., Pix).

3. Espere la respuesta de autorización del conector y verifique qué campos se devuelven como `null`.

4. Recupere los datos de pago a través de la API GET de pagos: los campos identificados en el paso 3 se guardan como `null`.

## Workaround

No existe ninguna solución alternativa para evitar que estos campos se guarden como la cadena `null`. Si este valor afecta a las integraciones externas que consumen los datos del pedido, dichas integraciones deben tratar la cadena `null` como un valor vacío.