---
title: 'El banner eliminado puede seguir apareciendo en PLP'
slug: el-banner-eliminado-puede-seguir-apareciendo-en-plp
status: PUBLISHED
createdAt: 2025-09-22T17:22:07.437Z
updatedAt: 2025-09-22T17:22:07.437Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banner-may-still-appear-on-plp
locale: es
kiStatus: Backlog
internalReference: 1295586
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El banner eliminado puede seguir apareciendo en PLP y recuperarse en la ruta Banners de la API de búsqueda inteligente, aunque ya no aparezca en **Admin > Banners**.**

## Simulación


Siga los pasos que se indican a continuación para simular la situación:

1. Ejecute la ruta Obtener lista de banners registrados para consulta utilizando una búsqueda/filtro que coincida con el banner eliminado_._.
2. La ruta recupera el banner.
3. En **Admin > Banners**, busca el banner recuperado en la API.
4. La búsqueda del banner no devuelve ningún resultado.

## Workaround


Abra un ticket con el equipo CX e incluya pruebas para solicitar la eliminación completa del banner.



