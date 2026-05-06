---
title: 'El informe de indexación del catálogo muestra estadísticas erróneas'
slug: el-informe-de-indexacion-del-catalogo-muestra-estadisticas-erroneas
status: PUBLISHED
createdAt: 2022-01-07T17:05:40.000Z
updatedAt: 2026-02-14T02:07:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexing-report-returning-wrong-stats
locale: es
kiStatus: No Fix
internalReference: 499450
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Debido a cambios en la arquitectura del flujo de trabajo de indexación de productos, el informe de indexación del catálogo («RelatorioIndexacao.aspx») ya no se actualiza correctamente, por lo que muestra estadísticas erróneas.

## Simulación

Compara el recuento total de productos en el informe de indexación, la página de administración del catálogo y los resultados de búsqueda de la tienda. Se observarán discrepancias significativas entre los valores.

## Workaround

provisional**
Las tiendas que utilizan la Búsqueda inteligente pueden consultar la página de administración del Historial de indexación para obtener una vista similar.