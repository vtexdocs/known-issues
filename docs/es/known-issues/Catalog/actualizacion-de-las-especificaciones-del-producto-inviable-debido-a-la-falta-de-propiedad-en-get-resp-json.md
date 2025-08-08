---
title: 'Actualización de las especificaciones del producto inviable debido a la falta de propiedad en GET Resp. JSON'
id: 6FeuIyF2E5WdS0PNRRzgdA
status: PUBLISHED
createdAt: 2022-06-28T16:55:06.720Z
updatedAt: 2024-02-16T20:29:52.260Z
publishedAt: 2024-02-16T20:29:52.260Z
firstPublishedAt: 2022-06-28T16:55:07.124Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: updating-product-specifications-unviable-due-to-lacking-property-on-get-resp-json
locale: es
kiStatus: No Fix
internalReference: 301725
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

La respuesta JSON de GET Product Specification carece de una propiedad esencial para actualizar las especificaciones preexistentes si así lo necesita el usuario.

## Simulación

1) Utilizar una especificación de producto GET como la que actualmente tenemos documentada en nuestros devdocs: https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch

En este ejemplo, tenemos la siguiente respuesta:

![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/actualizacion-de-las-especificaciones-del-producto-inviable-debido-a-la-falta-de-propiedad-en-get-resp-json_1.png)

Observa que puedo obtener el "Valor", "Id" y "nombre" con esta req. Esta es actualmente la única manera de obtener este tipo de datos a través de la API REST.

2) He utilizado la siguiente petición para actualizar esto (después de obtener cuál es el fielded y fieldvalueid consultando las APIs de la categoría): https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch

![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/actualizacion-de-las-especificaciones-del-producto-inviable-debido-a-la-falta-de-propiedad-en-get-resp-json_2.png)

Observe que en la respuesta se devuelve un ID único, que es el ID de asociación de la especificación con el producto.

Sin embargo, para que un usuario actualice cualquier valor preexistente, será necesario informar este ID y sólo se devuelve en la respuesta de la primera inserción y en ningún otro lugar (vía API).

Esta cuestión es la apertura del reconocimiento de este problema y el seguimiento de un futuro ajuste posible, incluso si no es un error del producto por ver, pero una usabilidad defectuosa / incompleta.

## Workaround

Utilice la exportación de especificaciones del catálogo (https://merch.myvtex.com/admin/Site/ProdutoExportacaoImportacaoEspecificacaoV2.aspx) para obtener el ID de asociación deseado:

![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/actualizacion-de-las-especificaciones-del-producto-inviable-debido-a-la-falta-de-propiedad-en-get-resp-json_3.png)

O

Utilizar una especificación de borrado para la antigua especificación y enviar una nueva, en la que la respuesta vendrá con un nuevo ID a guardar.

