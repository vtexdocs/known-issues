---
title: 'Se duplica la cantidad de artículos al intentar editar cotizaciones con artículos divididos por promociones.'
slug: se-duplica-la-cantidad-de-articulos-al-intentar-editar-cotizaciones-con-articulos-divididos-por-promociones
status: PUBLISHED
createdAt: 2026-07-06T22:36:55.000Z
updatedAt: 2026-07-06T22:36:55.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: item-quantity-duplicated-when-trying-to-edit-quotes-qith-items-split-by-promotions
locale: es
kiStatus: Backlog
internalReference: 1430768
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al editar la cantidad de artículos en un presupuesto que contiene artículos divididos por promoción, la cantidad agregada para una de las entradas de artículos se duplicará para la otra, sin reflejar el cálculo realizado por el proceso de pago. Además, no es posible editar el primer dígito de la cantidad del artículo (permanece como 1).

## Simulación

- Crea un nuevo presupuesto usando un carrito con artículos divididos por promoción (ej.: compra 3, llévate 1 gratis)
- Intenta editar la cantidad de artículos del presupuesto; En la interfaz de usuario, ocurrirán dos cosas:

- El primer dígito no se actualizará; permanecerá como 1.

- La cantidad añadida para una de las entradas del artículo dividido se duplicará para la otra entrada (por ejemplo, si se añaden 12 para la entrada con precio normal, la interfaz de usuario replicará 12 para la entrada gratuita).

- Al guardar el presupuesto y utilizarlo, la cantidad total se añadirá al formulario de pedido y la promoción se calculará correctamente (por ejemplo, si se añadieron 12 unidades para cada entrada, se añadirán 24 unidades del artículo al formulario de pedido; luego, se cobrarán 18 unidades completas y se añadirán 6 gratis, según la regla de la promoción "Compra 3 y llévate 1").

## Workaround

No actualice los presupuestos con artículos divididos por promoción; cree presupuestos nuevos.