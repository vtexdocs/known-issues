---
title: 'El informe de indexación del catálogo devuelve estadísticas erróneas.'
slug: el-informe-de-indexacion-del-catalogo-devuelve-estadisticas-erroneas
status: PUBLISHED
createdAt: 2026-02-19T15:36:35.216Z
updatedAt: 2026-02-19T15:36:35.216Z
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

Debido a cambios arquitectónicos en el flujo de trabajo de indexación de productos, el informe de indexación del catálogo («RelatorioIndexacao.aspx») ya no se actualiza correctamente y presenta estadísticas erróneas.

## Simulación

Compare el recuento total de productos entre el informe de indexación, la página de administración del catálogo y los resultados de búsqueda de la tienda. Los valores mostrarán discrepancias significativas.

## Workaround

Las tiendas que utilizan la búsqueda inteligente pueden basarse en la página de administración del historial de indexación para obtener una vista similar.