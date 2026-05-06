---
title: 'La interfaz de usuario no muestra la selección del intervalo de entrega para los puntos de recogida cuando un artículo de un vendedor se encuentra entre artículos de otro vendedor destinados a la recogida.'
slug: la-interfaz-de-usuario-no-muestra-la-seleccion-del-intervalo-de-entrega-para-los-puntos-de-recogida-cuando-un-articulo-de-un-vendedor-se-encuentra-entre-articulos-de-otro-vendedor-destinados-a-la-recogida
status: PUBLISHED
createdAt: 2023-12-15T20:18:33.000Z
updatedAt: 2023-12-15T20:18:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-delivery-window-selection-for-pickup-points-when-an-item-from-a-seller-is-between-items-for-pickup-from-another-seller
locale: es
kiStatus: Backlog
internalReference: 954108
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un carrito con al menos tres productos, en el que el orden de los artículos es el siguiente: el primero corresponde a la recogida programada 1, el segundo a la recogida programada 2 (vendedor diferente) y el tercero a la recogida programada 1, la interfaz de usuario no mostrará los intervalos de entrega para seleccionar la fecha y la hora de la segunda recogida. Esto ocurre porque la API agrupará el primer y el tercer artículo, ya que tienen el mismo SLA.

No es posible pasar al paso de pago y finalizar la compra.

## Simulación

- Añade un artículo al carrito para recogerlo del vendedor A;
- Añade un artículo al carrito para recogerlo del vendedor B;
- Añade otro artículo al carrito para recogerlo del vendedor A;
- En el paso de envío, no se mostrarán las franjas horarias de recogida para seleccionar la fecha y la hora.

## Workaround

N/A