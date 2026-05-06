---
title: 'El proceso de pago no actualiza los impuestos teniendo en cuenta el vendedor correcto al combinar la información del carrito'
slug: el-proceso-de-pago-no-actualiza-los-impuestos-teniendo-en-cuenta-el-vendedor-correcto-al-combinar-la-informacion-del-carrito
status: PUBLISHED
createdAt: 2023-02-24T20:16:21.000Z
updatedAt: 2024-07-03T20:21:10.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-pipeline-doesnt-update-taxes-considering-the-correct-seller-when-merging-cart-information
locale: es
kiStatus: Backlog
internalReference: 759842
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando hay dos vendedores en el método «SellerElection», uno de ellos se selecciona por tener el precio más barato para el envío y el otro por tener el precio más barato para la recogida en punto de entrega, la fusión de la información del carrito no actualiza los impuestos al seleccionar la recogida en punto de entrega, lo que provoca un error al finalizar la compra

## Simulación

- Configura dos vendedores: uno es el más barato para el envío y el otro para la recogida en punto de entrega.
- Configura los impuestos _solo_ para el vendedor que gestionará la recogida en punto de entrega o establece impuestos diferentes entre ambos.
- Realiza una simulación de pago y verás que no aparecerán impuestos en «priceTags» y que no se completará la compra.

## Workaround

provisional**
N/A