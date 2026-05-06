---
title: 'MercadoPagoV1 no autoriza las transacciones cuando el valor del dato de usuario del teléfono es 0.'
slug: mercadopagov1-no-autoriza-las-transacciones-cuando-el-valor-del-dato-de-usuario-del-telefono-es-0
status: PUBLISHED
createdAt: 2023-03-27T15:34:56.000Z
updatedAt: 2023-03-27T15:34:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: mercadopagov1-fails-to-authorize-transactions-when-it-comes-with-phone-user-data-value-as-0
locale: es
kiStatus: Backlog
internalReference: 778611
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si el proceso de pago del cliente envía datos de usuario sin la validación adecuada, como un número de teléfono con menos de tres dígitos, estos datos se transmiten a la pasarela tal cual, lo que puede provocar errores inesperados durante el procesamiento. Por ejemplo, nuestro analizador puede generar una excepción y cancelar la transacción.

## Simulación

Para simular este problema, utilizamos nuestro conector heredado MercadoPagoV1 para realizar un pedido y enviamos datos de teléfono del usuario con menos de tres dígitos.

## Workaround

provisional**
Lamentablemente, no hay ninguna solución provisional en este momento. Para evitar este problema, recomendamos asegurarse de que todos los datos del usuario se validen correctamente antes de enviarlos a la pasarela.