---
title: 'Los datos de marketing no se guardan en los pedidos cuando se utiliza la función de cupones múltiples y los parámetros UTM'
slug: los-datos-de-marketing-no-se-guardan-en-los-pedidos-cuando-se-utiliza-la-funcion-de-cupones-multiples-y-los-parametros-utm
status: PUBLISHED
createdAt: 2023-11-14T18:03:15.000Z
updatedAt: 2024-04-09T13:32:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingdata-is-not-saved-in-orders-when-using-multiple-coupons-feature-and-utms
locale: es
kiStatus: Fixed
internalReference: 936458
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se utiliza la función de cupones múltiples y hay cupones y parámetros UTM, o «marketingTags», en el «orderForm», no se guardan los «marketingData» en el pedido.

## Simulación

- Disponer de una cuenta que utilice la función de cupones múltiples;
- Utilizar un cupón y configurar cualquier UTM o «marketingTags»; ambos deben estar en el «orderForm»;
- Finalizar la compra; no habrá ningún «marketingData» en el pedido.

## Workaround

N/A