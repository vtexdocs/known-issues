---
title: 'PlaceOrder genera valores erróneos de descuento y gastos de envío entre los artículos que aparecen más de una vez'
slug: placeorder-genera-valores-erroneos-de-descuento-y-gastos-de-envio-entre-los-articulos-que-aparecen-mas-de-una-vez
status: PUBLISHED
createdAt: 2023-01-12T19:11:51.000Z
updatedAt: 2023-02-13T20:27:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: placeorder-generating-wrong-discount-and-shipping-values-between-items-that-appear-more-than-once
locale: es
kiStatus: Backlog
internalReference: 732529
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando en la solicitud de creación de un pedido se declara el mismo artículo más de una vez y es necesario indicar precios o valores de descuento diferentes para las distintas unidades del artículo, el servicio de pago sumará todas las cantidades de un mismo artículo y aplicará únicamente las condiciones del primer artículo a todas ellas. Esto generará un precio total, un descuento e incluso unos gastos de envío incorrectos.

Un ejemplo rápido de este escenario es cuando se aplica una promoción de «más por menos» en una solicitud de pedido externo, o incluso cuando esta condición se da a nivel del marketplace en un escenario de inventario omnicanal multinivel (MOI).

## Simulación

- Accede a una cuenta de marketplace que cuente con vendedores habituales que utilicen la relación multinivel (MOI)
- Añada un producto que tenga una promoción «más por menos» y realice el pedido
- Compruebe el precio total (descuentos y gastos de envío) en el vendedor

Esta es solo una forma más sencilla de simularlo, pero también puede utilizar la API de realización de pedidos

## Workaround

N/A