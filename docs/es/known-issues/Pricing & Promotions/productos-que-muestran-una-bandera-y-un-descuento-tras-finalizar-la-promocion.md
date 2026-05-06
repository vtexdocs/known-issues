---
title: 'Productos que muestran una bandera y un descuento tras finalizar la promoción'
slug: productos-que-muestran-una-bandera-y-un-descuento-tras-finalizar-la-promocion
status: PUBLISHED
createdAt: 2021-06-18T19:26:09.000Z
updatedAt: 2025-07-01T16:17:55.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: products-showing-flag-and-discount-after-promotion-ended
locale: es
kiStatus: Backlog
internalReference: 383911
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, los indicadores de promoción y los descuentos siguen apareciendo en la página de detalles del producto (PLP) y en la página de producto (PDP) después de la fecha de caducidad de la promoción. Esto ocurre porque la promoción no activa la reindexación del producto, lo que da lugar a una visualización incorrecta del descuento.

## Simulación

1- Crea una promoción con un indicador
2- Establece una fecha de caducidad
3- Comprueba que la promoción sigue activa en PLP y PDP

## Workaround

Reindexa los productos incluidos en la promoción.