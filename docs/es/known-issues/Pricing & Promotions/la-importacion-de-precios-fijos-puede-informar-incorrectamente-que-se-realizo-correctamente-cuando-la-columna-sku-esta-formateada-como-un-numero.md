---
title: 'La importación de precios fijos puede informar incorrectamente que se realizó correctamente cuando la columna SKU está formateada como un número.'
slug: la-importacion-de-precios-fijos-puede-informar-incorrectamente-que-se-realizo-correctamente-cuando-la-columna-sku-esta-formateada-como-un-numero
status: PUBLISHED
createdAt: 2026-09-01T00:05:14.000Z
updatedAt: 2026-09-01T00:05:14.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: fixed-prices-import-may-incorrectly-report-success-when-sku-column-is-formatted-as-a-number
locale: es
kiStatus: Backlog
internalReference: 1454505
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al importar precios fijos mediante una hoja de cálculo donde la columna SKU está formateada como número, la importación puede comportarse de forma inesperada.

Se han identificado dos comportamientos:

- El SKU puede guardarse incorrectamente con un sufijo decimal, como `77,0`, en lugar del valor esperado.

- Si la hoja de cálculo contiene un error de validación, esta puede fallar silenciosamente para el artículo afectado. El informe de importación puede mostrar incorrectamente un estado de "OK", aunque el precio fijo no se haya guardado.

Esto puede generar confusión, ya que el vendedor recibe un informe de importación correcto, pero el precio fijo correspondiente no se actualiza en el panel de administración.

## Simulación

1. Prepare una hoja de cálculo para importar precios fijos.

2. Formatee la columna SKU como número en lugar de texto/cadena.

3. Incluya un precio fijo válido para importar.

4. Importe la hoja de cálculo mediante el flujo de importación de precios fijos.
5. Verifique el resultado de la importación y el precio fijo correspondiente en el panel de administración.

En los casos en que el SKU se interpreta como un valor numérico, puede guardarse con un sufijo decimal.

El problema puede agravarse si la hoja de cálculo también contiene un error de validación de entrada. En este caso, el artículo afectado puede fallar la validación sin que el error se refleje correctamente en el resultado de la importación, aunque el informe siga mostrando **"OK"**.

##

## Workaround

Antes de importar la hoja de cálculo, asegúrese de que la **columna SKU esté formateada como texto/cadena**, en lugar de como número.

Después de la importación, los comerciantes también deben validar los precios fijos actualizados en el panel de administración, en lugar de basarse exclusivamente en el informe de importación.

Esta solución alternativa ayuda a evitar el escenario identificado en la investigación mientras se resuelve el problema subyacente de la validación.