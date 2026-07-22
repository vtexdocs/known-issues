---
title: 'La asignación de categorías mediante XLS no se reprocesa para cuentas con un gran volumen de sugerencias.'
slug: la-asignacion-de-categorias-mediante-xls-no-se-reprocesa-para-cuentas-con-un-gran-volumen-de-sugerencias
status: PUBLISHED
createdAt: 2026-07-22T20:14:59.000Z
updatedAt: 2026-07-22T20:24:59.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: category-mapping-via-xls-not-reprocessed-for-accounts-with-large-volume-of-suggestions
locale: es
kiStatus: Backlog
internalReference: 1438301
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las actualizaciones de mapeo de categorías enviadas mediante la carga de una hoja de cálculo (XLS) no siempre se reprocesan automáticamente para las cuentas con un gran volumen de sugerencias pendientes. Algunos SKU permanecen como "no mapeados" en la pantalla de Ofertas recibidas, incluso después de que la hoja de mapeo se haya actualizado correctamente en el marketplace, mientras que otros SKU de la misma cuenta se procesan con normalidad.

## Simulación

1. La cuenta del vendedor/marketplace tiene el mapeo de categorías gestionado mediante la carga de una hoja XLS.

2. La cuenta tiene un gran volumen de artículos/ofertas pendientes de resolución de mapeo.

3. El marketplace actualiza correctamente la hoja de cálculo de mapeo de categorías.

4. Algunos SKU se reprocesan correctamente, pero otros permanecen como "no mapeados" de forma inconsistente, dependiendo de la posición del artículo en el lote de procesamiento interno, aunque los datos de mapeo sean correctos.

## Workaround

N/A