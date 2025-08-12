---
title: Las especificaciones del producto/SKU tienen prioridad sobre el título de la página
slug: las-especificaciones-del-productosku-tienen-prioridad-sobre-el-titulo-de-la-pagina
status: PUBLISHED
createdAt: 2025-08-12T18:37:48.045Z
updatedAt: 2025-08-12T18:37:48.045Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productsku-specifications-taking-priority-on-the-page-title
locale: es
kiStatus: Backlog
internalReference: 1089440
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Se espera que el título de la página se base en los últimos o iniciales filtros. Los filtros de las especificaciones del producto/SKU siempre se establecen como el último de la miga de pan, que tiene lugar como el título de la página.

En los casos de búsqueda de texto completo, el valor de especificación que sea alfabéticamente menor que el término buscado, pero el más cercano a este término buscado, tendrá prioridad como título. Por ejemplo, si busca `jeans` y filtra por `size=G` y luego `material=Chiffon`, la talla G tendrá prioridad como título de la página.


#### Simulación


Al navegar por una página como "/summer-2024?map=productclusternames" y aplicar cualquier filtro que no sea una especificación SKU, el título de la página seguirá siendo "Summer 2024", pero un filtro como "size=M" tendrá prioridad y el título se mostrará como "M".

## Workaround


N/A


