---
title: 'La interfaz de pago no muestra un mensaje de error cuando un usuario con el perfil completo activa la opción de que el regalo no está disponible'
slug: la-interfaz-de-pago-no-muestra-un-mensaje-de-error-cuando-un-usuario-con-el-perfil-completo-activa-la-opcion-de-que-el-regalo-no-esta-disponible
status: PUBLISHED
createdAt: 2026-03-19T17:41:23.148Z
updatedAt: 2026-03-19T17:41:23.148Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-does-not-display-an-error-message-when-user-with-complete-profile-triggers-gift-unavailability
locale: es
kiStatus: Backlog
internalReference: 1381105
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un carrito incluye un artículo de regalo y se carga un perfil completo del comprador con una dirección que no cuenta con un SLA para dicho regalo, el artículo de regalo se elimina del carrito sin previo aviso. La interfaz de usuario no muestra ningún mensaje de error, aunque el mensaje sí esté presente en la API `orderForm`.

## Simulación

El problema se produce durante el paso **/shipping** en la interfaz de pago cuando se carga un perfil completo del comprador y el artículo de regalo no tiene un SLA válido o inventario disponible para la región del usuario.


- Asegúrate de que la promoción de regalo esté activa
- Confirma que el artículo de regalo no tenga un SLA para la dirección del usuario
- Crea un carrito que active la promoción de regalo
- Selecciona el regalo y ve directamente a la página de perfil (no introduzcas la dirección en la página `/cart`).
- Introduce un correo electrónico asociado a un perfil de comprador completo

## Workaround

N/A