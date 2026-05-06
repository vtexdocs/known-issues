---
title: 'Texto mal formateado en los títulos de búsqueda y las rutas de navegación en determinados casos relacionados con las reglas de merchandising'
slug: texto-mal-formateado-en-los-titulos-de-busqueda-y-las-rutas-de-navegacion-en-determinados-casos-relacionados-con-las-reglas-de-merchandising
status: PUBLISHED
createdAt: 2024-03-13T20:52:16.000Z
updatedAt: 2024-03-13T20:52:16.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: badly-formatted-text-for-search-titles-and-breadcrumbs-in-specific-scenarios-with-merchandising-rules
locale: es
kiStatus: Backlog
internalReference: 999476
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas páginas de resultados de búsqueda ocultan los filtros aplicados —ya que forman parte de la propia página, por lo que se configuran como «initialAttributes»— para centrarse en los filtros adicionales que se pueden aplicar. En estos casos, los valores del título de la página y de la ruta de navegación vienen determinados básicamente por el primer producto de la página.

Las reglas de merchandising que colocan productos de diferentes contextos en las primeras posiciones de una página afectan a esta cadena. Cuando los «initialAttributes» de la página no coinciden con ninguno de los atributos del primer producto, como alternativa, estos textos se definen mediante el slug: un texto simplificado sin mayúsculas, diacríticos ni ningún otro carácter especial.

Ten en cuenta que este tipo de regla de merchandising puede ser una mala práctica.

## Simulación

- Considera una categoría con el árbol «Alimentación > Frutas > Manzanas y peras», que se traduce como «Maçãs e Peras» en portugués (por lo que tenemos diacríticos/acentos para un mejor ejemplo);
- Añada un producto de un árbol de categorías diferente mediante una regla de merchandising, como un cortador de la categoría «Cocina > Accesorios > Cortadores» a la categoría «Alimentación > Frutas»;
- Como el primer producto de la categoría «Manzanas y peras» será este cortador, el título de la página y la ruta de navegación se mostrarán como «Macas E Peras».

## Workaround

N/A