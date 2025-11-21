---
title: 'La actualización de la hoja de especificaciones del producto no activa el notificador ni la indexación'
slug: la-actualizacion-de-la-hoja-de-especificaciones-del-producto-no-activa-el-notificador-ni-la-indexacion
status: PUBLISHED
createdAt: 2025-11-21T18:12:22.163Z
updatedAt: 2025-11-21T18:12:22.163Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-sheet-update-does-not-trigger-notificator-and-indexing
locale: es
kiStatus: Backlog
internalReference: 403107
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al importar los valores de especificación de un producto a través de hojas de cálculo, no se desencadenarán acciones de indexación para los nuevos valores en los campos de producto existentes. Se actualizarán correctamente en la base de datos de la cuenta, pero no en las rutas de la API de búsqueda ni en los componentes frontales que consumen información indexada.


#### Simulación



- Acceda al VTEX Admin en la siguiente ruta: Catálogo -> Importar y Exportar -> Especificaciones de Producto.
- Importe una hoja de cálculo para actualizar los valores de las especificaciones.
- Transcurrido un tiempo, compruebe la información en la interfaz de usuario del administrador; estará actualizada, pero en la API de búsqueda no lo estará.

## Workaround


Edite cualquier otra información del producto, en lugar de las especificaciones, a través de la UI/API/hoja de cálculo. Se activará la indexación para una actualización del producto, que incluye las especificaciones.

Una reindexación completa (a través de FullCleanUp.aspx) no cubre esta actualización, ya que implica capas de información adicionales.

