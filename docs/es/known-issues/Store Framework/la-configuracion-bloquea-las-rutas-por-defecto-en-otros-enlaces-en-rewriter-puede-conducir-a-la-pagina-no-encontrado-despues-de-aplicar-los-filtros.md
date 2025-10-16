---
title: La configuración "Bloquea las rutas por defecto en otros enlaces" en Rewriter puede conducir a la página 'No encontrado' después de aplicar los filtros.
slug: la-configuracion-bloquea-las-rutas-por-defecto-en-otros-enlaces-en-rewriter-puede-conducir-a-la-pagina-no-encontrado-despues-de-aplicar-los-filtros
status: PUBLISHED
createdAt: 2025-10-16T20:35:22.849Z
updatedAt: 2025-10-16T20:35:22.849Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: configuration-blocks-default-routes-in-other-bindings-on-rewriter-can-lead-to-not-found-page-after-applying-filters
locale: es
kiStatus: Backlog
internalReference: 1175760
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Este problema sólo se produce en tiendas transfronterizas. Al aplicar determinados filtros en una página de búsqueda, la página se rompe y redirige a una página "No encontrado". El problema está causado por la configuración "Bloquea rutas predeterminadas en otros enlaces" en la aplicación Rewriter.


#### Simulación



1. Accede a la página de búsqueda de una tienda transfronteriza.
2. Aplicar uno o varios filtros específicos.
3. Observe que al intentar cargar los resultados, la página redirige a una página "No encontrado".

## Workaround


Estableciendo la propiedad `preventRouteChange` a `true` en el componente Resultado de Búsqueda se evita que ocurra el problema.



