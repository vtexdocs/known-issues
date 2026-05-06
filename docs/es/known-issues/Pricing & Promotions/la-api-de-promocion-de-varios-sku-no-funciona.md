---
title: 'La API de promoción de varios SKU no funciona'
slug: la-api-de-promocion-de-varios-sku-no-funciona
status: PUBLISHED
createdAt: 2023-01-09T21:17:29.000Z
updatedAt: 2024-10-04T16:47:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: multiple-sku-promotion-api-not-working
locale: es
kiStatus: No Fix
internalReference: 729990
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

A pesar de que las API y el correo electrónico devuelven información de éxito, la promoción no se crea en el panel de administración (API de creación) ni se actualiza realmente (API de actualización).

Documentación de la API:
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/import/calculatorConfiguration
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#put-/api/rnb/pvt/import/calculatorConfiguration/-promotionId-

## Simulación

1. Seguí los pasos de la documentación mencionada anteriormente para crear/actualizar una promoción de varias referencias;
2. Recibí un correo electrónico de confirmación sobre la creación de la promoción o un código de estado de éxito en la API, como 202.
3. Comprobé en el panel de administración que la promoción nunca se había creado ni actualizado.

## Workaround

No hay solución alternativa.