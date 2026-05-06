---
title: 'Dirección en el formulario de pedido con un tamaño excesivo para varias ciudades separadas por «::»'
slug: direccion-en-el-formulario-de-pedido-con-un-tamano-excesivo-para-varias-ciudades-separadas-por
status: PUBLISHED
createdAt: 2020-09-15T22:34:38.000Z
updatedAt: 2023-01-06T11:52:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-in-orderform-with-excessive-size-for-multiples-cities-separated-by
locale: es
kiStatus: Backlog
internalReference: 287854
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, la API de Checkout utiliza «::» como separador cuando el servicio de códigos postales ofrece varias opciones de ciudades, lo que provoca un error por exceso de tamaño en el campo de la dirección y afecta a la realización del pedido. Este comportamiento se debe a que la API cuenta con una función de autocompletado para la dirección

## Simulación

Tomando Argentina como ejemplo que cumple esta condición, al añadir el código postal 4427 a través de «vtexjs» o la API, se puede ver la dirección definida en el formulario de pedido separada por «::»

## Workaround

A través de la API: envía el parámetro `"clearAddressIfPostalCodeNotFound": false` en la solicitud para evitar que la dirección se autocomplete
A través de «vtexjs»: utiliza la función «sendAttachment()» en lugar de «calculateShipping()» para poder utilizar el parámetro mencionado anteriormente