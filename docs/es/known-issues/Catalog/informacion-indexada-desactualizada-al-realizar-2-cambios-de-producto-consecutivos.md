---
title: 'Información indexada desactualizada al realizar 2 cambios de producto consecutivos.'
slug: informacion-indexada-desactualizada-al-realizar-2-cambios-de-producto-consecutivos
status: PUBLISHED
createdAt: 2023-09-26T17:44:24.000Z
updatedAt: 2026-09-23T17:00:45.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: outdated-indexed-information-when-performing-2-product-changes-in-a-row
locale: es
kiStatus: No Fix
internalReference: 907428
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas que utilizan el motor de búsqueda antiguo, si se realizan dos cambios en los datos de un producto en rápida sucesión (por ejemplo, se desactiva un producto y se reactiva inmediatamente después), y el segundo cambio restaura la información del producto a su estado anterior, el estado del artículo puede quedarse bloqueado en el primer cambio, ya que este último no se reconoce correctamente.

Este problema no se presenta en las tiendas que utilizan la aplicación de búsqueda inteligente.

## Simulación

1 - Obtenga un artículo activo en su tienda y desactívelo.
2 - Inmediatamente después (< 5 min), reactívelo.

3 - Después de unos minutos, revise el producto: no aparecerá en la tienda, a pesar de estar configurado para ello. (En otras palabras, se quedó bloqueado en ese estado intermedio).

## Workaround

1 - Reindexe los productos después de 5 minutos o más de experimentar el problema.

2 - Utilice el motor de búsqueda inteligente, que no presenta este problema. 3. Evita realizar dos o más cambios consecutivos en un producto, ya que el último cambio simplemente revierte el anterior.