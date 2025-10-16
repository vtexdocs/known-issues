---
title: Color rojo incorrecto en la etiqueta de disponibilidad del administrador del catálogo para artículos fuera de sc=1
slug: color-rojo-incorrecto-en-la-etiqueta-de-disponibilidad-del-administrador-del-catalogo-para-articulos-fuera-de-sc1
status: PUBLISHED
createdAt: 2025-10-16T20:48:48.666Z
updatedAt: 2025-10-16T20:48:48.666Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-red-color-in-catalog-admin-availability-tag-for-items-out-of-sc1
locale: es
kiStatus: Backlog
internalReference: 1212652
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, la pantalla de comprobación de disponibilidad en la administración del catálogo tiene 3 tipos diferentes de color para señalar la disponibilidad de un artículo:

Verde = activo y disponible para la compra
Rojo = activo, pero no disponible para la compra
En blanco = inactivo

Sin embargo, el estado Rojo sólo tiene en cuenta la disponibilidad para el canal de venta por defecto de la tienda (normalmente sc=1). Por lo tanto, si un artículo está disponible para otros canales de venta pero no para el predeterminado, debería seguir mostrando una etiqueta verde, pero en su lugar se muestra como rojo.


#### Simulación


1 - Para una tienda con múltiples canales de venta, cree un producto con disponibilidad para un canal de venta distinto de sc=1
2 - Compruebe su etiqueta visual de disponibilidad en el catálogo, la que se puede ver en el listado del catálogo

 ![](https://vtexhelp.zendesk.com/attachments/token/OpqtMAd4kvj5EW4HUxlAdrBo0/?name=image.png)

3 - incluso con el artículo disponible para otros canales de venta, como sc=2, la etiqueta sólo se pondrá verde si está activa y disponible para sc=1.

## Workaround


-



