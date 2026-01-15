---
title: 'La generación del mapa del sitio no respeta el indicador disableSitemapEntry.'
slug: la-generacion-del-mapa-del-sitio-no-respeta-el-indicador-disablesitemapentry
status: PUBLISHED
createdAt: 2026-01-15T19:42:48.360Z
updatedAt: 2026-01-15T19:42:48.360Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: disablesitemapentry-flag-not-respected-by-sitemap-generation
locale: es
kiStatus: Backlog
internalReference: 1351681
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Establecer disableSitemapEntry: true en rutas internas no impide que dichas rutas se incluyan en el mapa del sitio generado. Los comerciantes afectados ven que las rutas desactivadas siguen apareciendo en los mapas del sitio de marca/categoría/producto incluso después de intentar regenerar el mapa del sitio. Esto afecta a las tiendas que utilizan el canal de mapas del sitio unificado para Store Framework, FastStore o legacy, especialmente cuando se intenta desindexar rutas específicas.


#### Simulación

## Workaround

