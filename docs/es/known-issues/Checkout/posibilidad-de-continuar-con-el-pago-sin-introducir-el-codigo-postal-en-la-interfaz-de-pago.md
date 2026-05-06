---
title: 'Posibilidad de continuar con el pago sin introducir el código postal en la interfaz de pago'
slug: posibilidad-de-continuar-con-el-pago-sin-introducir-el-codigo-postal-en-la-interfaz-de-pago
status: PUBLISHED
createdAt: 2021-02-12T14:02:53.000Z
updatedAt: 2023-01-18T21:47:29.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: possibility-to-proceed-to-payment-with-blank-postal-code-in-the-checkout-ui
locale: es
kiStatus: Backlog
internalReference: 334310
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario que ha iniciado sesión pasa por caja —donde los datos están ocultos— y, en el formulario de envío, elige la opción de entrega en otra dirección, existe la posibilidad de pasar al pago sin necesidad de introducir el código postal. De este modo, se llega al proceso de pago con los datos de envío vacíos en la interfaz de usuario.

## Simulación

Debes tener tus datos ocultos y un producto que se pueda tanto enviar como recoger.


1. Añade productos al carrito (sin iniciar sesión)
2. Ve a la caja y rellena con tu correo electrónico (usuario que tiene los datos completados, dirección y perfil)
3. Accede a la caja con tus datos ocultos
4. Ve al formulario de envío y elige «Entregar en otra dirección»
5. No rellenes el código postal y pulsa el botón «Ir al pago»
6. Ahora tienes una dirección de envío en blanco

## Workaround

N/A