---
title: 'La función de pago permite a los usuarios pasar directamente al paso de pago con un campo «shippingData» vacío cuando se utiliza la geolocalización'
slug: la-funcion-de-pago-permite-a-los-usuarios-pasar-directamente-al-paso-de-pago-con-un-campo-shippingdata-vacio-cuando-se-utiliza-la-geolocalizacion
status: PUBLISHED
createdAt: 2021-03-10T20:58:42.000Z
updatedAt: 2023-10-23T17:58:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-users-to-jump-to-payment-step-with-an-empty-shippingdata-when-using-geolocation
locale: es
kiStatus: Backlog
internalReference: 343056
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar la geolocalización durante el proceso de pago, los usuarios pueden pasar al paso de pago aunque los datos de envío (`shippingData`) estén incompletos.

## Simulación

- Envía la dirección a través de la API con datos incompletos;
- Añade cualquier producto al carrito;
- Ve al carrito y, a continuación, pasa por caja;
- Añade la información del perfil.

## Workaround

provisional**
N/A