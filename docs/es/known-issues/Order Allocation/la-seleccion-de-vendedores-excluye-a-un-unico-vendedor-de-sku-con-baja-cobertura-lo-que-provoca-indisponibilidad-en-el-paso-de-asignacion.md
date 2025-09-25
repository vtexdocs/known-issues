---
title: La selección de vendedores excluye a un único vendedor de SKU con baja cobertura, lo que provoca indisponibilidad en el paso de asignación
slug: la-seleccion-de-vendedores-excluye-a-un-unico-vendedor-de-sku-con-baja-cobertura-lo-que-provoca-indisponibilidad-en-el-paso-de-asignacion
status: PUBLISHED
createdAt: 2025-09-25T20:49:10.499Z
updatedAt: 2025-09-25T20:49:10.499Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: seller-selection-excludes-single-seller-of-sku-with-low-coverage-causing-unavailability-in-allocation-step
locale: es
kiStatus: Backlog
internalReference: 1298003
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al seleccionar vendedores para la simulación/asignación basada en la heurística de caja, en carros con cobertura asimétrica entre SKU (muchos vendedores para una SKU y sólo un vendedor para la otra), la reducción a "hasta 12" vendedores puede excluir al único vendedor que cumple con la segunda SKU. En la asignación, esta SKU puede intentar asignarse al mismo vendedor que la primera SKU y volver no disponible, incluso si hay un vendedor adecuado fuera de la lista reducida. Limitación causada por la priorización por cobertura y los criterios minPrecio/minTiempo dentro del límite técnico de la simulación.

## Simulación


1- Configurar un carro con 2 SKUs en ENTREGA, asegurando que la SKU A tiene decenas de vendedores elegibles y la SKU B sólo 1 vendedor elegible (rutas/stock/precio).

2- Asegurarse de que hay más de 12 vendedores elegibles de marca blanca antes de los cortes, forzando la etapa de Selección a reducir a "hasta 12".

3- Simule la cesta (Checkout); inspeccione la lista de vendedores seleccionados (razones fullyAvailableItemsCount/minPrice/minTime) y compruebe que el único vendedor del SKU B ha sido excluido.

4- Compruebe en Asignación que la SKU B vuelve no disponible debido al intento de asignación a vendedores sin disponibilidad para ella (vendedor de la SKU A o vendedor 1 sin stock/precio).

## Workaround


 No hay solución disponible



