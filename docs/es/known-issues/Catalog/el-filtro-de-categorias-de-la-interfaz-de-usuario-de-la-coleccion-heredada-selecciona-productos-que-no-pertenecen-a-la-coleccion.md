---
title: 'El filtro de categorías de la interfaz de usuario de la colección heredada selecciona productos que no pertenecen a la colección'
slug: el-filtro-de-categorias-de-la-interfaz-de-usuario-de-la-coleccion-heredada-selecciona-productos-que-no-pertenecen-a-la-coleccion
status: PUBLISHED
createdAt: 2022-06-02T14:48:34.000Z
updatedAt: 2022-12-20T16:36:59.000Z
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

En última instancia, dependiendo del número de productos que haya dentro de una categoría, si seleccionamos los filtros de categorías en la interfaz de usuario (UI) de colecciones heredada, es posible que se muestren productos que no pertenecen a dichas categorías.

## Simulación

- Crea una colección utilizando la interfaz de usuario (UI) de colecciones heredada;
- Añade productos utilizando el filtro de categorías; las categorías deben contener un gran número de productos.
- En ocasiones, la colección puede contener productos que no pertenecen a esta categoría.

## Workaround

provisional**

- En la interfaz de usuario heredada de la colección, crea un filtro para eliminar la categoría de este producto.