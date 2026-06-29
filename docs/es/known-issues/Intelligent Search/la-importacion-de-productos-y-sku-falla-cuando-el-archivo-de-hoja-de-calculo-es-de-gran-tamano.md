---
title: 'La importación de productos y SKU falla cuando el archivo de hoja de cálculo es de gran tamaño.'
slug: la-importacion-de-productos-y-sku-falla-cuando-el-archivo-de-hoja-de-calculo-es-de-gran-tamano
status: PUBLISHED
createdAt: 2026-06-29T17:31:05.000Z
updatedAt: 2026-06-29T17:31:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-and-sku-import-fails-for-large-size-of-spreadsheet-file
locale: es
kiStatus: Backlog
internalReference: 1427405
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando los comerciantes importan productos y SKU mediante una hoja de cálculo, la carga puede fallar incluso si la hoja se divide en lotes más pequeños según el número de filas. El síntoma visible es un error `413 Entidad de solicitud demasiado grande` durante el proceso de importación.

Esto afecta a los casos en los que el tamaño del archivo de la hoja de cálculo supera el límite admitido por el proceso de importación actual, que es de aproximadamente 4,5 MB.

## Simulación

1. Abra el **Panel de administración** y acceda al proceso de importación de **Productos y SKU**.

2. Prepare un archivo de hoja de cálculo cuyo tamaño total sea superior a 4,5 MB.

3. Cargue el archivo en el proceso de importación.

4. Observe que la solicitud falla durante la carga y puede devolver un error `413 Entidad de solicitud demasiado grande` antes de llegar al proceso de backend.

## Workaround

Divida la importación en archivos de hoja de cálculo más pequeños, de aproximadamente 4,5 MB, siempre que sea posible y cargue cada archivo por separado.