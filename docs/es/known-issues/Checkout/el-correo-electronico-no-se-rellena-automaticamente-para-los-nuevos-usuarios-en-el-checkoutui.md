---
title: El correo electrónico no se rellena automáticamente para los nuevos usuarios en el checkout-ui
slug: el-correo-electronico-no-se-rellena-automaticamente-para-los-nuevos-usuarios-en-el-checkoutui
status: PUBLISHED
createdAt: 2025-10-16T19:52:39.751Z
updatedAt: 2025-10-16T19:52:39.751Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: email-not-autofilling-for-new-users-on-checkoutui
locale: es
kiStatus: Backlog
internalReference: 887645
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un nuevo usuario introduce un nuevo correo electrónico en el paso de correo electrónico y pasa a la página siguiente, en el componente de datos del cliente, el correo electrónico no se rellena automáticamente.
Esto se debe a que no hay ningún usuario registrado con ese email. Como resultado, el `orderForm` cargado también contiene un campo de email vacío, haciendo que permanezca en blanco y requiriendo que el cliente vuelva a introducir su email.


#### Simulación



1. Navegue hasta la página de pago en la que los clientes introducen su correo electrónico.
2. Poner un email nunca usado antes en la tienda.
3. Vaya al componente de perfil del cliente.
4. La casilla de correo electrónico estará vacía, y entonces tendrás que escribirlo de nuevo.

## Workaround


N/A



