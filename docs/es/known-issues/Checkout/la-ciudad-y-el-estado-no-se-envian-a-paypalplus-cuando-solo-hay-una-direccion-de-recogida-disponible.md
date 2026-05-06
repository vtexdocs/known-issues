---
title: 'La ciudad y el estado no se envían a PayPalPlus cuando solo hay una dirección de recogida disponible'
slug: la-ciudad-y-el-estado-no-se-envian-a-paypalplus-cuando-solo-hay-una-direccion-de-recogida-disponible
status: PUBLISHED
createdAt: 2023-06-01T13:46:54.000Z
updatedAt: 2023-09-12T13:10:35.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: city-and-state-are-not-sent-to-paypalplus-when-there-is-only-pickup-address-available
locale: es
kiStatus: Fixed
internalReference: 836025
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los campos «ciudad» y «provincia» no se envían a PayPalPlus cuando el comprador añade únicamente una dirección de recogida al carrito, lo que impide que se cargue el método de pago.

## Simulación

- Añade productos al carrito;
- Ve al paso de envío;
- Selecciona «Recoger en tienda», introduce el código postal y selecciona una tienda;
- Haz clic en «Ir al pago» y selecciona la tarjeta de crédito en PayPalPlus.

## Workaround

Selecciona «Entrega», introduce el código postal y cambia a «Recoger en tienda».