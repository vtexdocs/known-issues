---
title: 'Las normas del merchandising visual se han extrapolado erróneamente a contextos más amplios'
slug: las-normas-del-merchandising-visual-se-han-extrapolado-erroneamente-a-contextos-mas-amplios
status: PUBLISHED
createdAt: 2024-09-14T01:19:19.000Z
updatedAt: 2026-05-29T19:26:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extended-to-broader-contexts
locale: es
kiStatus: Fixed
internalReference: 1098688
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las reglas de merchandising visual se establecen para contextos específicos mediante la definición de filtros por atributos o términos de búsqueda, pero los filtros no se limitan a su contexto exclusivo, lo que genera resultados de búsqueda inesperados y entra en conflicto con diferentes reglas de merchandising de otras páginas.

A modo de contexto, los productos fijados y ocultos realizan la misma acción que las acciones de «promocionar» y «eliminar por ID» de una regla de merchandising manual.

El ejemplo más sencillo es que, al configurarlo para una categoría, también se aplicarán modificadores a sus subcategorías.

## Simulación

- Consideremos el árbol de categorías «ropa > niños > camiseta».
- Creemos una regla de merchandising visual para ordenar manualmente (fijar) algunos artículos tanto en la categoría «niños» como en la subcategoría «camiseta».
- La subcategoría «camisetas» no aplicará la clasificación esperada correctamente, ya que estará bajo la influencia de la regla de merchandising de la categoría «niños».

## Workaround

Es posible crear el mismo tipo de regla a través del editor manual, donde puedes configurar la opción «desencadenante exclusivo», evitando por completo el solapamiento entre diferentes reglas.