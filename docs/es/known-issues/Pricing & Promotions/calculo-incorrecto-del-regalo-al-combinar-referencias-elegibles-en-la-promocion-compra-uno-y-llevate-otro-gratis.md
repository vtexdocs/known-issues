---
title: 'Cálculo incorrecto del regalo al combinar referencias elegibles en la promoción «Compra uno y llévate otro gratis»'
slug: calculo-incorrecto-del-regalo-al-combinar-referencias-elegibles-en-la-promocion-compra-uno-y-llevate-otro-gratis
status: PUBLISHED
createdAt: 2026-04-20T14:26:21.099Z
updatedAt: 2026-04-20T14:26:21.099Z
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

En las promociones «Compre uno y llévese otro gratis» configuradas con varias referencias elegibles, el cálculo de los regalos se vuelve inconsistente cuando diferentes referencias cumplen individualmente la cantidad mínima. En lugar de sumar el número de ocasiones en las que se puede obtener un regalo por cada referencia, el sistema calcula el número de regalos basándose en el **número mínimo de ocasiones entre todas las referencias**, lo que puede dar lugar a resultados contrarios a lo que cabría esperar, en los que añadir más artículos elegibles reduce el número de regalos concedidos.

## Simulación

1. Configura una promoción «Compra uno y llévate otro gratis» con:
  - Varias referencias elegibles
  - Cantidad mínima = 3 unidades por referencia
  - Multiplicador de regalos activado
  - Las mismas reglas aplicadas a todas las referencias
2. Prueba los siguientes escenarios de carrito:
  - 3 unidades de la referencia A → 1 regalo ✅
  - 6 unidades de SKU A → 2 regalos ✅
  - 6 unidades de SKU A + 2 unidades de SKU B → 2 regalos ✅
  - 6 unidades de SKU A + 3 unidades de SKU B → 1 regalo ❌
  - 9 unidades de SKU A → 3 regalos ✅
  - 9 unidades de SKU A + 3 unidades de SKU B → 1 regalo ❌
  - 9 unidades de SKU A + 6 unidades de SKU B → 2 regalos ❌
Observe que:

- Cuando una segunda SKU alcanza la cantidad mínima, comienza a participar en el cálculo.
- A continuación, el sistema calcula el número de regalos utilizando el **valor mínimo de ocurrencias entre los SKU**, en lugar de sumarlas.

## Workaround

No existe una solución alternativa completa. Como medida de mitigación, los comerciantes pueden:

- Evitar mezclar varias SKU en la misma condición de promoción «Compre uno y llévese otro gratis» cuando utilicen reglas basadas en la cantidad, o
- Dividir las promociones por SKU para evitar la interacción entre SKU en la lógica de cálculo de los obsequios