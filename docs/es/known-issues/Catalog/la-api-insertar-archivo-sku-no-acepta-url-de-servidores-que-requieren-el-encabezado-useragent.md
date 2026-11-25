---
title: 'La API Insertar archivo SKU no acepta URL de servidores que requieren el encabezado "User-Agent".'
slug: la-api-insertar-archivo-sku-no-acepta-url-de-servidores-que-requieren-el-encabezado-useragent
status: PUBLISHED
createdAt: 2024-07-22T22:48:57.000Z
updatedAt: 2026-11-25T19:29:01.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
locale: es
kiStatus: Fixed
internalReference: 1069222
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El **User-Agent** es una cadena de texto que un navegador web u otro cliente envía a un servidor web en la cabecera de una solicitud HTTP para identificarse. Esta cadena contiene información sobre el tipo de navegador, el sistema operativo y, en ocasiones, detalles adicionales como la versión del navegador y el motor de renderizado utilizado.

Los servidores, como los que alojan imágenes, suelen solicitar esta información como medida de seguridad, y esta puede transmitirse a través de la URL en el cuerpo de la solicitud de la API de inserción de archivos SKU.

Sin embargo, este tipo de autenticación no la envía actualmente el servidor VTEX al recopilar las imágenes para un SKU, por lo que los servidores de terceros podrían bloquear la solicitud.

## Simulación

1. Al usar la API de creación o actualización de archivos SKU (métodos de escritura) (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file), se pasa una URL con requisitos de agente de usuario del servidor para obtener datos.
2. Se mostrará una respuesta HTTP 4xx, ya sea un 400 genérico o un 403 más específico, según el tipo de respuesta implementado.

También es posible observar este comportamiento con herramientas como Postman enviando un encabezado "User-Agent" vacío en la solicitud.

## Workaround

Se puede optar por cargar el archivo mediante una hoja de cálculo o un formulario (usando las API) o deshabilitar los requisitos de agente de usuario en el servidor.