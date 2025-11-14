---
title: 'Añadir una nueva dirección en Dirección de factura devuelve resultados nulos de la API'
slug: anadir-una-nueva-direccion-en-direccion-de-factura-devuelve-resultados-nulos-de-la-api
status: PUBLISHED
createdAt: 2025-11-14T19:15:51.437Z
updatedAt: 2025-11-14T19:15:51.437Z
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


Cuando hay más de una dirección registrada en el Sistema de Perfiles, se produce una petición "nula" al servicio de código postal si se añade una nueva dirección en "Dirección de Facturación".


#### Simulación



- Tener más de 1 dirección registrada en el Sistema de Perfiles;
- Seleccione un punto de recogida;
- Haga clic en "Entregar en otra dirección" para añadir una nueva dirección en "Dirección de facturación" sin seleccionar ninguna otra opción.

La solicitud era `/api/checkout/pub/postal-code/null/postalcodenumber`, por lo que devuelve el error 500. Debido a este retorno, no autocompleta la dirección utilizando el servicio de código postal.

## Workaround


Seleccione una opción ya registrada antes de añadir una nueva dirección


