---
title: '¿La actualización del archivo SKU no actualiza las etiquetas de versión «?v»?'
slug: la-actualizacion-del-archivo-sku-no-actualiza-las-etiquetas-de-version-v
status: PUBLISHED
createdAt: 2023-06-29T14:37:41.000Z
updatedAt: 2023-06-29T14:37:41.000Z
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

Actualmente, cuando se actualiza un archivo de imagen de una SKU a través de la API para que ocupe la misma posición que el anterior, la etiqueta de versión (?v=) en la página del producto no se actualiza correctamente.

## Simulación

- Para una SKU que ya contiene archivos, prueba a actualizar una imagen por una nueva.
- Para que el usuario y/o los sistemas interpreten correctamente el archivo que se está modificando, la etiqueta de versión (?v=) situada debajo de la imagen href en el código HTML de la página del producto debería actualizarse.
- Sin embargo, esto no ocurre cuando se utiliza esta API para realizar dichas actualizaciones.

## Workaround

Eliminar todos los archivos de la SKU y volver a insertarlos desde cero obliga a que se actualice.

O

La eliminación de un indexador obliga a la actualización.