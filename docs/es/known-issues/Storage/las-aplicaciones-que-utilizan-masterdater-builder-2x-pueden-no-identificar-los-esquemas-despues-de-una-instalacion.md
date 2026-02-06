---
title: 'Las aplicaciones que utilizan Masterdater Builder 2.x pueden no identificar los esquemas después de una instalación.'
slug: las-aplicaciones-que-utilizan-masterdater-builder-2x-pueden-no-identificar-los-esquemas-despues-de-una-instalacion
status: PUBLISHED
createdAt: 2026-02-06T20:06:21.443Z
updatedAt: 2026-02-06T20:06:21.443Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: apps-using-masterdater-builder-2x-may-fail-to-identify-schemas-after-a-install
locale: es
kiStatus: Backlog
internalReference: 1361652
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Algunas aplicaciones creadas con Master Data build 2.x pueden experimentar errores de tiempo de ejecución inmediatamente después de instalarse en una cuenta en la que no se han instalado previamente (instalación nueva). La asociación automática entre la versión de la aplicación instalada y su definición de datos (esquema) falla. Como resultado, el sistema no puede localizar la estructura necesaria para guardar o leer información, y devuelve el error «No se ha encontrado ningún esquema asociado».


#### Simulación

## Workaround

