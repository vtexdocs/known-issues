---
title: 'La API de inserción de archivos SKU no acepta URL de servidores que requieran el encabezado "User-Agent".'
slug: la-api-de-insercion-de-archivos-sku-no-acepta-url-de-servidores-que-requieran-el-encabezado-useragent
status: PUBLISHED
createdAt: 2025-08-12T18:56:39.312Z
updatedAt: 2025-08-12T18:56:39.312Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
locale: es
kiStatus: Backlog
internalReference: 1069222
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El **User-Agent** es una cadena de texto que un navegador web u otro cliente envía a un servidor web en una cabecera de petición HTTP para identificarse. Esta cadena contiene información sobre el tipo de navegador, sistema operativo, y a veces detalles adicionales como la versión del navegador y el motor de renderizado utilizado.

A menudo se solicita como medida de seguridad por parte de servidores, como los que alojan imágenes, que pueden pasarse a través de una URL en el cuerpo de la solicitud de la API de inserción de archivos SKU.

Este tipo de autenticación, sin embargo, no es enviada actualmente por el servidor VTEX mientras recopila las imágenes para un SKU, por lo que los servidores de terceros pueden bloquear la solicitud.



#### Simulación



1. Utilizando la API de archivos SKU Create o Update (métodos de escritura) (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file), pasando una URL que tiene requisitos de agente de usuario del lado del servidor para obtener datos.
2. 2. Se mostrará una respuesta HTTP de tipo 4xx, ya sea una genérica 400 o una más específica 403, dependiendo del tipo de respuesta implementada.

También es posible que esto ocurra a través de herramientas como Postman, enviando una cabecera "User-Agent" vacía en la petición.


## Workaround


O bien optar por la carga de archivos a través de hoja de cálculo, formulario de datos (utilizando las API) o desactivar los requisitos de usuario-agente en el lado del servidor.



