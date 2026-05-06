---
title: 'El filtro «productClusterIds» se sobrescribe con «productClusterNames» al aplicar filtros adicionales'
slug: el-filtro-productclusterids-se-sobrescribe-con-productclusternames-al-aplicar-filtros-adicionales
status: PUBLISHED
createdAt: 2023-09-13T22:42:41.000Z
updatedAt: 2023-09-21T18:04:39.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: filter-productclusterids-is-overwritten-by-productclusternames-while-applying-additional-filters
locale: es
kiStatus: Backlog
internalReference: 899508
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se inicia una búsqueda desde el filtro «productClusterIds», la aplicación de cualquier filtro adicional la convertirá en «productClusterNames», con lo que se perderá la característica de presentar los artículos con la ordenación definida manualmente en la colección de productos.

## Simulación

El escenario se puede observar en cualquier página, como `"store.com/111?map=productClusterIds"`, al aplicar cualquier filtro adicional, como una categoría, una especificación, etc.

El usuario será redirigido a `"store.com/clothing/special-sale?initialMap=productClusterIds&initialQuery=111&map=category,productclusternames"`.

## Workaround

No hay ninguna solución alternativa para este problema específico si necesitas la clasificación especial, pero asegúrate de utilizar «productClusterIds» solo en los casos necesarios. De lo contrario, utiliza el filtro «productClusterNames».