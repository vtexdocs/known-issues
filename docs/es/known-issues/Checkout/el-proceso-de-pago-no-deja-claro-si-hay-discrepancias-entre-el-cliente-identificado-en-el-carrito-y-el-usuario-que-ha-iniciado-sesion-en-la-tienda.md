---
title: 'El proceso de pago no deja claro si hay discrepancias entre el cliente identificado en el carrito y el usuario que ha iniciado sesión en la tienda'
slug: el-proceso-de-pago-no-deja-claro-si-hay-discrepancias-entre-el-cliente-identificado-en-el-carrito-y-el-usuario-que-ha-iniciado-sesion-en-la-tienda
status: PUBLISHED
createdAt: 2021-10-04T22:46:58.000Z
updatedAt: 2026-02-09T17:10:43.000Z
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

Los cambios en la autenticación de usuarios realizados a través de VTEX ID no actualizan automáticamente la información personal del formulario de pedido (perfil y dirección).

Esto puede dar lugar a algunos comportamientos no deseados, tales como:


1. Un usuario autenticado añade información personal al carrito, luego cierra sesión a través de «Mi cuenta» o inicia sesión con un correo electrónico diferente, pero la información personal permanece visible en el carrito.

2. Un usuario no autenticado con un perfil completo se identifica mediante su correo electrónico, lo que hace que su información personal se rellene y se oculte automáticamente en el carrito; a continuación, inicia sesión con un correo electrónico diferente, pero la información personal permanece oculta en el carrito (y no se puede editar).

3. Los datos personales se actualizan en el perfil del usuario a través de la página «Mi cuenta», pero este cambio no se refleja en el formulario de pedido existente en el que se identifica a este usuario.

## Simulación

**Escenario 1:**


- Autenticar a través de la tienda utilizando un correo electrónico
- Crear un nuevo carrito y añadir datos personales con el mismo correo electrónico
- Volver a la tienda y, a continuación, cerrar sesión o iniciar sesión con un usuario diferente
- Volver al carrito; los datos personales añadidos anteriormente seguirán estando disponibles y sin ocultar

**Escenario 2:**


- Sin autenticar, crear un nuevo carrito y añadir el correo electrónico desde un perfil completo (los datos personales se rellenarán y ocultarán automáticamente)
- Iniciar sesión con un usuario diferente (especialmente utilizando Google/Facebook como proveedores de identidad)
- Vuelve al carrito; los datos personales añadidos anteriormente seguirán estando disponibles y ocultos, y no se podrá editar la información

**Escenario 3:**


- Crea un nuevo carrito y añade información personal
- Vuelve a la tienda y, a continuación, inicia sesión con el mismo correo electrónico utilizado en el carrito
- Actualiza parte de la información del perfil o la dirección
- Vuelve al carrito; los datos personales no se habrán actualizado

## Workaround

Algunos casos se pueden resolver implementando la limpieza de datos del carrito al cerrar sesión siguiendo la documentación que se indica a continuación, utilizando Session Watcher y la API `/changeToAnonymousUser`:

https://developers.vtex.com/docs/guides/vtex-io-documentation-cleaning-cart-data-on-log-out%0A