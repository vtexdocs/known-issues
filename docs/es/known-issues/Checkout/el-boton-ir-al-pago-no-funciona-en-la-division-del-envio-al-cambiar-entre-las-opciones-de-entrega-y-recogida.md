---
title: 'El botón «Ir al pago» no funciona en la división del envío al cambiar entre las opciones de entrega y recogida'
slug: el-boton-ir-al-pago-no-funciona-en-la-division-del-envio-al-cambiar-entre-las-opciones-de-entrega-y-recogida
status: PUBLISHED
createdAt: 2023-02-17T18:03:34.000Z
updatedAt: 2023-02-17T18:03:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: go-to-payment-button-doesnt-work-in-delivery-split-when-switching-between-delivery-and-pick-up-options
locale: es
kiStatus: Backlog
internalReference: 756587
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un carrito con al menos dos productos en el que se ha dividido el envío —de modo que uno de los artículos está disponible para recoger y el otro solo para entrega programada—, la interfaz de usuario no permitirá pasar al paso de pago si se cambia entre las opciones de recogida y entrega, siempre que el primer artículo del carrito sea el que tiene entrega programada.

## Simulación

- Ten al menos 2 artículos en el carrito, de los cuales uno sea de entrega programada y el otro, de recogida;
- Asegúrate de que el artículo de entrega programada sea el primero del carrito
- Selecciona la fecha de entrega programada para cada artículo;
- Ve a la opción de recogida;
- Vuelve a la opción de entrega (la fecha ya estará rellenada);
- Intenta hacer clic en el botón «Ir al pago»; no podrás hacerlo.

## Workaround

Vuelve a seleccionar las fechas programadas para los artículos.