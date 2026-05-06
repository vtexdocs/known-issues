---
title: 'Algunos comportamientos inesperados en MasterData'
slug: algunos-comportamientos-inesperados-en-masterdata
status: PUBLISHED
createdAt: 2022-09-30T16:55:02.000Z
updatedAt: 2025-10-10T19:11:34.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: some-unexpected-behavior-in-masterdata
locale: es
kiStatus: Backlog
internalReference: 669048
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Aunque hay datos disponibles (documentos), la información no se muestra como se esperaba.
Este comportamiento puede afectar a algunas de las siguientes funcionalidades:

- Las imágenes del Editor del sitio (CMS) no están disponibles, y aparece el mensaje de error «_Ha surgido un error. Inténtalo de nuevo._»;
- No es posible acceder a las entidades y sus documentos debido al mensaje de error «_Se ha producido un error inesperado. Inténtalo de nuevo. Si el problema persiste, ponte en contacto con el servicio de asistencia._»;
- No se respeta el `_sort` en la API de búsqueda de documentos;
- No se devuelve información al utilizar la API de búsqueda de documentos (una respuesta vacía, como `[]`), incluso cuando contienen documentos.

## Simulación

Dado que se trata de un comportamiento ocasional (evento relacionado con el clúster), no se puede simular.

## Workaround

Una posible solución alternativa es seguir el proceso descrito en la documentación pública «_Los formularios de cliente y dirección no existen en multistores_».
Si el problema persiste, abre un ticket con el servicio de asistencia de VTEX.