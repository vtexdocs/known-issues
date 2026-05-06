---
title: 'Checkout no admite la codificación de los nombres de las opciones de ensamblaje'
slug: checkout-no-admite-la-codificacion-de-los-nombres-de-las-opciones-de-ensamblaje
status: PUBLISHED
createdAt: 2021-06-08T15:26:16.000Z
updatedAt: 2024-05-06T19:01:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-support-encoding-assembly-options-names
locale: es
kiStatus: Backlog
internalReference: 378842
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los nombres de las opciones de montaje se utilizan en la ruta de la API. Por lo tanto, es necesario que el sistema admita la codificación de estos nombres para evitar problemas en la URL con caracteres especiales, como «/». Al añadir una opción de montaje que contenga «/» al carrito, esta simplemente no se añade y tampoco se notifica al usuario.

## Simulación

- Añade un «/» al nombre de la opción de montaje;
- Intenta añadir un producto con la opción de montaje;
- El artículo se añadirá al carrito sin la opción de montaje.

## Workaround

Elimina el «/» del nombre de la opción de montaje.