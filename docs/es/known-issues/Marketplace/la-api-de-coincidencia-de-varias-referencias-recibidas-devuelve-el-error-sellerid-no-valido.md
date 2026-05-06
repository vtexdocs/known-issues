---
title: 'La API de coincidencia de varias referencias recibidas devuelve el error «sellerId no válido»'
slug: la-api-de-coincidencia-de-varias-referencias-recibidas-devuelve-el-error-sellerid-no-valido
status: PUBLISHED
createdAt: 2022-01-19T14:16:20.000Z
updatedAt: 2023-10-17T16:26:29.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: match-multiple-received-skus-api-returning-invalid-sellerid
locale: es
kiStatus: Fixed
internalReference: 506660
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API «Match Multiple Received SKUs» (documentación: https://developers.vtex.com/vtex-rest-api/reference/match-received-skus#matchmultiple) devuelve el mensaje de error «Invalid sellerId» cada vez que se intenta aprobar nuevos productos, incluso si el vendedor está correctamente activo en el marketplace.

## Simulación

1. Copie el comando curl de la documentación anterior;
2. Péguelo en su herramienta de API (Postman, Insomnia...);
3. Sustituya los valores del objeto por los datos del SKU que está intentando aprobar;
4. Compruebe si el sellerId está activo y es válido en la gestión de vendedores del marketplace;
5. La respuesta de la API no debería ser:

 "errorResponse": { "Code": 33, "Message": "Invalid sellerId" }

## Workaround

La API «Match Received SKUs individually» funciona correctamente y puede sustituir a la API anterior para aprobar nuevos productos uno por uno.