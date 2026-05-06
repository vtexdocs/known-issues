---
title: 'La API de OrderForm impide seleccionar el método de envío para el mismo artículo cuando se trata de vendedores diferentes'
slug: la-api-de-orderform-impide-seleccionar-el-metodo-de-envio-para-el-mismo-articulo-cuando-se-trata-de-vendedores-diferentes
status: PUBLISHED
createdAt: 2023-01-27T21:55:48.000Z
updatedAt: 2023-07-05T14:33:38.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-api-preventing-the-shipping-method-selection-for-the-same-item-under-different-sellers
locale: es
kiStatus: Fixed
internalReference: 742139
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Aunque un formulario de pedido permite añadir el mismo SKU varias veces a través de diferentes vendedores, no permite seleccionar el método de envío (SLA) de forma individual, ya que la logística de un vendedor es totalmente independiente de la de los demás.

A pesar de ello, tras indicar la dirección o elegir un método de envío disponible solo para una instancia concreta del SKU, las demás instancias se incluirán en un SLA diferente sin que ello suponga ningún problema. Por lo tanto, el problema se limita a la solicitud de selección del SLA entre artículos en este escenario o mediante la

## Simulación

del formulario de pedido.


## **Simulación**
En un carrito con el mismo artículo añadido más de una vez pero a través de diferentes vendedores, intente seleccionar sus métodos de envío (SLA) a través de la API utilizando opciones diferentes para cada uno. El mismo escenario también se puede probar a través de la API de simulación, declarando un «selectedSlaId». La API rechazará la acción mostrando el mensaje «No se puede seleccionar más de un SLA para el mismo artículo».

## Workaround

N/A