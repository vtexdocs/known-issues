---
title: 'Los filtros que están ocultos en la tienda también lo están en las páginas de administración de la Búsqueda inteligente'
slug: los-filtros-que-estan-ocultos-en-la-tienda-tambien-lo-estan-en-las-paginas-de-administracion-de-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2021-08-20T17:41:25.000Z
updatedAt: 2025-05-27T20:11:48.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filters-hidden-from-the-store-are-also-hidden-from-intelligent-search-admin-pages
locale: es
kiStatus: Backlog
internalReference: 416638
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas facetas tienen un uso interno o se aplican en casos en los que es necesario ocultarlas, pero la tienda las necesita para la búsqueda, por ejemplo, para aplicar reglas de productos.

## Simulación

En algunas cuentas, la especificación de SKU «color» no aparece como opción en «Usar especificaciones de SKU para mostrar productos individuales en los resultados de búsqueda». Vemos que «color» es una de las especificaciones que aparecen en «Ocultar facetas».

## Workaround

En **Admin > Configuración de búsqueda**, elimina la faceta (o filtro) de la configuración «Ocultar facetas», crea la regla de merchandising o realiza la configuración prevista, y vuelve a ocultar la faceta (o filtro).