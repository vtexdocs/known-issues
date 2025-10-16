---
title: La navegación por las especificaciones del árbol de categorías puede devolver datos incorrectos
slug: la-navegacion-por-las-especificaciones-del-arbol-de-categorias-puede-devolver-datos-incorrectos
status: PUBLISHED
createdAt: 2025-10-16T20:36:30.149Z
updatedAt: 2025-10-16T20:36:30.149Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: category-trees-specification-navigation-can-return-incorrect-data
locale: es
kiStatus: Backlog
internalReference: 1179682
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, cuando se navega por el árbol de categorías, si un usuario navega a "Campo (SKU)" y luego a "Valores" para una especificación y luego vuelve a la vista del árbol de categorías haciendo clic en el enlace de migas de pan:

 ![](https://vtexhelp.zendesk.com/attachments/token/qtPOrJ9QkBSTLEALtov7At2nI/?name=image.png)

y, a continuación, vuelve al mismo formulario de especificación, los valores de especificación enumerados anteriormente ya no aparecerán.


#### Simulación


1 - En el árbol de categorías, vaya a cualquier categoría con grupos y campos registrados, luego haga clic con el botón derecho y acceda a la opción "Campos (SKU)"

2 - En la lista de campos SKU, busque un campo de especificación que tenga valores de especificación para él.

3 - Haga clic en la opción "Valores" y aparecerán listados

4 - A continuación, en el breadcrumb, haga clic en el enlace "Categorías".

5 - Repita los pasos 1 a 3, los mismos campos no se mostrarán de nuevo, como si no estuvieran presentes en el catálogo.

## Workaround


Gestionar los valores de especificación mediante API u hoja de cálculo

Y/o

Si le ocurre lo mismo, cierre la sesión o borre las cookies del navegador para restablecer la caché.



