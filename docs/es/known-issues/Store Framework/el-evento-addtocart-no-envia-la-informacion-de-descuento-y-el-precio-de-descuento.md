---
title: 'El evento add_to_cart no envía la información de descuento y el precio de descuento'
slug: el-evento-addtocart-no-envia-la-informacion-de-descuento-y-el-precio-de-descuento
status: PUBLISHED
createdAt: 2025-12-09T17:54:12.187Z
updatedAt: 2025-12-09T17:54:12.187Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-event-doesnt-send-the-discount-info-and-the-discount-price
locale: es
kiStatus: Backlog
internalReference: 1337368
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando a un producto se le aplica una promoción, el evento add_to_cart debe enviar la información del descuento y el precio con el descuento. Esto está descrito en la documentación de GA4: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?utm_source=chatgpt.com&client_type=gtag#add_to_cart_item. Pero ahora mismo, nuestro evento add_to_Cart no lo hace.


#### Simulación


Intenta añadir un producto al carrito de tu tienda y mira el evento add_to_cart_event. No hay descuento en la respuesta, y el precio sigue siendo el precio completo.

## Workaround


N/A



