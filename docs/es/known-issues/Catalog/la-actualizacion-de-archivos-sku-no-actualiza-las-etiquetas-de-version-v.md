---
title: 'La actualización de archivos SKU no actualiza las etiquetas de versión ?v'
slug: la-actualizacion-de-archivos-sku-no-actualiza-las-etiquetas-de-version-v
status: PUBLISHED
createdAt: 2025-11-14T19:14:24.625Z
updatedAt: 2025-11-14T19:14:24.625Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-file-update-does-not-update-v-version-tags
locale: es
kiStatus: Backlog
internalReference: 852869
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, cuando un archivo de imagen SKU se actualiza a través de la API para estar en la misma posición que uno anterior, su etiqueta de versión (?v=) en la página del producto no se actualiza correctamente.


#### Simulación




- Para un sku que ya tiene archivos en él, intente actualizar una imagen a una nueva.
- Para que el usuario y/o los sistemas interpreten correctamente el archivo que se está cambiando, la etiqueta de versión (?v=) bajo la imagen href en el HTML de la página del producto debería actualizarse.
- Sin embargo, esto no ocurre cuando se utiliza esta API para realizar dichas actualizaciones.



## Workaround


Borrar todos los archivos SKU y reinsertarlos desde cero obliga a actualizarlo.

O

Un borrado del indexador fuerza la actualización.