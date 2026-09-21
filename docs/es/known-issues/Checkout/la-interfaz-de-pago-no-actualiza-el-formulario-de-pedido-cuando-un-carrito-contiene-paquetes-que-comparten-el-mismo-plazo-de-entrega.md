---
title: 'La interfaz de pago no actualiza el formulario de pedido cuando un carrito contiene paquetes que comparten el mismo plazo de entrega.'
slug: la-interfaz-de-pago-no-actualiza-el-formulario-de-pedido-cuando-un-carrito-contiene-paquetes-que-comparten-el-mismo-plazo-de-entrega
status: PUBLISHED
createdAt: 2026-09-21T18:28:37.000Z
updatedAt: 2026-09-21T18:28:37.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-fails-to-update-orderform-when-a-cart-has-packages-that-share-the-same-delivery-window
locale: es
kiStatus: Backlog
internalReference: 1463913
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En carritos con más de un paquete de entrega programada, la ventana de entrega no se guarda para el segundo paquete cuando se selecciona la misma fecha y hora para ambos. El proceso de pago guarda la ventana solo para el primer paquete, dejando al segundo sin guardar.

Como resultado, el botón "Ir a pago" no responde, no se muestra ningún mensaje de error y no se envía ninguna solicitud a la API de pago. Aunque la interfaz de usuario muestra una ventana de entrega seleccionada para ambos paquetes, solo se guarda la del primero en el formulario de pedido.

Esto afecta a los carritos donde los artículos se dividen en dos paquetes, cada uno con su propia opción de entrega programada, como artículos enviados desde diferentes almacenes o con diferentes condiciones de entrega.

## Simulación

- Habilitar la entrega programada para dos SLA/métodos de envío.

- Agregar dos artículos al carrito; cada uno debe tener un método de envío diferente.

- Ir a la página `#/envío`.

- Seleccionar la misma fecha y hora de entrega programada para ambos paquetes.

- Intentar proceder al pago.

**Resultado esperado:** El comprador debería poder proceder al pago.

**Resultado real:** El comprador no puede proceder al pago.

## Workaround

**
Seleccione una franja horaria de entrega diferente para el segundo paquete y, a continuación, vuelva a seleccionar la franja horaria de entrega deseada.