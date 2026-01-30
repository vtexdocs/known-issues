---
title: 'Valor del pedido divergente entre el mercado y el vendedor al utilizar la anulación de precios y las promociones.'
slug: valor-del-pedido-divergente-entre-el-mercado-y-el-vendedor-al-utilizar-la-anulacion-de-precios-y-las-promociones
status: PUBLISHED
createdAt: 2026-01-30T19:41:32.636Z
updatedAt: 2026-01-30T19:41:32.636Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: divergent-order-value-between-marketplace-and-seller-while-using-price-override-and-promotions
locale: es
kiStatus: Backlog
internalReference: 756629
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Cuando el precio del artículo del vendedor _menos_ los descuentos del mercado tiene un valor negativo, no se puede aplicar íntegramente al precio del artículo a nivel del vendedor (no pueden tener un precio negativo), por lo que se considerará cero y afectará a los cálculos relacionados con el valor adicional y el valor total del pedido en el pedido de cumplimiento.

Esto ocurre cuando el mercado utiliza la función de anulación del precio del vendedor, generando valores más altos que los de la propia cuenta del vendedor, y luego lo combina con una promoción que aplica un descuento superior al precio original del vendedor.


#### Simulación

## Workaround

