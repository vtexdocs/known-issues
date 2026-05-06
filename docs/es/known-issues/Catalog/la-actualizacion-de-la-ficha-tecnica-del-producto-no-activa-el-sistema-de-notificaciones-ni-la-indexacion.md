---
title: 'La actualización de la ficha técnica del producto no activa el sistema de notificaciones ni la indexación'
slug: la-actualizacion-de-la-ficha-tecnica-del-producto-no-activa-el-sistema-de-notificaciones-ni-la-indexacion
status: PUBLISHED
createdAt: 2021-07-28T19:14:33.000Z
updatedAt: 2025-11-21T21:40:51.000Z
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

Al importar los valores de las especificaciones de un producto a través de hojas de cálculo, estos no activarán acciones de indexación para los nuevos valores en los campos de producto existentes. Se actualizarán correctamente en la base de datos de la cuenta, pero no en las rutas de la API de búsqueda ni en los componentes front-end que utilizan información indexada.

## Simulación

- Accede al panel de administración de VTEX en la siguiente ruta: Catálogo -> Importación y exportación -> Especificaciones del producto.
- Importa una hoja de cálculo para actualizar los valores de las especificaciones.
- Tras un tiempo, comprueba la información en la interfaz de usuario del panel de administración; estará actualizada, pero en la API de búsqueda no se habrá actualizado.

## Workaround

Edita cualquier otra información del producto, en lugar de las especificaciones, a través de la interfaz de usuario, la API o una hoja de cálculo. Esto activará la indexación de la actualización del producto, lo que incluye las especificaciones.

Una reindexación completa (a través de FullCleanUp.aspx) no cubre esta actualización, ya que implica capas de información adicionales.