---
title: 'La búsqueda inteligente indexa SKU Detach sin distinguir entre especificaciones del mismo nombre.'
slug: la-busqueda-inteligente-indexa-sku-detach-sin-distinguir-entre-especificaciones-del-mismo-nombre
status: PUBLISHED
createdAt: 2026-09-24T16:44:22.000Z
updatedAt: 2026-09-24T16:44:22.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-indexes-sku-detach-without-distinguishing-between-samename-specifications
locale: es
kiStatus: Backlog
internalReference: 1465798
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función «SKU Detach» divide un único producto en varios productos agrupados por el valor de la especificación en la capa de Búsqueda Inteligente.

Cuando una especificación de SKU tiene el mismo nombre que una especificación de producto, la indexación puede usar el valor de la especificación del producto en lugar del valor de la especificación de SKU. Esto provoca que un SKU se indexe en el grupo de productos incorrecto.

## Simulación

1. Configure la función «SKU Detach» en **Administración > Búsqueda Inteligente > Configuración de Búsqueda**, utilizando un nombre de especificación (ejemplo: «Color»).

2. Cree un producto con una especificación a nivel de producto con el mismo nombre (ejemplo: «Color» = «Morado»).

3. Añada un SKU a este producto con una especificación a nivel de SKU con el mismo nombre pero un valor diferente (ejemplo: «Color» = «Azul»).

4. En la API de Búsqueda Inteligente, aplique el filtro utilizando el valor de la especificación del producto (ejemplo: «Color = Morado»).

**Comportamiento real:** El filtro de búsqueda devuelve el producto, pero muestra el SKU incorrecto.

## Workaround

Aunque el módulo Catálogo no bloquea los nombres de especificaciones repetidos, este uso debe considerarse incorrecto.