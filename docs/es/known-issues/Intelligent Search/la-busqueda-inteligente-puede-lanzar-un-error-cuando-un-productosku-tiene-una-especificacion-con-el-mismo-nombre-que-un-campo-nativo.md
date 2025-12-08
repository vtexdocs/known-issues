---
title: 'La Búsqueda Inteligente puede lanzar un error cuando un producto/sku tiene una especificación con el mismo nombre que un campo nativo'
slug: la-busqueda-inteligente-puede-lanzar-un-error-cuando-un-productosku-tiene-una-especificacion-con-el-mismo-nombre-que-un-campo-nativo
status: PUBLISHED
createdAt: 2025-12-08T14:49:03.041Z
updatedAt: 2025-12-08T14:49:03.041Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-can-throw-an-error-when-a-productsku-has-a-specification-with-the-same-name-as-a-native-field
locale: es
kiStatus: Backlog
internalReference: 1336576
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando las especificaciones de producto/SKU utilizan los mismos nombres que los campos estándar del catálogo, la capa de compatibilidad de la Búsqueda Inteligente fusiona incorrectamente estos datos, haciendo que los valores de la especificación sobrescriban los valores nativos del catálogo.

Esto provoca que la consulta de búsqueda principal devuelva datos no válidos o erróneos para estos artículos, lo que en última instancia provoca errores a los clientes que intentan cargar más resultados o ver los productos afectados en las páginas de listado de productos (PLP) del escaparate.

## Simulación


Cree una especificación de producto/SKU con el mismo nombre que un campo nativo (por ejemplo, measurementUnit). Una vez indexado el campo, busque este producto y se producirá un error al cargar la página.

## Workaround


No cree un campo de especificación con el mismo nombre que un campo nativo. Si se crea, cámbiele el nombre a un campo de catálogo no nativo.

