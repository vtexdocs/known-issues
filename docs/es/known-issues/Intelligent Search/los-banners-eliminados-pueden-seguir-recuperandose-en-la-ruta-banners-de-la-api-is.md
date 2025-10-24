---
title: 'Los banners eliminados pueden seguir recuperándose en la ruta Banners de la API IS'
slug: los-banners-eliminados-pueden-seguir-recuperandose-en-la-ruta-banners-de-la-api-is
status: PUBLISHED
createdAt: 2025-09-22T14:07:35.814Z
updatedAt: 2025-09-22T14:07:35.814Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banners-may-remain-retrievable-in-the-banners-route-of-is-api
locale: es
kiStatus: Backlog
internalReference: 1295586
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los banners eliminados pueden seguir recuperándose en la ruta Banners de la API de búsqueda inteligente, aunque no se recuperen en **Admin > Banners**.

## Simulación


Siga los pasos que se indican a continuación para simular la situación:

1. Ejecutar la ruta Obtener lista de banners registrados para consulta.
2. La ruta recupera los banners relacionados con una búsqueda/filtro.
3. En **Admin > Banners**, busque uno de los banners recuperados en la API.
4. La búsqueda de banners no devolverá ningún resultado.

## Workaround


Abra un ticket con el equipo de CX e incluya pruebas para solicitar la eliminación completa del banner.



