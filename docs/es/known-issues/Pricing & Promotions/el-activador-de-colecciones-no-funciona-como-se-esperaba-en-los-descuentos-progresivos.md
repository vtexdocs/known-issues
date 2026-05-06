---
title: 'El activador de colecciones no funciona como se esperaba en los descuentos progresivos'
slug: el-activador-de-colecciones-no-funciona-como-se-esperaba-en-los-descuentos-progresivos
status: PUBLISHED
createdAt: 2023-11-06T16:40:39.000Z
updatedAt: 2023-11-06T16:42:40.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: collections-trigger-not-working-as-expected-on-progressive-discounts
locale: es
kiStatus: Backlog
internalReference: 930849
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al crear una promoción de descuento progresivo, el cliente puede configurar el desencadenante por colección, por una lista de SKU o por ambos.

Sin embargo, cuando se configuran ambos en la promoción, la condición que debería ser que la promoción se activara por la colección o por la lista de SKU se comporta, en realidad, como si solo la lista de SKU fuera el desencadenante.

## Simulación

1. Crea una promoción de descuento progresivo;
2. En los desencadenantes de la promoción, seleccione una colección y una lista de SKU con un SKU que no pertenezca a la colección;
3. Compruebe en el carrito que la promoción solo está activa cuando el SKU que pertenece a la lista de SKU está presente.

## Workaround

No existe ninguna solución alternativa para habilitar ambos desencadenantes al mismo tiempo.