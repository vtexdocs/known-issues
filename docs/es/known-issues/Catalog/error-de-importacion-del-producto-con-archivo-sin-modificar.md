---
title: 'Error de importación del producto con archivo sin modificar'
slug: error-de-importacion-del-producto-con-archivo-sin-modificar
status: PUBLISHED
createdAt: 2026-05-04T15:02:19.000Z
updatedAt: 2026-09-22T20:20:23.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-import-error-with-unmodified-file
locale: es
kiStatus: Backlog
internalReference: 1400586
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, tenemos un problema con el módulo de Importación/Exportación, que consiste básicamente en que los archivos exportados sin modificar entran en conflicto con los importados.

## Simulación

Descargue un archivo en el nuevo módulo de Exportación, por ejemplo, "Productos y SKU", sin guardar ningún cambio en el archivo de Excel. Intente importar el mismo archivo usando el módulo de Importación con la misma opción "Productos y SKU". Esto generará un error, debido a que el formato de la exportación entra en conflicto con el de la importación. Sin embargo, cualquier intento de guardar cambios en el archivo de Excel solucionará el problema.

## Workaround

Descargue el archivo de Excel, aplique los cambios y guárdelo. Al hacerlo, la importación aceptará el archivo.