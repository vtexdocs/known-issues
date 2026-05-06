---
title: 'Tiempo de espera de las colecciones'
slug: tiempo-de-espera-de-las-colecciones
status: PUBLISHED
createdAt: 2021-09-21T16:52:29.000Z
updatedAt: 2025-10-02T22:53:23.000Z
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

A menudo, al intentar guardar datos de un grupo de colecciones mediante la aplicación de colecciones, en la ruta /admin/a, y al intentar «Guardar grupo», el usuario, en el caso de catálogos de gran tamaño (con un gran número de categorías, marcas y productos), se encuentra con un mensaje de error por tiempo de espera agotado y no puede guardar los cambios.

Esto también puede ocurrir con el nuevo módulo de colecciones.

## Simulación

1) Acceda a la aplicación de la interfaz de usuario del CMS utilizando una tienda que tenga una base de catálogo grande, por ejemplo, >10 000 productos.
2) Vaya a «Grupos de productos (Colecciones)» y seleccione «_nuevo grupo_»
3)  Cree un grupo y, a continuación, marque algunas casillas de verificación en el formulario
4) Intente guardar estos cambios
5) Si la solicitud tarda más de 50 segundos en guardarse, lo cual suele ocurrir en cuentas con una gran cantidad de datos, la solicitud se detendrá y los datos no se guardarán.

## Workaround

Utilizando nuestros puntos finales de la API de colecciones: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection; sin embargo, es importante tener en cuenta que, en algunos casos en los que se actualiza una gran cantidad de datos, el tiempo de espera puede seguir produciéndose a través de la API.