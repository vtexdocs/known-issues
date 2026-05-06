---
title: 'La ruta /_search del sistema de tarjetas regalo no devuelve vales de forma intermitente cuando el valor del encabezado REST-range es inferior a 10.'
slug: la-ruta-search-del-sistema-de-tarjetas-regalo-no-devuelve-vales-de-forma-intermitente-cuando-el-valor-del-encabezado-restrange-es-inferior-a-10
status: PUBLISHED
createdAt: 2023-03-13T22:29:20.000Z
updatedAt: 2023-03-13T22:29:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-search-route-of-the-gift-card-system-intermittently-does-not-return-vouchers-when-the-restrange-header-is-less-than-10
locale: es
kiStatus: Backlog
internalReference: 770337
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un caso en el que el cliente tiene vales de fidelidad y llega a la caja, se espera que la ruta /_search devuelva todos los vales vinculados a ese usuario. Sin embargo, la caja pasa el encabezado con REST-range = 0-9. En algunas cuentas, este rango no es suficiente y la API devuelve una matriz vacía. Cuando simulamos la llamada directamente a la API con un rango superior a 10, podemos recuperar al menos un vale.

## Simulación

Para simular esta situación, realiza un POST a esta ruta https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search pasando el encabezado REST-range=giftcard=0-9.

## Workaround

Utilice un número mayor que el rango de 0 a 9. Sin embargo, el proceso de pago no permite personalizar este campo.