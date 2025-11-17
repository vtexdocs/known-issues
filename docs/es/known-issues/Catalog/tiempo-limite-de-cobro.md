---
title: 'Tiempo límite de cobro'
slug: tiempo-limite-de-cobro
status: PUBLISHED
createdAt: 2025-11-17T17:31:30.808Z
updatedAt: 2025-11-17T17:31:30.808Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-timeout
locale: es
kiStatus: Fixed
internalReference: 434026
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


A menudo, al intentar guardar los datos de un grupo de colecciones utilizando la aplicación de colecciones, bajo la ruta /admin/a e intentando Guardar Grupo, el usuario, en casos de catálogos grandes (gran cantidad de categorías, marcas, productos), se encontrará con un mensaje de error de tiempo de espera y no podrá guardar sus cambios.

Esto también puede ocurrir con el módulo de nuevas colecciones.


#### Simulación


1) Vaya a la aplicación CMS UI con una tienda que tenga una base de catálogo grande, por ejemplo, >10000 productos.
2) Vaya a "Grupos de productos (Colecciones) y seleccione "_nuevo grupo_".
3) Cree un grupo y luego seleccione algunas casillas en el formulario
4) Intente guardar estos cambios
5) Si la solicitud tarda más de 50 segundos en guardarse, lo que suele ocurrir en cuentas con gran cantidad de datos, la solicitud se detendrá y los datos no se guardarán.

## Workaround


Utilizando nuestros puntos finales de la API de cobros: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, sin embargo, es importante tener en cuenta que en algunos casos, cuando hay una gran cantidad de datos que se actualizan, el tiempo de espera todavía puede ocurrir a través de la API.


