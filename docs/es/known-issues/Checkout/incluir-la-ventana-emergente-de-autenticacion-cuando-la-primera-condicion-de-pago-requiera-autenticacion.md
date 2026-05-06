---
title: 'Incluir la ventana emergente de autenticación cuando la primera condición de pago requiera autenticación'
slug: incluir-la-ventana-emergente-de-autenticacion-cuando-la-primera-condicion-de-pago-requiera-autenticacion
status: PUBLISHED
createdAt: 2023-06-14T17:54:24.000Z
updatedAt: 2023-12-21T15:50:01.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: loop-in-the-authentication-popup-when-the-first-payment-condition-requires-authentication
locale: es
kiStatus: Backlog
internalReference: 844192
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La ventana emergente de autenticación entra en un bucle cuando la primera condición de pago tiene `requiresAuthentication: true`. Solo será posible continuar con la compra si se actualiza la página.

## Simulación

- Configura una condición de pago con `requiresAuthentication: true`;
- Asegúrate de que la condición de pago sea la primera;
- Utiliza un correo electrónico existente en el proceso de pago para identificarte;
- Ve al paso de pago y a la ventana emergente de autenticación;
- Inicia sesión utilizando una de las opciones y observa que la ventana emergente no se cierra.

## Workaround

- Cambia el orden de las condiciones de pago asegurándote de que la primera opción no sea la que tiene `requiresAuthentication: true`;
- Configura el parámetro «defaultPaymentSystemToApplyOnUserOrderForm» en la configuración de orderForm a través de la API para una opción sin autenticación, como una tarjeta de crédito.