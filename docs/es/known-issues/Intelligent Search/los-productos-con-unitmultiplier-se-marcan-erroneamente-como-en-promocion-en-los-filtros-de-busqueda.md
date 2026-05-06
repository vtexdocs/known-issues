---
title: 'Los productos con «unitMultiplier» se marcan erróneamente como «en promoción» en los filtros de búsqueda'
slug: los-productos-con-unitmultiplier-se-marcan-erroneamente-como-en-promocion-en-los-filtros-de-busqueda
status: PUBLISHED
createdAt: 2024-02-15T22:51:59.000Z
updatedAt: 2024-02-15T22:51:59.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: products-with-unitmultiplier-wrongly-flagged-as-with-promotion-for-search-filters
locale: es
kiStatus: Backlog
internalReference: 982830
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Un producto cuyo precio de venta sea inferior a su precio de catálogo se marcará como parte de una promoción a efectos de filtrado en la búsqueda. Los productos con algún multiplicador de unidades pueden dar lugar a un cálculo erróneo que afecte a esta comparación, lo que provocaría que se les aplicara esta marca de forma incorrecta.

## Simulación

La simulación depende de la aparición de problemas específicos de redondeo, pero un ejemplo de ello es un producto con un precio de catálogo y un precio habitual de 264,20 $ y un multiplicador de unidades de 3,07.

Aunque el precio de catálogo y el precio habitual son iguales, este artículo aparecerá en el filtro de búsqueda «promotion=yes».

## Workaround

N/A