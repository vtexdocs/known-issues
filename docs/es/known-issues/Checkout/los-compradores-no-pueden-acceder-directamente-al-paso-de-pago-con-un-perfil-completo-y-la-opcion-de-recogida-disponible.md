---
title: 'Los compradores no pueden acceder directamente al paso de pago con un perfil completo y la opción de recogida disponible'
slug: los-compradores-no-pueden-acceder-directamente-al-paso-de-pago-con-un-perfil-completo-y-la-opcion-de-recogida-disponible
status: PUBLISHED
createdAt: 2025-10-16T21:00:09.342Z
updatedAt: 2025-10-16T21:00:09.342Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shoppers-not-able-to-access-the-payment-step-directly-with-a-complete-profile-and-available-pickup-option
locale: es
kiStatus: Backlog
internalReference: 1243953
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al intentar acceder al paso de pago de la caja directamente a través de la URL (`/checkout?orderFormId={orderFormId}#/payment`) el comprador es llevado al paso de envío.

Esto ocurre si el usuario (email) presente en la información clientProfileData del orderForm tiene un perfil completo **y** hay una opción de recogida disponible para el carrito.


#### Simulación



- Crea un carrito de un usuario que tenga un perfil completo y copia su orderFormId;
- En una nueva pestaña de incógnito intenta acceder directamente a la página de pago de este carrito utilizando el enlace `/checkout?orderFormId={orderFormId}#/payment`;
- Si hay una opción de recogida disponible, el comprador será dirigido al paso de envío.

## Workaround


N/A



