---
title: 'Shopee Discrepancia en el valor del flete en los pedidos de logística del vendedor'
slug: shopee-discrepancia-en-el-valor-del-flete-en-los-pedidos-de-logistica-del-vendedor
status: PUBLISHED
createdAt: 2026-04-10T22:08:20.000Z
updatedAt: 2026-06-30T21:38:19.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-freight-value-mismatch-on-seller-logistics-orders
locale: es
kiStatus: Fixed
internalReference: 1391278
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los pedidos de logística del vendedor, cuando Shopee cubre el costo de envío (campaña de envío gratuito), el valor del flete se convierte en cero. Sin embargo, VTEX no lo reconoce correctamente, por lo que el valor del envío en la tienda resulta incorrecto.

El valor total del pedido no parece verse afectado, ya que el campo utilizado ya incluye el descuento de envío. Al combinarlo con el valor de envío de la tienda, el total final coincide.

## Simulación

1. Cree o identifique un pedido de logística del vendedor en Shopee donde la plataforma cubra el costo de envío (flete = 0 – campaña de envío gratuito).

2. Integre el pedido en VTEX.

3. Verifique el valor del envío en VTEX.

4. Observe que el valor del flete no refleja el valor esperado (debería ser cero, pero no lo es).

## Workaround

No aplica.