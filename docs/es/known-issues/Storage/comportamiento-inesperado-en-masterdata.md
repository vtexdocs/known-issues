---
title: 'Comportamiento inesperado en MasterData'
slug: comportamiento-inesperado-en-masterdata
status: PUBLISHED
createdAt: 2025-10-10T16:12:09.814Z
updatedAt: 2025-10-10T16:12:09.814Z
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


Incluso con datos disponibles (documentos), la información no se devuelve como se esperaba.
Este comportamiento puede afectar a algunas de las siguientes funcionalidades:

- Las imágenes en el Editor del Sitio (CMS) no están disponibles, debido mensaje de error "_Algo salió mal. Por favor, inténtelo de nuevo._";
- No es posible acceder a las entidades y sus documentos, debido mensaje de error "_Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia._";
- No se respeta el `_sort` en la API Buscar documentos;
- No se devuelve información al utilizar Search documents API (una respuesta vacía, como `[]`), aunque contengan documentos.


#### Simulación


Como se trata de un comportamiento ocasional (evento relacionado con el clúster), no se puede simular.

## Workaround


Una posible solución consiste en realizar el proceso descrito en la documentación pública "_Los formularios de clientes y direcciones no existen en los multialmacenes_".
Si el problema persiste, abra un ticket con el soporte de VTEX.


