---
title: 'Dafiti El interés de las cuotas aumenta incorrectamente el precio de venta del artículo en los pedidos de Dafiti.'
slug: dafiti-el-interes-de-las-cuotas-aumenta-incorrectamente-el-precio-de-venta-del-articulo-en-los-pedidos-de-dafiti
status: PUBLISHED
createdAt: 2026-07-01T18:24:46.000Z
updatedAt: 2026-07-01T18:24:46.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: dafiti-installment-interest-incorrectly-increases-item-sellingprice-in-dafiti-orders
locale: es
kiStatus: Backlog
internalReference: 1428531
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los pedidos de Dafiti que incluyen intereses a plazos, el conector distribuye el "Acréscimo DFT" (la diferencia entre lo que Dafiti cobró al cliente y el total calculado por VTEX) como etiquetas de precio (`priceTags`) en el marketplace entre los artículos del pedido. Esto provoca que el `sellingPrice` de cada artículo se infle por encima del precio real del producto (campo `price`), generando una discrepancia entre el valor fiscal del pedido y el valor utilizado para la facturación y las devoluciones, lo que da lugar a una divergencia entre la factura de salida (NF de saída) y la factura de devolución (NF de devolução).

## Simulación

**Simulación**

1. Realice un pedido a través de Dafiti con los intereses a plazos activados.

2. Recupere el pedido a través de OM:
3. Observe que el `sellingPrice` es mayor que el `price`; la diferencia corresponde al "Acréscimo DFT" distribuido entre los artículos.
4. Confirme la entrada "Acréscimo DFT" en el array `totals` del pedido.

## Workaround

N/A