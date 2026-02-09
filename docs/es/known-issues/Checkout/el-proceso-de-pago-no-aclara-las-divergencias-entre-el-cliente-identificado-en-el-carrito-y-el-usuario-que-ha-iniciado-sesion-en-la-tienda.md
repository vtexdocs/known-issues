---
title: 'El proceso de pago no aclara las divergencias entre el cliente identificado en el carrito y el usuario que ha iniciado sesión en la tienda.'
slug: el-proceso-de-pago-no-aclara-las-divergencias-entre-el-cliente-identificado-en-el-carrito-y-el-usuario-que-ha-iniciado-sesion-en-la-tienda
status: PUBLISHED
createdAt: 2026-02-09T14:11:34.331Z
updatedAt: 2026-02-09T14:11:34.331Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-has-no-clarity-about-divergences-between-the-customer-identified-in-the-cart-and-the-user-logged-in-to-the-store
locale: es
kiStatus: Backlog
internalReference: 442267
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los cambios en la autenticación de usuarios realizados a través de VTEX ID no actualizan automáticamente la información personal (perfil y dirección) del formulario de pedido. Esto puede dar lugar a algunos comportamientos no deseados, como por ejemplo: 1. El usuario autenticado añade información personal al carrito, luego cierra la sesión a través de «Mi cuenta» o inicia sesión con un correo electrónico diferente, pero la información personal permanece sin ocultar en el carrito.

2. Un usuario no autenticado con un perfil completo se identifica a través del correo electrónico, lo que hace que su información personal se rellene automáticamente y se oculte en el carrito, luego inicia sesión con un correo electrónico diferente, pero la información personal permanece oculta en el carrito (y no se puede editar). 3. Los datos personales se actualizan en el perfil del usuario a través de la página «Mi cuenta», pero este cambio no se refleja en el formulario de pedido existente en el que se identifica a este usuario.


#### Simulación

## Workaround

