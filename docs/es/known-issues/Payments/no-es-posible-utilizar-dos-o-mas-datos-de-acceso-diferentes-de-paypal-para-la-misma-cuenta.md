---
title: 'No es posible utilizar dos o más datos de acceso diferentes de PayPal para la misma cuenta.'
slug: no-es-posible-utilizar-dos-o-mas-datos-de-acceso-diferentes-de-paypal-para-la-misma-cuenta
status: PUBLISHED
createdAt: 2021-10-29T16:43:27.000Z
updatedAt: 2023-06-23T18:23:50.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inability-to-use-two-or-more-different-paypal-credentials-for-the-same-account
locale: es
kiStatus: Backlog
internalReference: 459704
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el usuario registra dos afiliaciones diferentes en la misma cuenta mediante PayPalPlus, la plataforma no actualiza la caché cuando se produce un cambio en una regla de pago; es decir, solo es posible utilizar una credencial por cuenta.

## Simulación

Registra dos afiliaciones diferentes con credenciales distintas y crea reglas teniendo en cuenta estas dos afiliaciones.
Cierre dos compras, cada una con una de las reglas, y en la carga útil de la transacción podrá ver que, a pesar de introducir las reglas correctas, el merchant_id (identificación de la cuenta en la que se ingresará el dinero) es el mismo.

## Workaround

provisional**
N/A