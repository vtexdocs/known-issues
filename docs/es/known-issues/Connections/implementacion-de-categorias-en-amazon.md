---
title: 'Implementación de categorías en Amazon'
slug: implementacion-de-categorias-en-amazon
status: PUBLISHED
createdAt: 2022-03-25T14:32:41.000Z
updatedAt: 2025-06-23T15:58:12.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-category-implementation
locale: es
kiStatus: Fixed
internalReference: 549924
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Nos aparecen los siguientes errores al intentar integrar algunas SKU; hemos probado con las categorías globales 166, 167 y 169, pero ninguna funciona, aunque estas categorías deberían estar disponibles en Amazon.

Error «Categoría 169 no encontrada en la asignación de nodos de navegación para la especificación de departamento de la SKU; elija una categoría global más específica» persistente

## Simulación

Dentro de los productos de Bridge podemos ver el siguiente error:

Error «Categoría 169 no encontrada en la asignación de nodos de navegación para la especificación de departamento de las SKU. Elija una categoría global más específica» persistente

## Workaround

provisional**

Cambie la categoría global hasta que solucionemos este problema.