---
title: 'Las promociones clasificadas por método de pago no aparecen en la página del producto'
slug: las-promociones-clasificadas-por-metodo-de-pago-no-aparecen-en-la-pagina-del-producto
status: PUBLISHED
createdAt: 2023-03-30T20:12:49.000Z
updatedAt: 2023-03-31T15:44:40.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotions-by-order-of-payment-methods-do-not-appear-on-the-product-page
locale: es
kiStatus: Backlog
internalReference: 781523
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página del producto muestra el precio del SKU solo con algunas promociones, sin incluir las condiciones específicas de los métodos de pago ni el número de cuotas. Estas condiciones solo se aplican durante el proceso de pago, una vez que el usuario ha elegido explícitamente utilizar una determinada forma de pago.

## Simulación

1. Crea una promoción que ofrezca un descuento del 5 % por pago mediante «boleto» (método de pago offline muy popular en Brasil).
2. Accede a la página del producto.
3. Observa que el valor mostrado no tiene en cuenta el descuento establecido. El descuento aparecerá tras seleccionar «boleto» como método de pago al finalizar la compra.

## Workaround

Esta situación se puede resolver fácilmente implementando un código JavaScript en el front-end que calcule el precio e incluya el porcentaje de descuento correspondiente, mostrando a continuación un elemento con este precio adicional en la página del producto.