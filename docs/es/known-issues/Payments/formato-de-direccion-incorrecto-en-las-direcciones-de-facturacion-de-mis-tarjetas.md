---
title: 'Formato de dirección incorrecto en las direcciones de facturación de «Mis tarjetas»'
slug: formato-de-direccion-incorrecto-en-las-direcciones-de-facturacion-de-mis-tarjetas
status: PUBLISHED
createdAt: 2023-04-17T17:40:08.000Z
updatedAt: 2023-04-17T17:40:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incorrect-address-format-on-the-my-cards-billing-addresses
locale: es
kiStatus: Backlog
internalReference: 791779
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al añadir una nueva dirección de facturación en vtex.my-cards, se muestra un formato de dirección incorrecto. Esto ocurre cuando el usuario intenta añadir una nueva tarjeta de crédito, y solo sucede cuando la nueva dirección que el usuario intenta introducir corresponde a un país diferente. Por ejemplo, si el usuario selecciona una nueva dirección de EE. UU., mientras que las demás son de Canadá, todas las direcciones de Canadá se formatearán como si fueran de EE. UU.

## Simulación

1. Haga clic en «Añadir una nueva tarjeta» en la página de tarjetas de crédito
2. Seleccione una dirección guardada diferente en la sección «Dirección de facturación de la tarjeta»
3. Cuando seleccionamos una dirección canadiense, todas las direcciones se muestran como de Canadá, incluso si se trata de una dirección de EE. UU.
4. Cuando seleccionamos una dirección de EE. UU., todas las direcciones se muestran como de EE. UU., incluso si se trata de una dirección canadiense

## Workaround

provisional**
N/A