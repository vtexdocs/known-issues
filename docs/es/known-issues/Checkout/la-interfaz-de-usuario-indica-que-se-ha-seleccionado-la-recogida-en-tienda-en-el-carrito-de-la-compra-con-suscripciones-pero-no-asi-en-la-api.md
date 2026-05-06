---
title: 'La interfaz de usuario indica que se ha seleccionado la recogida en tienda en el carrito de la compra con suscripciones, pero no así en la API'
slug: la-interfaz-de-usuario-indica-que-se-ha-seleccionado-la-recogida-en-tienda-en-el-carrito-de-la-compra-con-suscripciones-pero-no-asi-en-la-api
status: PUBLISHED
createdAt: 2024-03-08T19:08:01.000Z
updatedAt: 2024-03-08T19:08:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-a-pickup-was-selected-in-cart-with-subscriptions-but-it-wasnt-in-api
locale: es
kiStatus: Backlog
internalReference: 996976
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se ofrecen opciones de recogida a los compradores que tengan en el carrito un artículo con suscripción. Cuando se selecciona una de las opciones de recogida, el proceso de pago cambia automáticamente a entrega, pero la interfaz de usuario sigue mostrando que se ha seleccionado la recogida.

## Simulación

- Configura una suscripción;
- Añade el artículo con la suscripción al carrito;
- En el paso de envío, selecciona «Recoger en tienda»;
- Comprueba el formulario de pedido a través de la API y verás que se ha seleccionado la entrega.

## Workaround

Abre un ticket en el servicio de asistencia de VTEX solicitando que se habiliten los puntos de recogida para los pedidos de suscripción.