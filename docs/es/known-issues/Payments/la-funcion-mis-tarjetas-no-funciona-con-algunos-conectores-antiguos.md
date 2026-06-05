---
title: 'La función «Mis tarjetas» no funciona con algunos conectores antiguos'
slug: la-funcion-mis-tarjetas-no-funciona-con-algunos-conectores-antiguos
status: PUBLISHED
createdAt: 2021-05-26T20:34:15.000Z
updatedAt: 2026-06-05T20:51:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-cards-is-not-working-for-some-legacy-connectors
locale: es
kiStatus: No Fix
internalReference: 373636
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar guardar una tarjeta de crédito en «Mis tarjetas» dentro de la sesión «Mi cuenta» **sin haber realizado ninguna compra con esa tarjeta anteriormente**, se producirá un error al intentar guardar la tarjeta con un conector interno heredado.

## Simulación

1. Ve a una tienda con un conector interno/heredado
2. Inicia sesión en la tienda con un conector heredado
3. Ve a «Mis tarjetas»
4. Intenta guardar tu tarjeta de crédito

Verás el siguiente error:
«Se ha producido un error al intentar guardar la tarjeta»

## Workaround

provisional**
N/A