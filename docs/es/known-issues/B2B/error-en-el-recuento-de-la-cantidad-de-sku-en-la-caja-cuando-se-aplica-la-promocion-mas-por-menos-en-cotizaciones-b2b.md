---
title: 'Error en el recuento de la cantidad de SKU en la caja cuando se aplica la promoción Más por Menos en Cotizaciones B2B.'
slug: error-en-el-recuento-de-la-cantidad-de-sku-en-la-caja-cuando-se-aplica-la-promocion-mas-por-menos-en-cotizaciones-b2b
status: PUBLISHED
createdAt: 2025-08-26T19:08:48.629Z
updatedAt: 2025-08-26T19:08:48.629Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
locale: es
kiStatus: Unknown
internalReference: 1281922
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación



- Cree un presupuesto con 12 unidades de una SKU a la que se ha aplicado una promoción de más por menos por cada 10 unidades.
- La aplicación Presupuestos B2B dividirá la SKU en 1 artículo con 10 unidades (y la promoción aplicada) y 1 artículo con 2 unidades (con el precio total sin promoción).
- Pasar por caja.
- El primer artículo con 10 unidades aparecerá en la caja, el segundo (con 2 unidades) no.

## Workaround


NA


