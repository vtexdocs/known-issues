---
title: 'La creación de una subcategoría a través de la ruta de la categoría, con el mismo nombre que otra subcategoría, falla'
id: 4ncZiLNaKbgfYzGHCGvwdk
status: PUBLISHED
createdAt: 2024-08-26T15:45:09.563Z
updatedAt: 2024-08-26T15:45:10.888Z
publishedAt: 2024-08-26T15:45:10.888Z
firstPublishedAt: 2024-08-26T15:45:10.888Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-subcategory-via-category-path-with-the-same-name-as-another-subcategory-fails
locale: es
kiStatus: Backlog
internalReference: 1087069
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, es posible crear nuevas categorías y/o subcategorías informando de sus nombres a través de la propiedad JSON "CategoryPath" en la API de inserción de productos: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

Sin embargo, cuando la subcategoría informada tiene el mismo nombre que otra subcategoría, el producto se crea en la primera y no se genera la segunda.

Esto no ocurre para las categorías.


##

## Simulación


Utilizando la API mencionada, cree un producto informando, en la ruta de la categoría, de una subcategoría que tiene el mismo nombre que otra subcategoría pero que aún no está creada y debe crearse en otro lugar del árbol de categorías.

Como ejemplo, compruebe el árbol siguiente:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Catalog/la-creacion-de-una-subcategoria-a-traves-de-la-ruta-de-la-categoria-con-el-mismo-nombre-que-otra-subcategoria-falla_1.png)

Esto significaría informar en la ruta "Departamento/Categoría2/Subcategoría1".

El producto se creará en la ruta "Departamento/Categoría/Subcategoría1" y no se creará la nueva subcategoría.



## Workaround


En su lugar, cree la subcategoría por otros medios, como la API de categoría PUT: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/category y, a continuación, inserte el producto en esta categoría informando de su ruta o ID.





