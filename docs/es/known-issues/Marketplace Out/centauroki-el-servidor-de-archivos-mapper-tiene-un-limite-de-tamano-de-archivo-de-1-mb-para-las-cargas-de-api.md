---
title: 'CentauroKI El servidor de archivos Mapper tiene un límite de tamaño de archivo de 1 MB para las cargas de API.'
slug: centauroki-el-servidor-de-archivos-mapper-tiene-un-limite-de-tamano-de-archivo-de-1-mb-para-las-cargas-de-api
status: PUBLISHED
createdAt: 2026-09-10T23:30:29.000Z
updatedAt: 2026-09-10T23:30:41.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: centauroki-mapper-filer-have-1mb-file-size-limit-on-api-uploads
locale: es
kiStatus: Backlog
internalReference: 1459896
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La carga de una hoja de cálculo de mapeo de más de 1 MB falla debido a que una capa externa que se encuentra delante de las API de integración de VTEX la bloquea.

## Simulación

Intente cargar una hoja de cálculo de mapeo de Centauro de más de 1 MB (pestaña Variación/Especificación o pestaña Flete) a través de Administración > Configuración del Marketplace > Centauro, o directamente mediante el punto final de la API de mapeo de la integración. La solicitud es rechazada por la capa de validación externa debido al tamaño del archivo (> 1 MB).

## Workaround

Realice una única carga de una hoja de cálculo de menos de 1 MB (reduzca el contenido del archivo; no lo divida en varias cargas).