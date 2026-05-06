---
title: 'Las etiquetas XML relacionadas con <price> no cargan el contenido de los artículos que no están disponibles'
slug: las-etiquetas-xml-relacionadas-con-price-no-cargan-el-contenido-de-los-articulos-que-no-estan-disponibles
status: PUBLISHED
createdAt: 2024-01-31T19:11:06.000Z
updatedAt: 2024-01-31T19:11:06.000Z
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

La integración XML carga cualquier etiqueta relacionada con el precio, como minPrice, maxPrice o currentPrice, como una etiqueta de valor nulo (<![CDATA[]]>) cuando el artículo no está disponible, y también se configura para que se muestre aunque no esté disponible.

## Simulación

1 - Configura un SKU no disponible en tu tienda para que «se muestre aunque no esté disponible».
2 - Para una configuración válida de la integración XML https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configura la etiqueta «Availability» y cualquier otra etiqueta de disponibilidad que desees mostrar.
3 - Utiliza una solicitud GET o carga la URL XML creada en tu navegador.

El resultado será un artículo no disponible, que seguirá apareciendo en el XML, pero sin ninguna etiqueta de precio:

 ![](https://vtexhelp.zendesk.com/attachments/token/1CzUarsM3O05aG9z5otDZZ1Yg/?name=image.png)

## Workaround

No hay ninguna solución alternativa. La única opción para no integrar artículos sin precio es desactivar la opción «showIfNotAvailable».