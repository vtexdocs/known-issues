---
title: 'Selección inesperada de varios puntos de recogida para un mismo vendedor cuando no todos los artículos están disponibles a través de la misma opción'
slug: seleccion-inesperada-de-varios-puntos-de-recogida-para-un-mismo-vendedor-cuando-no-todos-los-articulos-estan-disponibles-a-traves-de-la-misma-opcion
status: PUBLISHED
createdAt: 2021-11-11T20:53:49.000Z
updatedAt: 2023-05-05T10:34:30.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: unexpected-multiple-pickup-point-selection-for-the-same-seller-when-not-every-item-is-available-through-the-same-option
locale: es
kiStatus: Backlog
internalReference: 467702
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los componentes del punto de recogida en la interfaz de pago están configurados para gestionar una única opción por cada vendedor. Los artículos de diferentes vendedores habituales se gestionan por separado, pero si se trata de un vendedor de marca blanca, se considerarán dentro del mismo grupo.

Si no todos los artículos están disponibles en la misma opción de punto de recogida para el mismo vendedor, esto puede dar lugar a un estado erróneo, lo que incluye no gestionar correctamente los artículos de una opción seleccionada en un segundo momento o incluso no mostrar correctamente las opciones adicionales aplicadas a diferentes artículos en el formulario de pedido, centrándose únicamente en la primera opción de punto de recogida.

El escenario esperado es que cualquier opción seleccionada previamente se elimine para aplicar únicamente la última seleccionada por el usuario.

## Simulación

- tener un carrito con una dirección en la que no haya opciones de recogida que cubran todos los artículos,
- interactuar con las diferentes opciones de recogida para ver combinaciones inesperadas

## Workaround

provisional**
Actualmente, no hay ninguna solución provisional para este escenario.