---
title: 'Incoherencia al buscar facetas que contengan resultados con valores de especificación elevados'
slug: incoherencia-al-buscar-facetas-que-contengan-resultados-con-valores-de-especificacion-elevados
status: PUBLISHED
createdAt: 2023-05-11T17:41:54.000Z
updatedAt: 2023-05-11T17:41:54.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inconsistency-when-searching-for-facets-that-contains-results-with-large-specification-values
locale: es
kiStatus: Backlog
internalReference: 824198
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API de facetas cuenta con un campo «specificationFilters», y este campo puede provocar un error en la respuesta de la API cuando los valores registrados en cualquier especificación de esa categoría son demasiado grandes

## Simulación

- En una categoría, crea un campo de texto grande.
- Añade un valor grande al producto.
- Guarda el producto y espera a que se indexe.
- Llama a la API de facetas y comprueba que no devuelve ningún resultado.

## Workaround

Ajusta el tamaño de los valores.