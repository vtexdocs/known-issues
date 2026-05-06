---
title: 'La función de autocompletado de la búsqueda ofrece una URL obsoleta tras navegar por las sugerencias'
slug: la-funcion-de-autocompletado-de-la-busqueda-ofrece-una-url-obsoleta-tras-navegar-por-las-sugerencias
status: PUBLISHED
createdAt: 2024-01-19T01:27:19.000Z
updatedAt: 2024-01-19T01:27:19.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-autocomplete-providing-outdated-url-after-navigating-through-suggestions
locale: es
kiStatus: Backlog
internalReference: 968604
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el componente «search-bar» con «autocomplete-result-list.v2», al pasar el cursor por encima de las sugerencias de búsqueda, también cambian los productos sugeridos y el texto de «ver todos los {n} productos» para mencionar la búsqueda seleccionada; sin embargo, el hipervínculo de «ver todos» sigue el término de búsqueda original en lugar del seleccionado.

## Simulación

- Busca un término parcial
- Pasa el ratón por encima de los términos sugeridos
- Haz clic en «Ver todos los productos»

## Workaround

provisional**
N/A