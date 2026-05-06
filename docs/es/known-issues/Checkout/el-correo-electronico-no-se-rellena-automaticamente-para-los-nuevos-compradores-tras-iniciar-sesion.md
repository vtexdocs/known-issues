---
title: 'El correo electrónico no se rellena automáticamente para los nuevos compradores tras iniciar sesión'
slug: el-correo-electronico-no-se-rellena-automaticamente-para-los-nuevos-compradores-tras-iniciar-sesion
status: PUBLISHED
createdAt: 2023-10-17T16:22:04.000Z
updatedAt: 2023-11-03T17:16:54.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: email-not-autofilling-for-new-buyers-after-logging-in
locale: es
kiStatus: Fixed
internalReference: 920634
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un nuevo comprador inicia sesión y pasa por caja, el campo del correo electrónico no se rellena automáticamente, por lo que el cliente tiene que volver a introducir su dirección de correo electrónico. Esto también ocurre al utilizar API y al enviar encabezados con las cookies del comprador.

## Simulación

- Inicia sesión con una dirección de correo electrónico que nunca se haya utilizado antes en la tienda;
- Añade productos al carrito;
- Ve a la caja;
- El campo de correo electrónico no se rellenará y habrá que volver a escribirlo.

## Workaround

provisional**
N/A