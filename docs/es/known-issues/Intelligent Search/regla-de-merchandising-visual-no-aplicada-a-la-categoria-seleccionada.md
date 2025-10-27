---
title: 'Regla de merchandising visual no aplicada a la categoría seleccionada'
slug: regla-de-merchandising-visual-no-aplicada-a-la-categoria-seleccionada
status: PUBLISHED
createdAt: 2025-10-16T20:01:45.806Z
updatedAt: 2025-10-16T20:01:45.806Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rule-not-applied-to-the-selected-category
locale: es
kiStatus: Backlog
internalReference: 1157326
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las reglas de Visual Merchandising aplicadas a cualquier nivel de categoría que no sea el departamento (1er nivel), como categoría y subcategorías (2º y 3er nivel), no están funcionando.


#### Simulación



- crear una regla de visual merchandising
- aplicar un filtro único limitándolo a una categoría determinada
- seleccione algunos artículos para anclar u ocultar
- compruebe el escaparate para esta categoría; la regla no se aplicará

## Workaround


Declarar la ruta completa de la categoría evita el problema. Esto significa que para una subcategoría debe declarar sus niveles superiores (categoría y departamento).



