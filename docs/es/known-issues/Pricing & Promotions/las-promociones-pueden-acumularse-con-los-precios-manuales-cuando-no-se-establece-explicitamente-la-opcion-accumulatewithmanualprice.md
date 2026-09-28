---
title: 'Las promociones pueden acumularse con los precios manuales cuando no se establece explícitamente la opción accumulateWithManualPrice.'
slug: las-promociones-pueden-acumularse-con-los-precios-manuales-cuando-no-se-establece-explicitamente-la-opcion-accumulatewithmanualprice
status: PUBLISHED
createdAt: 2026-09-28T16:41:03.000Z
updatedAt: 2026-09-28T16:41:03.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-may-accumulate-with-manual-prices-when-accumulatewithmanualprice-is-not-explicitly-set
locale: es
kiStatus: Backlog
internalReference: 1467018
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas promociones pueden aplicarse a artículos con precios manuales incluso cuando el campo `accumulateWithManualPrice` no está configurado explícitamente en la promoción.

Según el comportamiento actual del producto, las promociones de precio no deberían acumularse con los precios manuales por defecto. Sin embargo, cuando el campo es `null` o se omite, el motor de RnB no aplica esta restricción de forma consistente a todos los tipos de promoción.

El comportamiento real depende de los efectos de la promoción y de cómo se evalúa. Por lo tanto, las promociones que no deberían acumularse con los precios manuales aún pueden aplicarse a artículos con precios manuales.

## Simulación

1. Cree una promoción regular con un descuento de importe fijo basado en una fórmula.

2. Observe que la casilla de verificación `Permitir combinar con precios manuales` está desactivada en la configuración de la promoción.

3. Añada un producto elegible al carrito y cumpla las condiciones de elegibilidad de la promoción.

4. Verifique que la promoción se haya aplicado al artículo.

5. Envíe un precio manual para el mismo artículo.
6. Observa que la promoción permanece aplicada incluso después de que el artículo reciba el precio manual.

## Workaround

Configura explícitamente el campo `accumulateWithManualPrice` a través de la API de Promociones.

Para evitar que la promoción se acumule con los precios manuales, establece:

{ "accumulateWithManualPrice": false}

Utiliza el punto final de actualización de promociones para aplicar la configuración: Crea o actualiza la promoción o el impuesto. Esto permite que se aplique el comportamiento deseado sin depender del manejo predeterminado de un campo indefinido.