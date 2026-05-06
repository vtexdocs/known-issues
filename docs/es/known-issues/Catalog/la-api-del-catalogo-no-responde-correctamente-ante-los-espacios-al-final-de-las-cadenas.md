---
title: 'La API del catálogo no responde correctamente ante los espacios al final de las cadenas'
slug: la-api-del-catalogo-no-responde-correctamente-ante-los-espacios-al-final-de-las-cadenas
status: PUBLISHED
createdAt: 2024-02-05T16:49:18.000Z
updatedAt: 2024-02-05T16:49:18.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-api-doesnt-respond-properly-to-space-at-the-end-of-strings
locale: es
kiStatus: Backlog
internalReference: 977033
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar la colección de la API del catálogo, si se envía un campo JSON de tipo cadena que termina con espacios (por ejemplo, productName: "myProductName    "), las API del catálogo responderán con un código de error 400 incorrecto y un cuerpo de respuesta vacío, lo que deja al usuario sin saber qué es lo que se ha enviado incorrectamente.

La respuesta correcta debería seguir siendo un 400 (solicitud incorrecta), pero con un mensaje de error que indique qué campo es incorrecto y por qué.

## Simulación

Para cualquier API del catálogo (https://developers.vtex.com/docs/api-reference/catalog-api), inserte uno o más espacios en blanco al final de un campo de cadena, tal y como se ejemplifica arriba.

## Workaround

provisional**
N/A

Este tipo de cadena no debería aceptarse, pero es necesario ajustar el manejo de errores.