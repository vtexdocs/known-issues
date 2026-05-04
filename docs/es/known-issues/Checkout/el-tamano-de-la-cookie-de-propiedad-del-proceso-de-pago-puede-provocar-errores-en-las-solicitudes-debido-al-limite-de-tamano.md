---
title: 'El tamaño de la cookie de propiedad del proceso de pago puede provocar errores en las solicitudes debido al límite de tamaño'
slug: el-tamano-de-la-cookie-de-propiedad-del-proceso-de-pago-puede-provocar-errores-en-las-solicitudes-debido-al-limite-de-tamano
status: PUBLISHED
createdAt: 2026-05-04T21:09:42.874Z
updatedAt: 2026-05-04T21:09:42.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ownership-cookie-size-may-lead-to-broken-requests-due-to-size-limit
locale: es
kiStatus: Backlog
internalReference: 1401406
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, cuando se añade una nueva dirección a un carrito con un valor de `CheckoutOrderFormOwnership`, el valor de la cookie ya existente se incrementa con la respuesta de la API de Checkout.

Este comportamiento puede provocar errores en las solicitudes debido al límite de tamaño de las cookies en las implementaciones que dependen de la cookie `CheckoutOrderFormOwnership` de Checkout.

Escenarios conocidos:


- Cuando la configuración de OrderForm `useOwnershipCookie` está establecida en `false`;
  - Añadir una nueva dirección a un carrito con un valor para la cookie `CheckoutOrderFormOwnership` siempre provocará un incremento del tamaño de la cookie.


- Cuando la configuración de OrderForm `useOwnershipCookie` está establecida en `true`;
  - Añadir un carrito con un nuevo valor de `addressId` a un carrito con un valor para la cookie `CheckoutOrderFormOwnership` siempre provocará un aumento del tamaño de la cookie.
  - Añadir un carrito con un valor de `addressId` ya existente a un carrito con un valor para la cookie `CheckoutOrderFormOwnership` no provocará un aumento del tamaño de la cookie.

## Simulación

- Establezca `useOwnershipCookie` en `false` en la configuración de OrderForm de la tienda;
- Cree un nuevo carrito y añada cualquier artículo;
- Añada cualquier número de direcciones; la cookie de respuesta `CheckoutOrderFormOwnership` siempre debería aumentar.


- Establezca `useOwnershipCookie` en `true` en la configuración de OrderForm de la tienda;
- Crea un nuevo carrito y añade cualquier artículo;
- Añade cualquier dirección con un valor `addressId`;
- Añade cualquier número de direcciones con valores `addressId` diferentes a los de cualquier dirección ya existente en el carrito; el tamaño de la cookie de respuesta `CheckoutOrderFormOwnership` debería aumentar siempre.

## Workaround

N/A