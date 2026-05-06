---
title: 'API de pago: gestionar los comportamientos anómalos de los artículos del carrito al enviar «archivos adjuntos» para artículos ya añadidos'
slug: api-de-pago-gestionar-los-comportamientos-anomalos-de-los-articulos-del-carrito-al-enviar-archivos-adjuntos-para-articulos-ya-anadidos
status: PUBLISHED
createdAt: 2021-10-18T21:23:00.000Z
updatedAt: 2023-10-11T18:20:50.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-api-handle-cart-items-misbehaviors-when-sending-attachments-for-already-added-items
locale: es
kiStatus: Fixed
internalReference: 452053
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar la API de checkout para gestionar los artículos del carrito, si un artículo ya se ha añadido sin «_attachments_» y se intenta incluirlo de nuevo, esta vez con «_attachments_», no funcionará correctamente ni se registrará nada.

El «_checkout-graphql»_ utiliza esta API para resolver mutaciones, por lo que utilizar la mutación «_addToCart»_ en un carrito en el que ya se ha añadido un artículo determinado sin «_options_», e intentar incluirlo de nuevo con «_options_», tampoco funcionará correctamente. La mutación no registrará las «_options_» enviadas y también devolverá un error si están relacionadas con la información de «_subscription_».

En este contexto, la propiedad «_options_» se utiliza para declarar «_assemblyOptions_», tanto para «_composition_» como para «_inputValues_», que también se utiliza en lugar de «_itemAttachments_» y para incluir «_subscriptionsData_».

Comportamientos actuales:
- _addToCart_ **sin** enviar «_options_» a un artículo ya añadido **y también sin** «_options_» actualizará su cantidad **a** el número indicado
- _addToCart_ con o sin enviar «_options_» a un artículo ya añadido **con** «_options_» funcionará para incluir artículos **nuevos**/repetidos con la cantidad indicada

Dónde se produce el problema:
- _addToCart_ enviando «options» a un artículo ya añadido sin «options»

El «_options_» no se registrará (ni se actualizará ni funcionará como un nuevo artículo) en el orderForm. Aun así, sí que actualizará la cantidad del artículo ya añadido, de la misma forma que el primer comportamiento descrito.

El peor escenario se produce si se envía una «_option_» relacionada con la información de suscripción. La mutación «_addToCart_» tiene una acción encadenada para actualizar la sección «_subscriptionsData_» del formulario de pedido con la información de esta «_option_», y en este caso fallará, devolviendo errores para la operación, pero también realizando la acción anterior, que actualiza la cantidad.

Cabe señalar que la mutación «_updateItems»_ no sirve para añadir artículos ni para añadir o eliminar «_options_» a un artículo ya añadido.

## Simulación

Considerando esta mutación:

 mutation ($orderFormId: ID, $items: [ItemInput]) {  addToCart(orderFormId: $orderFormId, items: $items) {    ...  }}


La primera solicitud, que funciona bien:

 {  "items": [    { "id": 123, "quantity": 1, "seller": "1"    } ]}


La segunda solicitud, que incluye el mismo artículo pero con información de suscripción:

 {  "items": [    { "id": 123, "index": 0, "quantity": 1, "seller": "1", "options": [        { "assemblyId": "vtex.subscription", "inputValues": { "vtex.subscription.key.frequency": "1 month" } }     ]    }  ]}

La respuesta:

 {  "data": null,  "errors": [    { "message": "Solicitud fallida con código de estado 400", ... "response": { "data": {              "Fields": {}, "operationId": "acdb9ef5-59dc-49a7-9d79-d3fb895d81fe", "error": { "code": "1",                "message": "Suscripción no válida", "exception": null } }, ...    } ]}

## Workaround

N/A


%0A