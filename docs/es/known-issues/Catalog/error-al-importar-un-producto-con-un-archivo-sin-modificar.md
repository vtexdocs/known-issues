---
title: 'Error al importar un producto con un archivo sin modificar'
slug: error-al-importar-un-producto-con-un-archivo-sin-modificar
status: PUBLISHED
createdAt: 2026-05-04T12:07:04.945Z
updatedAt: 2026-05-04T12:07:04.945Z
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

Actualmente, tenemos un problema con el módulo de importación/exportación, que básicamente consiste en que los archivos no modificados de la exportación entran en conflicto con la importación.

## Simulación

Descargue un archivo en el nuevo módulo de exportación, por ejemplo «Productos y SKU», y, sin guardar ningún cambio en el archivo de Excel, intente importar el mismo archivo utilizando el módulo de importación con la misma opción «Productos y SKU». Esto dará lugar a un error, debido a que el formato de la exportación entra en conflicto con la importación. Sin embargo, cualquier intento de guardar un cambio en el archivo de Excel resolverá el problema.

## Workaround

Descargue el archivo de Excel, aplique los cambios y guárdelo; al hacerlo, la importación aceptará el archivo.