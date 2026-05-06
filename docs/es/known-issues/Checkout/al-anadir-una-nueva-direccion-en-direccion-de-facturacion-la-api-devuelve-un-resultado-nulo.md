---
title: 'Al añadir una nueva dirección en «Dirección de facturación», la API devuelve un resultado nulo'
slug: al-anadir-una-nueva-direccion-en-direccion-de-facturacion-la-api-devuelve-un-resultado-nulo
status: PUBLISHED
createdAt: 2023-02-07T13:15:23.000Z
updatedAt: 2023-02-07T13:15:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: adding-a-new-address-on-invoice-address-returns-null-api-results
locale: es
kiStatus: Backlog
internalReference: 748668
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando hay más de una dirección registrada en el sistema de perfiles, se envía una solicitud «nula» al servicio de códigos postales si se añade una nueva dirección en «Dirección de facturación».

## Simulación

- Tener más de una dirección registrada en el Sistema de Perfiles;
- Seleccionar un punto de recogida;
- Hacer clic en «Entregar en otra dirección» para añadir una nueva dirección en «Dirección de facturación» sin seleccionar ninguna otra opción.

La solicitud fue `/api/checkout/pub/postal-code/null/postalcodenumber`, por lo que devuelve el error 500. Debido a esta respuesta, no se autocompleta la dirección utilizando el servicio de códigos postales.

## Workaround

Seleccione una opción ya registrada antes de añadir una nueva dirección