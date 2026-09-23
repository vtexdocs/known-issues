---
title: 'Las etiquetas XML <price> relacionadas no cargan el contenido de los artículos no disponibles.'
slug: las-etiquetas-xml-price-relacionadas-no-cargan-el-contenido-de-los-articulos-no-disponibles
status: PUBLISHED
createdAt: 2024-01-31T22:11:06.000Z
updatedAt: 2026-09-23T16:55:18.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-price-related-tags-do-not-load-contents-for-unavailable-items
locale: es
kiStatus: Backlog
internalReference: 974722
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La integración XML carga cualquier etiqueta relacionada con el precio, como minPrice, maxPrice y currentPrice, que se cargan como una etiqueta de valor nulo (<![CDATA[]]>) cuando el artículo no está disponible y también se configura para mostrarse si no está disponible.

## Simulación

1 - Configure un SKU no disponible en su tienda para que se muestre incluso si no está disponible.

2 - Para una configuración de integración XML válida en https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configure la etiqueta "Disponibilidad" y cualquier otra etiqueta de disponibilidad que se muestre.

3 - Utilice una solicitud GET o cargue la URL XML creada en su navegador.

El resultado será un artículo no disponible, que seguirá apareciendo en el XML, pero sin precio:

![](https://vtexhelp.zendesk.com/attachments/token/1CzUarsM3O05aG9z5otDZZ1Yg/?name=image.png)

## Workaround

No existe ninguna solución alternativa. La única opción para no integrar artículos sin precio es desactivar la opción "showIfNotAvailable".