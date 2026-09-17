---
title: 'Se muestra una fecha de entrega incorrecta al editar la entrega programada de artículos distintos.'
slug: se-muestra-una-fecha-de-entrega-incorrecta-al-editar-la-entrega-programada-de-articulos-distintos
status: PUBLISHED
createdAt: 2021-01-28T18:04:07.000Z
updatedAt: 2026-09-17T16:14:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-delivery-date-shown-when-editing-scheduled-delivery-of-distinct-items
locale: es
kiStatus: No Fix
internalReference: 328873
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Después de que el comprador selecciona fechas de entrega diferentes para dos artículos distintos, va al paso de pago y regresa para editar la entrega, las fechas se muestran incorrectamente en pantalla. Solo la visualización es incorrecta; el pedido conserva las fechas que se seleccionaron realmente.

## Simulación

1. Tener disponible la opción de entrega programada para dos artículos distintos.

2. Agregar ambos artículos al carrito.

3. Seleccionar la opción de entrega programada.

4. Seleccionar fechas de entrega diferentes para cada artículo; las fechas se muestran correctamente.

5. Guardar y ir al paso de pago.

6. Regresar para editar la información de entrega; ahora las fechas se muestran incorrectamente (en el caso reportado, el intervalo de 12 a 18 horas para el segundo artículo se mostraba incorrectamente).

## Workaround

N/A