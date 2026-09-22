---
title: 'Cálculo inconsistente del regalo al combinar SKU elegibles en la promoción Compre uno y llévese otro gratis.'
slug: calculo-inconsistente-del-regalo-al-combinar-sku-elegibles-en-la-promocion-compre-uno-y-llevese-otro-gratis
status: PUBLISHED
createdAt: 2026-04-20T17:25:36.000Z
updatedAt: 2026-09-22T21:51:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: inconsistent-gift-calculation-when-mixing-eligible-skus-in-buy-one-get-one-promotion
locale: es
kiStatus: Backlog
internalReference: 1395338
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las promociones de «Compra uno y llévate otro gratis» configuradas con varios SKU elegibles, el cálculo del regalo se vuelve inconsistente cuando distintos SKU cumplen individualmente con la cantidad mínima. En lugar de sumar el número de regalos elegibles por SKU, el sistema calcula la cantidad de regalos basándose en el **número mínimo de regalos en todos los SKU**, lo que puede generar resultados contraintuitivos, donde agregar más artículos elegibles reduce la cantidad de regalos otorgados.

## Simulación

1. Configura una promoción de 2x1 con:

- Varios SKU elegibles

- Cantidad mínima = 3 unidades por SKU

- Multiplicador de regalos activado

- Las mismas reglas se aplican a todos los SKU

2. Prueba los siguientes escenarios de compra:

- 3 unidades del SKU A → 1 regalo ✅

- 6 unidades del SKU A → 2 regalos ✅

- 6 unidades del SKU A + 2 unidades del SKU B → 2 regalos ✅

- 6 unidades del SKU A + 3 unidades del SKU B → 1 regalo ❌

- 9 unidades del SKU A → 3 regalos ✅

- 9 unidades del SKU A + 3 unidades del SKU B → 1 regalo ❌

- 9 unidades del SKU A + 6 unidades del SKU B → 2 regalos ❌

Observa que:

- Cuando un segundo SKU alcanza la cantidad mínima, comienza a participar en el cálculo.

- El sistema calcula entonces la cantidad de regalos utilizando el **valor mínimo de ocurrencias en todos los SKU**, en lugar de sumarlos.

## Workaround

No existe una solución alternativa completa. Como medida de mitigación, los comerciantes pueden:

- Evitar combinar varios SKU bajo la misma promoción de «Compra uno y llévate otro gratis» al usar reglas basadas en la cantidad, o

- Dividir las promociones por SKU para evitar la interacción entre SKU en la lógica de cálculo de regalos.