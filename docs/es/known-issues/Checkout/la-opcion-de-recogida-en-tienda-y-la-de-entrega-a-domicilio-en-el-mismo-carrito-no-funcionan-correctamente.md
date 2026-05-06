---
title: 'La opción de recogida en tienda y la de entrega a domicilio en el mismo carrito no funcionan correctamente'
slug: la-opcion-de-recogida-en-tienda-y-la-de-entrega-a-domicilio-en-el-mismo-carrito-no-funcionan-correctamente
status: PUBLISHED
createdAt: 2021-12-06T19:35:32.000Z
updatedAt: 2023-06-16T21:13:58.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickuppoint-and-schedule-delivery-in-the-same-cart-are-not-working-correctly
locale: es
kiStatus: Backlog
internalReference: 482256
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario no funciona correctamente en un carrito con más de un artículo y con una entrega dividida, en la que uno de los artículos está disponible para recoger en tienda y los demás solo para entrega programada.

La fecha para elegir los artículos de recogida se establece sin problemas. Sin embargo, las fechas para la entrega programada no se comportan como se esperaba.

## Simulación

- Crea un carrito con al menos dos artículos, de los cuales uno esté disponible para recoger y los demás solo para entrega programada;
- En el paso de envío, selecciona «Recoger en tienda» y elige una franja horaria de entrega;
- Intenta seleccionar una franja horaria para la entrega programada.

## Workaround

provisional**
N/A