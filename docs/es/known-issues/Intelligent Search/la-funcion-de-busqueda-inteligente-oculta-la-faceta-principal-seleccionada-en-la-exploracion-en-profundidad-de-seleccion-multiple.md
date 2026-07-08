---
title: 'La función de búsqueda inteligente oculta la faceta principal seleccionada en la exploración en profundidad de selección múltiple.'
slug: la-funcion-de-busqueda-inteligente-oculta-la-faceta-principal-seleccionada-en-la-exploracion-en-profundidad-de-seleccion-multiple
status: PUBLISHED
createdAt: 2026-07-08T21:55:44.000Z
updatedAt: 2026-07-08T21:55:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-facets-hides-selected-parent-facet-in-multiselect-drilldown
locale: es
kiStatus: Backlog
internalReference: 1432016
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar facetas de categoría de Búsqueda Inteligente, la respuesta de la faceta puede volverse inconsistente después de combinar varias selecciones del mismo nivel de categoría con una selección de subcategoría.

En este caso, las facetas de categoría principal seleccionadas que no estén relacionadas con la faceta de subcategoría seleccionada pueden dejar de aparecer en la respuesta de la API, aunque sigan aplicadas.

Al mismo tiempo, la respuesta de la faceta de subcategoría puede seguir mostrando valores inconsistentes con las facetas de categoría principal devueltas.

Como resultado, los filtros que se muestran al usuario pueden no coincidir con los filtros que se seleccionaron realmente, lo que puede dificultar la navegación y la eliminación de filtros.

## Simulación

En una tienda que usa facetas de categoría de Búsqueda Inteligente, seleccione varios valores del mismo nivel de categoría.

Luego, seleccione una faceta de subcategoría relacionada solo con una parte de la selección actual.

Después de eso, las facetas de categoría principal que no estén relacionadas con la faceta de subcategoría seleccionada pueden dejar de aparecer en la respuesta de la API, aunque sigan aplicadas.

Al mismo tiempo, la respuesta del faceta de la categoría secundaria puede seguir mostrando valores inconsistentes con los facetas de la categoría principal devueltos.

## Workaround

N/A