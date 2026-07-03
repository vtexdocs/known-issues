---
title: 'Orden de pago Factura bancaria Boleto realizada MOIP'
slug: orden-de-pago-factura-bancaria-boleto-realizada-moip
status: PUBLISHED
createdAt: 2021-06-02T23:18:59.000Z
updatedAt: 2026-07-03T16:06:43.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: checkout-orderplaced-boleto-bank-invoice-moip
locale: es
kiStatus: Fixed
internalReference: 376951
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función `orderPlaced` incluye una función automática que inserta el PDF del "Boleto - Factura Bancaria" en un iframe dentro de la página del pedido finalizado.

Sin embargo, el tipo de pago MOIP no permite incrustar el archivo en otra página.

También se observa el siguiente error, que impide la visualización del boleto:

``debido a que su tipo MIME ('text/html') no es un tipo MIME compatible con la hoja de estilos, y la comprobación MIME estricta está habilitada.``

## Simulación

Se debe seleccionar la Factura Bancaria de tipo MOIP como método de pago para realizar una compra.

No se mostrará la Factura Bancaria de tipo MOIP, ya que no es posible visualizar el archivo en la página del pedido finalizado.

## Workaround

No existe una solución alternativa. La forma de evitarlo para quienes usan MOIP es ocultar el "Boleto - Factura Bancaria" mediante CSS.