---
title: 'Shopee Discrepancia en el importe de los gastos de envío en los pedidos gestionados por el vendedor'
slug: shopee-discrepancia-en-el-importe-de-los-gastos-de-envio-en-los-pedidos-gestionados-por-el-vendedor
status: PUBLISHED
createdAt: 2026-04-10T19:08:52.176Z
updatedAt: 2026-04-10T19:08:52.176Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-freight-value-mismatch-on-seller-logistics-orders
locale: es
kiStatus: Backlog
internalReference: 1391278
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los pedidos con logística del vendedor, cuando Shopee cubre los gastos de envío (campaña de envío gratuito), el valor del transporte pasa a ser cero. Sin embargo, VTEX no lo reconoce correctamente, por lo que el valor del envío que aparece en la tienda es incorrecto.
El valor total del pedido no parece verse afectado, ya que el campo utilizado ya incluye el descuento por envío. Al sumarlo al valor del envío de la tienda, el total final sigue coincidiendo.

## Simulación

1. Crea o identifica un pedido de logística del vendedor en Shopee en el que el marketplace cubra los gastos de envío (gastos de envío = 0 – campaña de envío gratuito).
2. Deja que el pedido se integre en VTEX.
3. Comprueba el valor de envío en VTEX.
4. Observa que el valor de los gastos de envío no refleja el valor esperado (debería ser cero, pero no lo es).

## Workaround

N/A.