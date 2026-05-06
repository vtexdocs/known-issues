---
title: 'El proceso de inicio de sesión en la caja permite cambiar la dirección de correo electrónico, pero el proceso no es compatible'
slug: el-proceso-de-inicio-de-sesion-en-la-caja-permite-cambiar-la-direccion-de-correo-electronico-pero-el-proceso-no-es-compatible
status: PUBLISHED
createdAt: 2020-06-23T22:06:20.000Z
updatedAt: 2023-05-03T18:09:37.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-login-flow-allows-changing-email-but-flow-is-not-supported
locale: es
kiStatus: Backlog
internalReference: 258447
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al pasar por caja con un correo electrónico ya introducido y los datos ocultos, será necesario iniciar sesión si el comprador desea modificar cualquier dato. En el cuadro de inicio de sesión que se abrirá, el correo electrónico ya aparecerá rellenado con la información del carrito, pero la interfaz permite modificar el correo electrónico «sugerido».

El correo electrónico sugerido no debe modificarse. Si el cliente introduce otro correo electrónico, el proceso de inicio de sesión no funcionará: en la solicitud de la API se producirá un error silencioso y la interfaz de usuario se quedará bloqueada en un estado de «cargando».

## Simulación

- Al finalizar la compra, introduce un correo electrónico con un perfil completo para que los datos se autocompleten y se enmascaren;
- Intenta cambiar alguna información, como la dirección (se requerirá el inicio de sesión);
- En el cuadro de inicio de sesión, el correo electrónico del carrito ya estará rellenado;
- Cambia el correo electrónico en el cuadro de inicio de sesión;
- Intenta continuar; no será posible.

## Workaround

La tienda puede hacer que este campo sea de solo lectura para el flujo de inicio de sesión al finalizar la compra.