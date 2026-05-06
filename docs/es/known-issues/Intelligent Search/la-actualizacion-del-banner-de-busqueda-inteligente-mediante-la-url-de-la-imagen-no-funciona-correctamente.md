---
title: 'La actualización del banner de búsqueda inteligente mediante la URL de la imagen no funciona correctamente'
slug: la-actualizacion-del-banner-de-busqueda-inteligente-mediante-la-url-de-la-imagen-no-funciona-correctamente
status: PUBLISHED
createdAt: 2023-01-17T14:33:14.000Z
updatedAt: 2023-09-06T22:34:45.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-banner-update-via-image-url-does-not-work-correctly
locale: es
kiStatus: Backlog
internalReference: 734833
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En Admin V4, en el módulo «Banners», el usuario tiene la posibilidad de crear o actualizar banners ya existentes. Al seleccionar un banner para actualizarlo, puede elegir entre utilizar un campo HTML o insertar un enlace directo a la imagen mediante una URL externa. Al optar por insertar el banner mediante un enlace directo a la imagen, se activa la consulta GraphQL, que actualmente no funciona correctamente, devolviendo un `syntaxError` y, en consecuencia, un error 500.

## Simulación

En una tienda con Admin V4, acceda al módulo Banners, dentro de Búsqueda;
Seleccione un banner creado previamente;
En Tipo, seleccione Imagen;
Rellene los campos de enlace;
Al hacer clic en Guardar, la pantalla mostrará un error de GraphQL;

## Workaround

provisional**
N/A