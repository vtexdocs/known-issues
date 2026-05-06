---
title: 'El correo electrónico no se rellena automáticamente para los nuevos usuarios en la interfaz de pago'
slug: el-correo-electronico-no-se-rellena-automaticamente-para-los-nuevos-usuarios-en-la-interfaz-de-pago
status: PUBLISHED
createdAt: 2023-08-25T00:24:50.000Z
updatedAt: 2023-08-25T15:27:32.000Z
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

Cuando un nuevo usuario introduce una nueva dirección de correo electrónico en el paso correspondiente y pasa a la página siguiente, en el componente de datos del cliente, el campo de correo electrónico no se rellena automáticamente.
Esto se debe a que no hay ningún usuario registrado con esa dirección de correo electrónico. Como resultado, el `orderForm` cargado también contiene un campo de correo electrónico vacío, lo que hace que permanezca en blanco y obliga al cliente a volver a introducir su dirección de correo electrónico.

## Simulación

1. Ve a la página de pago donde los clientes introducen su correo electrónico.
2. Introduce un correo electrónico que nunca se haya utilizado antes en la tienda.
3. Ve al componente de perfil del cliente.
4. El campo de correo electrónico estará vacío, por lo que tendrás que volver a escribirlo.

## Workaround

N/A