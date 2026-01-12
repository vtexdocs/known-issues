---
title: 'Rutas personalizadas que faltan en el mapa del sitio para las subcuentas'
slug: rutas-personalizadas-que-faltan-en-el-mapa-del-sitio-para-las-subcuentas
status: PUBLISHED
createdAt: 2026-01-12T14:41:21.485Z
updatedAt: 2026-01-12T14:41:21.485Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: custom-routes-missing-from-sitemap-for-subaccounts
locale: es
kiStatus: Backlog
internalReference: 1349623
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Las rutas personalizadas se devuelven correctamente por el punto final de rutas personalizadas, pero no aparecen en el archivo sitemap.xml de la tienda. Las tiendas afectadas ven el archivo sitemap.xml generado sin las entradas de rutas personalizadas, incluso después de establecer disableSitemapEntry=false y regenerar el mapa del sitio. Esto está relacionado con el generador de mapas del sitio, que se basa en una ruta de identidad que no incluye las subcuentas.


#### Simulación

## Workaround

