---
title: 'El sistema no permite realizar cancelaciones múltiples con tarjetas regalo'
slug: el-sistema-no-permite-realizar-cancelaciones-multiples-con-tarjetas-regalo
status: PUBLISHED
createdAt: 2020-11-24T19:45:14.000Z
updatedAt: 2024-06-25T13:51:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-does-not-allow-multiple-cancellation-with-giftcard
locale: es
kiStatus: Backlog
internalReference: 309117
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El sistema no está procesando la cancelación parcial de una transacción realizada con tarjeta regalo.
También hemos detectado un caso en el que ocurre lo mismo, aunque la cancelación sí se lleva a cabo. Esto hace que el importe del reembolso sea superior al importe de la transacción, ya que el valor reembolsado es la suma del primer reembolso parcial y el segundo reembolso por el importe total.

## Simulación

Busque una transacción en la que se haya solicitado un reembolso o una cancelación parcial mediante tarjeta regalo.

## Workaround

No hay ninguna solución alternativa; sin embargo, el usuario puede añadir el crédito reembolsable a través de la interfaz de usuario de administración.