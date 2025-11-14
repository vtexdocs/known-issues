---
title: 'La API del catálogo no responde correctamente a los espacios al final de las cadenas'
slug: la-api-del-catalogo-no-responde-correctamente-a-los-espacios-al-final-de-las-cadenas
status: PUBLISHED
createdAt: 2025-11-14T18:08:45.677Z
updatedAt: 2025-11-14T18:08:45.677Z
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


Cuando se utiliza la colección de API de catálogo, si se envía un campo JSON de cadena que termina con espacios (por ejemplo productName: "myProductName ") las API de catálogo responderán con una respuesta 400 incorrecta y un cuerpo de respuesta vacío, dejando al usuario sin saber qué se envió incorrectamente.

La respuesta correcta debería seguir siendo 400 (solicitud incorrecta) pero con un tratamiento de errores que informe de qué campo es incorrecto y por qué.


#### Simulación


Para cualquier API de catálogo (https://developers.vtex.com/docs/api-reference/catalog-api) inserte 1+ espacios vacíos al final de un campo de cadena, como se ejemplifica arriba.

## Workaround


n/a

Este tipo de cadena no debe aceptarse, pero debe ajustarse el tratamiento de errores.



