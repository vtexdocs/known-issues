---
title: 'El carrito no se actualiza en FastStore si se realiza una solicitud externa para actualizar el formulario de pedido.'
slug: el-carrito-no-se-actualiza-en-faststore-si-se-realiza-una-solicitud-externa-para-actualizar-el-formulario-de-pedido
status: PUBLISHED
createdAt: 2026-02-20T20:57:56.788Z
updatedAt: 2026-02-20T20:57:56.788Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: cart-does-not-update-in-faststore-if-external-request-is-made-to-update-orderform
locale: es
kiStatus: Backlog
internalReference: 1127034
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El carrito FastStore se crea/actualiza mediante _ValidateCartMutation_. Si se produce una solicitud externa que actualiza/complementa/enriquece el carrito, como `POST /attachments/marketingData`, el carrito pierde su referencia y no es posible añadir otro producto en el primer intento. Las llamadas externas que cambian el formulario de pedido pueden dejar el carrito obsoleto, lo que significa que los artículos del carrito han cambiado fuera del flujo estándar del cliente en la tienda y ya no tienen el mismo estado que el cliente ha almacenado en el navegador. Cuando esto ocurre, se ignora la primera solicitud _validateCartMutation_ (por ejemplo, el cliente que añade otro producto) y, a continuación, se devuelve la versión actual del formulario de pedido, y este nuevo producto no se añade al carrito. Hemos observado que este comportamiento se produce tanto en la v2 como en la v3 del paquete `@faststore/api`.

## Simulación

Puede validar este comportamiento realizando las siguientes solicitudes:

1. Añada un producto al carrito mediante `POST ValidateCartMutation`; 2. Añada datos de marketing mediante `POST api/checkout/pub/orderForm/{{id}}/attachments/marketingData`; 3. Añada otro producto al carrito mediante `POST ValidateCartMutation`. Cuando añada el segundo artículo al carrito, no se añadirá. Tendrá que volver a añadirlo.

PD: Es importante señalar que «marketingData» es solo un ejemplo; este KI puede ocurrir con cualquier solicitud externa que se realice para actualizar el formulario de pedido.

## Workaround

Después de cada solicitud que actualice el carrito (paso 2 del ejemplo anterior), será necesario recuperar la información actual del carrito y actualizarla, tal y como sugiere la implementación siguiente:

    await axios.post('/api/marketingdata', payload)// actualizar el almacén del carrito const updatedCart = cartStore.read() cartStore.set(updatedCart) Esto garantizará que el carrito esté actualizado, de modo que cuando el cliente añada más productos, el carrito contenga información actualizada. %0A