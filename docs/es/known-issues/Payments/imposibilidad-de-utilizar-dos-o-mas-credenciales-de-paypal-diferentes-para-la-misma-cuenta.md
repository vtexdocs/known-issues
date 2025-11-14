---
title: 'Imposibilidad de utilizar dos o más credenciales de PayPal diferentes para la misma cuenta.'
slug: imposibilidad-de-utilizar-dos-o-mas-credenciales-de-paypal-diferentes-para-la-misma-cuenta
status: PUBLISHED
createdAt: 2025-11-14T19:28:51.024Z
updatedAt: 2025-11-14T19:28:51.024Z
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


Cuando el usuario registra dos afiliaciones diferentes en la misma cuenta utilizando PayPalPlus, la plataforma no actualiza la caché para cuando se produce un cambio en una regla de pago, es decir, sólo es posible utilizar una credencial por cuenta.


#### Simulación


Registre dos afiliaciones diferentes con credenciales diferentes y cree reglas teniendo en cuenta estas dos afiliaciones.
Cierra dos compras, cada una con una de las reglas, y en el payload de la transacción puedes ver que a pesar de introducir las reglas correctas, el merchant_id (identificación de la cuenta en la que caerá el dinero) es el mismo.

## Workaround


N/A



