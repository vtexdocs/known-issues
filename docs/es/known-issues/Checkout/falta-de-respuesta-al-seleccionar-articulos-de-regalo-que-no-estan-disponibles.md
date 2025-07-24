---
title: 'Falta de respuesta al seleccionar artículos de regalo que no están disponibles'
id: 2brpWqVbJLVoFlztAQPy3n
status: PUBLISHED
createdAt: 2022-09-30T16:40:09.600Z
updatedAt: 2022-11-25T21:49:21.033Z
publishedAt: 2022-11-25T21:49:21.033Z
firstPublishedAt: 2022-09-30T16:40:10.418Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lack-of-feedback-while-selecting-gift-items-that-arent-available
locale: es
kiStatus: Fixed
internalReference: 648767
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La selección de un artículo de regalo en el carrito que no tiene existencias no proporcionará ninguna respuesta. Después de seleccionar el regalo, se realizará la solicitud de la API, pero cuando responda, la selección del regalo se eliminará sin más.



## Simulación


- para registrar un nuevo artículo o actualizarlo para que no haya existencias
- para crear una promoción de regalo que ofrezca este artículo
- para crear un carrito en el que se ofrezca el artículo
- intentar seleccionar el regalo; la selección se eliminará sin ninguna respuesta



## Workaround


Asegúrese de que los artículos de regalo tienen una alta disponibilidad o un stock infinito, y evite ofrecer artículos que puedan dejar de estar disponibles como regalo.

