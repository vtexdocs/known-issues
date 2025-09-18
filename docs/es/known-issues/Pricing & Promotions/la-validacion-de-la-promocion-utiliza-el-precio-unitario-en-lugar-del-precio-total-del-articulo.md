---
title: La validación de la promoción utiliza el precio unitario en lugar del precio total del artículo
slug: la-validacion-de-la-promocion-utiliza-el-precio-unitario-en-lugar-del-precio-total-del-articulo
status: PUBLISHED
createdAt: 2025-09-18T20:20:43.426Z
updatedAt: 2025-09-18T20:20:43.426Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-validation-uses-unit-price-instead-of-total-item-price
locale: es
kiStatus: Backlog
internalReference: 1081841
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las promociones que dependen de un importe mínimo o máximo pueden fallar cuando se aplican a artículos con un multiplicador unitario. El sistema evalúa el precio unitario ajustado (precio base × multiplicador) en lugar del valor total del artículo, lo que provoca incoherencias.


#### Simulación



1. Configure una promoción de envío gratuito con un umbral de valor mínimo del carrito.
2. 2. Añada un producto al carro con un precio basado en un multiplicador de unidades (por ejemplo, precio por kilogramo) en lugar de un precio fijo.
3. Asegúrese de que el valor total de los artículos de la cesta supera el valor mínimo requerido para que se aplique la promoción. Sin embargo, el valor real del artículo, teniendo en cuenta el multiplicador unitario, debe hacer que el valor total del carrito sea inferior al requisito mínimo de la promoción.
4. Compruebe que la promoción no se aplica cuando el valor total de la cesta supera el mínimo requerido debido al multiplicador de unidades del artículo.

## Workaround


Actualmente, no hay ninguna solución disponible para este problema.



