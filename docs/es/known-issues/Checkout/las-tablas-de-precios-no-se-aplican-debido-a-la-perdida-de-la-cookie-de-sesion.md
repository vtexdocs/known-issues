---
title: 'Las tablas de precios no se aplican debido a la pérdida de la cookie de sesión'
slug: las-tablas-de-precios-no-se-aplican-debido-a-la-perdida-de-la-cookie-de-sesion
status: PUBLISHED
createdAt: 2025-12-03T22:20:07.428Z
updatedAt: 2025-12-03T22:20:07.428Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: price-tables-are-not-applied-due-to-session-cookie-loss
locale: es
kiStatus: Backlog
internalReference: 1335123
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Cuando la cookie `vtex_session` se elimina de la navegación por cualquier motivo y luego se vuelve a crear, la interfaz de usuario nativa de Checkout puede iniciar las solicitudes de actualización de orderForm (como `/paymentData`) antes que la respuesta de `/api/sessions`, que es la ruta que realiza la renovación de la sesión.

Esto provoca que las solicitudes de actualización del formulario de pedido se envíen sin la cookie de sesión, lo que, a su vez, provoca que se devuelvan precios base en el formulario de pedido incluso después de que la cookie `vtex_session` se haya renovado con los valores correctos de `priceTables`.


#### Simulación



El comportamiento es intermitente, pero puede comprobarse con bastante frecuencia siguiendo estos pasos:

1) Autentícate con un usuario que sea elegible para tablas de precios específicas; Ve a `/checkout/#/cart` y observa que se muestra el precio correcto

2) Eliminar la cookie `vtex_session` de la navegación

3) Actualice el carrito y observe que el precio vuelve a ser el precio base, como era de esperar, ya que no hay cookie de sesión.

4) Actualizar; la cookie `vtex_session` se vuelve a crear con la información correcta de `priceTables`, pero los `prices` pueden seguir siendo incorrectos en el formulario de pedido incluso después de realizar una solicitud de actualización del formulario de pedido (como `/api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData`).

## Workaround



Cualquier solicitud adicional de actualización del formulario de pedido (como `/paymentData`, `/shippingData`, `/clientProfileData`, etc.) que se realice después de la creación de la nueva cookie utilizará la nueva cookie de sesión, devolviendo así el "precio" correcto para el contexto de esa sesión.


