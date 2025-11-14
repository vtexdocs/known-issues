---
title: 'El filtro de categorías de la interfaz de usuario de la colección heredada selecciona productos erróneamente en la colección.'
slug: el-filtro-de-categorias-de-la-interfaz-de-usuario-de-la-coleccion-heredada-selecciona-productos-erroneamente-en-la-coleccion
status: PUBLISHED
createdAt: 2025-11-14T19:12:17.472Z
updatedAt: 2025-11-14T19:12:17.472Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
locale: es
kiStatus: Backlog
internalReference: 590934
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Eventualmente, dependiendo del número de productos que tengamos dentro de una categoría, si seleccionamos los filtros de categorías en la UI de la colección heredada, puede que nos devuelva productos que no pertenezcan a estas categorías.


#### Simulación



- Crear una colección utilizando la interfaz de colección heredada;
- Inserte productos utilizando el filtro de categorías, las categorías deben tener un gran número de productos.
- La colección a veces puede tener productos que no pertenecen a esta categoría.

## Workaround



- En la interfaz de usuario heredada de la colección, cree un filtro para eliminar la categoría de este producto.