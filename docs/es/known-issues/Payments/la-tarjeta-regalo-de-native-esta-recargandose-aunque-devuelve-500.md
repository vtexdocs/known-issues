---
title: 'La tarjeta regalo de Native está recargándose, aunque devuelve 500'
slug: la-tarjeta-regalo-de-native-esta-recargandose-aunque-devuelve-500
status: PUBLISHED
createdAt: 2023-02-27T20:40:23.000Z
updatedAt: 2023-05-11T16:25:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: native-gift-card-is-adding-credit-although-it-returns-500
locale: es
kiStatus: Backlog
internalReference: 760896
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras realizar algunas pruebas empíricas, hemos observado que la ruta /transaction de la API nativa de tarjetas regalo devuelve en ocasiones un código de error 500 al añadir el saldo solicitado, lo cual constituye un comportamiento inesperado. Además, hemos observado que la solicitud tarda más de lo esperado en recibir una respuesta, lo que indica un comportamiento de tiempo de espera agotado. Como resultado, no existe ningún bloqueo efectivo que garantice que el saldo de la tarjeta no se abone en este escenario.

## Simulación

Comportamiento intermitente.

## Workaround

provisional**
N/A