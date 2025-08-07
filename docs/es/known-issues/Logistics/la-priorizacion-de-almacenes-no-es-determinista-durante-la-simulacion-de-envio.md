---
title: La priorización de almacenes no es determinista durante la simulación de envío
slug: la-priorizacion-de-almacenes-no-es-determinista-durante-la-simulacion-de-envio
status: PUBLISHED
createdAt: 2025-08-07T20:35:53.521Z
updatedAt: 2025-08-07T20:35:53.521Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: warehouse-prioritization-is-not-deterministic-during-shipping-simulation
locale: es
kiStatus: Backlog
internalReference: 1268196
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Actualmente, la logística no siempre elige el almacén con las mejores condiciones, como el tiempo de procesamiento o el coste de envío más bajos, cuando se reparten cantidades de la misma SKU entre varios almacenes. En su lugar, el proceso de selección del almacén que abastecerá cada artículo se basa en el orden en que los almacenes aparecen en el sistema. Este orden procede del servicio de disponibilidad, que a su vez no está ordenado, lo que hace que la selección no sea determinista. Como resultado, el simulador puede seleccionar un almacén con mayor tiempo de procesamiento y tarifa extra, incluso cuando hay mejores opciones disponibles (por ejemplo, prefiriendo un almacén con 3 días de procesamiento y una tarifa extra de 5 dólares a uno con 2 días y una tarifa extra de 1 dólar).

## Simulación



Para reproducir el problema:

- Configure el inventario de forma que ningún almacén pueda satisfacer la cantidad total solicitada para una SKU específica (por ejemplo, necesita 3 unidades, pero cada almacén sólo tiene 1 ó 2 disponibles).
- Prepare dos o más almacenes aptos para cumplir con la cantidad faltante, pero con diferentes tiempos de procesamiento y gastos de envío.
- Realice una simulación de envío utilizando el administrador de logística de la plataforma para esta SKU/cantidad.
- Observe que el simulador puede seleccionar un almacén con peor (mayor) coste/tiempo, aunque exista una opción mejor.

## Workaround


No hay ninguna solución disponible.




