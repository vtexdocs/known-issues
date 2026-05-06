---
title: 'El filtro «Especificaciones del producto» del módulo de colecciones asume valores incorrectos'
slug: el-filtro-especificaciones-del-producto-del-modulo-de-colecciones-asume-valores-incorrectos
status: PUBLISHED
createdAt: 2023-10-27T01:22:29.000Z
updatedAt: 2025-09-03T17:09:47.000Z
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

En el módulo «Colección», el filtro «Especificaciones del producto» no funciona correctamente cuando la especificación es de tipo «Texto» o «Texto extenso». Al seleccionar este tipo de especificación, se abre un cuadro de texto para introducir los valores posibles separados por una coma, una tabulación o la tecla Intro. Sin embargo, al escribir un solo carácter, el sistema lo interpreta como un valor, incluso sin separar los términos.

## Simulación

1. Crea una especificación de producto con el tipo «Texto».
2. Ve al módulo de colección, haz clic en el filtro «Más» y selecciona «Especificación de producto».
3. Localiza la especificación que has creado y escribe cualquier cosa; comprueba que incluso un solo carácter se convertirá en un término de búsqueda.

## Workaround

provisional**
Sigue escribiendo hasta completar el término y, a continuación, elimina los términos incorrectos.