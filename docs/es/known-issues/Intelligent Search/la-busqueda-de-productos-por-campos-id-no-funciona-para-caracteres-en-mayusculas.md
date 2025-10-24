---
title: 'La búsqueda de productos por campos ID no funciona para caracteres en mayúsculas'
slug: la-busqueda-de-productos-por-campos-id-no-funciona-para-caracteres-en-mayusculas
status: PUBLISHED
createdAt: 2025-10-16T20:45:15.244Z
updatedAt: 2025-10-16T20:45:15.244Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-search-by-id-fields-not-working-for-uppercase-characters
locale: es
kiStatus: Backlog
internalReference: 1205216
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La búsqueda por un ID, como el "refId" de un producto o SKU, no funciona correctamente al insertar caracteres en mayúsculas.

La búsqueda no encontrará ningún resultado por el ID, pero puede encontrar productos si el ID coincide con algún campo buscable del producto, lo que puede provenir del comportamiento de autocorrección (_fuzzy_).


#### Simulación



- Registrar un producto con "refId" como "ABC123".
- Se busca "abc123" y se encuentra el producto.
- Si se busca "ABC123", no se encuentra el producto.

## Workaround


Cree un atributo de especificación para reflejar el valor de este ID y configúrelo como campo de búsqueda. No podrá aplicar el rango más alto para las coincidencias de ID ni funcionará para las coincidencias parciales de ID, pero ayudará a encontrar el producto.