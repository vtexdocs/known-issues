---
title: 'El filtro "Especificación del producto" del módulo de recogida asume valores incorrectos.'
slug: el-filtro-especificacion-del-producto-del-modulo-de-recogida-asume-valores-incorrectos
status: PUBLISHED
createdAt: 2025-09-03T14:10:31.223Z
updatedAt: 2025-09-03T14:10:31.223Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-filter-on-collection-module-assuming-incorrect-values
locale: es
kiStatus: Backlog
internalReference: 926593
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En el módulo Recogida, el filtro Especificaciones de producto no funciona correctamente cuando la especificación tiene el tipo "Texto" y "Texto grande". Cuando se selecciona este tipo de especificación, se abre un cuadro de texto para insertar los posibles valores separados por una coma, tabulador o enter. Sin embargo, cuando se teclea un solo carácter, el sistema lo asume como valor incluso sin separar los términos.


#### Simulación



1. Cree una Especificación de Producto con el tipo "Texto"
2. Vaya al Módulo de Recogida, haga clic en el filtro "Más", seleccione "Especificación de Producto"
3. Localice la especificación que ha creado y escriba cualquier cosa, verá que incluso un carácter se convertirá en un término de búsqueda

## Workaround


Continúe escribiendo hasta completar el término y, a continuación, elimine los términos incorrectos



