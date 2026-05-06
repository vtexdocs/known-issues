---
title: 'La ruta de transacción del sistema actual de tarjetas regalo devuelve un código de estado 200 OK al añadir o retirar saldo, incluso si la tarjeta está inactiva.'
slug: la-ruta-de-transaccion-del-sistema-actual-de-tarjetas-regalo-devuelve-un-codigo-de-estado-200-ok-al-anadir-o-retirar-saldo-incluso-si-la-tarjeta-esta-inactiva
status: PUBLISHED
createdAt: 2023-04-24T20:31:03.000Z
updatedAt: 2023-04-24T20:31:02.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-current-gift-card-systems-transaction-route-returns-a-200-ok-status-code-when-adding-or-removing-credits-even-if-the-card-is-inactive
locale: es
kiStatus: Backlog
internalReference: 795997
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, nuestro sistema de tarjetas regalo no incluye una comprobación para verificar si una tarjeta regalo está activa antes de añadir o eliminar créditos. Aunque esta ruta solo se ocupa de realizar transacciones con tarjetas regalo, es la única forma de hacerlo, por lo que se espera que se lleve a cabo algún tipo de validación.

Por lo tanto, para abordar este problema, podría ser útil actualizar la ruta /transaction para que devuelva un código de estado más informativo, como un 400 Bad Request o un 404 Not Found, al intentar añadir o eliminar saldo de una tarjeta regalo inactiva. Además, proporcionar mensajes de error claros al usuario puede ayudar a evitar malentendidos y garantizar que las transacciones se procesen correctamente.

## Simulación

Realice una solicitud a la ruta /transaction para añadir o eliminar créditos utilizando una tarjeta regalo desactivada.

## Workaround

N/A