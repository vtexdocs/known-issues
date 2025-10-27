---
title: 'Vista previa del envío que muestra un mensaje de no disponibilidad para la entrega'
slug: vista-previa-del-envio-que-muestra-un-mensaje-de-no-disponibilidad-para-la-entrega
status: PUBLISHED
createdAt: 2025-10-16T20:33:44.077Z
updatedAt: 2025-10-16T20:33:44.077Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-showing-unavailability-message-for-delivery
locale: es
kiStatus: Backlog
internalReference: 1170877
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La vista previa del envío en el carrito no tiene en cuenta el ANS seleccionado, a pesar de que la API de Checkout es correcta. Muestra el mensaje "Envío no disponible para su ubicación".

 ![](https://vtexhelp.zendesk.com/attachments/token/oKGiw0BqXd83twkctR84fT0Wc/?name=image.png)

Este comportamiento fue notado en países particulares, como Argentina y Colombia, pero no se limita a esos 2.


#### Simulación



- Añade un artículo al carrito;
- Escriba un código postal con el ANS disponible.

## Workaround


N/A - Al actualizar la página se mostrará el ANS.


