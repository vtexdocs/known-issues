---
title: 'Los regalos adicionales permanecen en el carrito cuando el artículo principal supera las existencias disponibles'
slug: los-regalos-adicionales-permanecen-en-el-carrito-cuando-el-articulo-principal-supera-las-existencias-disponibles
status: PUBLISHED
createdAt: 2026-05-09T00:29:32.000Z
updatedAt: 2026-05-09T00:29:32.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: extra-gifts-remain-in-cart-when-main-item-exceeds-available-stock
locale: es
kiStatus: Backlog
internalReference: 1404248
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un comprador añade una cantidad de una referencia (SKU) que da derecho a un regalo y que supera el stock disponible, el proceso de pago añade inicialmente los regalos para la cantidad total solicitada, pero solo se conserva la cantidad en stock del artículo principal. Como resultado, en el formulario de pedido quedan artículos de regalo adicionales más allá de lo que justifica la cantidad final del artículo principal.

Los casos afectados incluyen promociones de regalo configuradas como «1 regalo por artículo elegible».

## Simulación

- Requisitos previos:
  - Una promoción de regalo que añada 1 SKU de regalo por unidad de un SKU principal elegible.
  - El SKU principal elegible debe tener disponibilidad limitada (por ejemplo, stock total disponible = 3).

- Pasos:
  - Crea un nuevo carrito (a través de la interfaz de usuario de Checkout o de la API Create New Cart (`forceNewCart=true`)).
  - Añade una cantidad del SKU principal elegible superior a su stock disponible (por ejemplo, solicita 5 unidades cuando solo hay 3).
  - Observe que Checkout añade regalos que coinciden con la cantidad solicitada (por ejemplo, 5 unidades de regalo) al orderForm, aunque solo persista una parte del artículo principal (por ejemplo, 3 unidades). Los regalos adicionales permanecen hasta que se realice otra acción que active el pipeline.

## Workaround

Realice otra actualización del formulario de pedido que active el proceso de pago, como enviar `/clientProfileData` o `/shippingData`, para eliminar los regalos adicionales. Dado que las nuevas solicitudes que activan el proceso siempre eliminan los regalos adicionales y que la propia solicitud de realizar el pedido activa el proceso, no es posible realizar un pedido con los regalos adicionales.