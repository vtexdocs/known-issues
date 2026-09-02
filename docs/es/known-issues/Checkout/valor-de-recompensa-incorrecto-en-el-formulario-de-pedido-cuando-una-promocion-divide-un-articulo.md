---
title: 'Valor de recompensa incorrecto en el formulario de pedido cuando una promoción divide un artículo.'
slug: valor-de-recompensa-incorrecto-en-el-formulario-de-pedido-cuando-una-promocion-divide-un-articulo
status: PUBLISHED
createdAt: 2026-09-03T00:44:01.000Z
updatedAt: 2026-09-03T00:44:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-reward-value-in-the-orderform-when-a-promotion-splits-an-item
locale: es
kiStatus: Backlog
internalReference: 1456081
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una promoción divide un artículo en varias líneas (por ejemplo, una promoción de "más por menos") y se aplica una promoción de recompensa al mismo artículo, el valor de recompensa por unidad se calcula y distribuye incorrectamente. La API de pago recibe el valor total de recompensa de RnB, pero no lo distribuye entre los artículos divididos.

El cálculo correcto de la recompensa es `items.rewardValue × items.quantity`. Este informe de conocimiento incluye casos en los que el valor de recompensa no se calcula por unidad.

La tarjeta de fidelización se crea con el valor de recompensa correcto. Hasta donde hemos podido validar, el problema solo ocurre en el formulario de pedido de pago.

## Simulación

1. Cree una promoción que pueda dividir artículos al finalizar la compra (por ejemplo, "Más por menos").
2. Debe estar activa una promoción con **valor de recompensa**. 3. Crea un carrito con un SKU válido para ambas promociones.
4. Inspecciona el array `items` en el orderFormId.

`items.rewardValue` no tendrá un valor por unidad.

## Workaround

N/A