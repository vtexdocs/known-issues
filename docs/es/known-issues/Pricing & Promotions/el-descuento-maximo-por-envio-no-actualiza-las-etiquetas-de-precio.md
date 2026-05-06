---
title: 'El descuento máximo por envío no actualiza las etiquetas de precio'
slug: el-descuento-maximo-por-envio-no-actualiza-las-etiquetas-de-precio
status: PUBLISHED
createdAt: 2023-09-20T17:54:46.000Z
updatedAt: 2023-10-02T18:20:32.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: max-shipping-discount-not-updating-pricetags
locale: es
kiStatus: Backlog
internalReference: 904190
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

##
El descuento máximo en gastos de envío no se refleja en las etiquetas de precio; cuando el vendedor intenta calcular el impuesto, el campo «chk» no contiene el valor necesario para tener en cuenta el descuento en el importe final del impuesto.

## Simulación

Crea un descuento máximo en gastos de envío y un impuesto;
simula un carrito con ambos y verás que la etiqueta de precio no se rellena.

## Workaround

provisional**
N/A