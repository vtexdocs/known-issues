---
title: 'Al pegar el código postal en la vista previa de envío del carrito, a veces se obtiene un resultado nulo de la API'
slug: al-pegar-el-codigo-postal-en-la-vista-previa-de-envio-del-carrito-a-veces-se-obtiene-un-resultado-nulo-de-la-api
status: PUBLISHED
createdAt: 2021-12-06T14:26:24.000Z
updatedAt: 2024-05-21T13:03:13.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pasting-postal-code-in-shipping-preview-cart-sometimes-returns-null-api-result
locale: es
kiStatus: Backlog
internalReference: 481878
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras introducir el código postal una vez en la vista previa del envío y seleccionar pegarlo de nuevo, en ocasiones se envía una solicitud nula a la API de códigos postales.

La solicitud es `/api/checkout/pub/postal-code/null/postalcodenumber` y devuelve un error 500.

## Simulación

- Ve al carrito y añade un código postal;
- Haz clic para cambiarlo y pega otro código postal (o incluso el mismo);
- Ve al paso de envío y es posible que la dirección esté incompleta.

## Workaround

provisional**
El usuario deberá hacer clic en el botón «Calcular» o pulsar la tecla Intro; en algunos casos, escribir el código postal sin introducirlo.