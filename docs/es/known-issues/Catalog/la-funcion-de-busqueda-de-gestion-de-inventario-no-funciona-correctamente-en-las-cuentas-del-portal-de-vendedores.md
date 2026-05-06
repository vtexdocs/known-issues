---
title: 'La función de búsqueda de gestión de inventario no funciona correctamente en las cuentas del portal de vendedores'
slug: la-funcion-de-busqueda-de-gestion-de-inventario-no-funciona-correctamente-en-las-cuentas-del-portal-de-vendedores
status: PUBLISHED
createdAt: 2022-11-08T18:54:46.000Z
updatedAt: 2023-02-24T18:21:10.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-management-search-not-working-properly-on-seller-portal-accounts
locale: es
kiStatus: Backlog
internalReference: 694254
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La búsqueda en la gestión de inventario no funciona como se esperaba en las cuentas del portal de vendedores. Esto ocurre porque este tipo de cuentas utilizan una versión diferente del catálogo.

El módulo de logística utiliza en esta interfaz de usuario una API de catalogV1.

Sin embargo, no disponemos de un proxy desde el catálogo del portal de vendedores a esta API en catalogV1.

La consecuencia es que, en ocasiones, los resultados que aparecen en el menú desplegable y en la lista de resultados pueden diferir si el cliente busca un término.

El problema no parece darse cuando se utilizan los ID de producto y SKU.

Otra consecuencia es que, si se utiliza el filtro, los nombres de los SKU de los productos no aparecen en la interfaz de usuario.

## Simulación

1. Busque un nombre de producto específico;
2. Compruebe si el menú desplegable muestra el producto;
3. Compruebe si el resultado de la búsqueda muestra el producto.

## Workaround

Realice la búsqueda por ID de producto e ID de SKU.