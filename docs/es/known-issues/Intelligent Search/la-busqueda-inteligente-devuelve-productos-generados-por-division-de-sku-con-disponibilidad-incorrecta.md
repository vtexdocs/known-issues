---
title: 'La búsqueda inteligente devuelve productos generados por división de SKU con disponibilidad incorrecta.'
slug: la-busqueda-inteligente-devuelve-productos-generados-por-division-de-sku-con-disponibilidad-incorrecta
status: PUBLISHED
createdAt: 2026-09-03T23:18:59.000Z
updatedAt: 2026-09-03T23:19:41.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-returns-products-generated-by-sku-split-with-incorrect-availability
locale: es
kiStatus: Backlog
internalReference: 1456597
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se configura una especificación de SKU como atributo dividido, la Búsqueda Inteligente genera un producto derivado para cada "SKU dividido". Sin embargo, los datos de disponibilidad indexados para estos productos derivados no se limitan al SKU dividido individual, sino que se obtienen a partir del saldo de stock del producto original, que agrega la disponibilidad de todos los SKU que comparten dicho saldo.

Como resultado, un producto generado a partir de un atributo dividido cuyo SKU no está disponible (stock cero confirmado al finalizar la compra) puede seguir apareciendo en la consulta de búsqueda principal con availableQuantity: 0, en lugar de ser tratado correctamente como no disponible u oculto, ya que la disponibilidad indexada no refleja el stock real de ese SKU específico.

Este problema se presenta exclusivamente en escenarios donde la regionalización está habilitada, ya que el campo de disponibilidad afectado solo entra en juego cuando el stock se evalúa por vendedor/región, en lugar de mediante un único valor de disponibilidad para toda la tienda.

## Simulación

- Configure una especificación de SKU como atributo de división para un producto con múltiples SKU que comparten el mismo saldo de stock en una tienda con regionalización habilitada.

- Asegúrese de que al menos un SKU de ese saldo de stock tenga stock disponible y otro tenga cero (confirmado como no disponible al finalizar la compra).

- Indexe el catálogo con la Búsqueda Inteligente habilitada.

- Busque el producto sin aplicar el atributo de división como filtro.

- El producto generado por la división correspondiente al SKU no disponible se sigue mostrando, con `availableQuantity: 0`, en lugar de excluirse.

## Workaround

N/A