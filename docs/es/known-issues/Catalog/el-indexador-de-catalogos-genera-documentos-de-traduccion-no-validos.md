---
title: El indexador de catálogos genera documentos de traducción no válidos
slug: el-indexador-de-catalogos-genera-documentos-de-traduccion-no-validos
status: PUBLISHED
createdAt: 2025-07-23T22:24:35.255Z
updatedAt: 2025-07-23T22:24:35.255Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexer-generating-invalid-translation-documents
locale: es
kiStatus: No Fix
internalReference: 991494
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se indexa un producto con información traducida, se consulta la aplicación Mensajes. Se supone que estas peticiones deben durar menos de 3s, y cuando tardan más, la indexación falla y genera un documento de traducción no válido.

Este escenario generará errores en el historial de indexación con el mensaje "translations is smaller than context".


#### Simulación


No hay una manera fácil de reproducir este escenario, pero las cuentas con muchos idiomas o muchos campos para traducir son más susceptibles a este escenario.

## Workaround


N/A

