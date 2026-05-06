---
title: '«Se ha producido un error» al añadir una dirección incompleta e intentar editarla'
slug: se-ha-producido-un-error-al-anadir-una-direccion-incompleta-e-intentar-editarla
status: PUBLISHED
createdAt: 2024-01-02T21:10:59.000Z
updatedAt: 2024-01-02T21:10:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: something-went-wrong-when-adding-an-incomplete-address-and-tried-to-edit-it
locale: es
kiStatus: Backlog
internalReference: 960064
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de pago con un usuario que tiene un perfil completo, en el paso de introducir los datos de envío, al hacer clic en la opción «Entregar en otra dirección», si solo se añade el código postal y el usuario vuelve a la lista de direcciones (mediante el botón «Volver a la libreta de direcciones») y hace clic en «Actualizar la información de la dirección seleccionada», se produce un error con el mensaje «Ha surgido un problema».

## Simulación

- Añade artículos al carrito y utiliza un correo electrónico con un perfil completo;
- Durante la fase de pago, al rellenar los datos de envío, haz clic en «Entregar en otra dirección»;
- Añade un código postal y vuelve a los datos de envío haciendo clic en el botón «Volver a la lista de direcciones»;
- Haz clic en «Actualizar la información de la dirección seleccionada».

## Workaround

- Actualice la página si aparece el error.