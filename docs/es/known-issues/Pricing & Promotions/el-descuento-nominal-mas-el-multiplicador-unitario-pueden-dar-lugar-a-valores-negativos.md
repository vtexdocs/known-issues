---
title: 'El descuento nominal más el multiplicador unitario pueden dar lugar a valores negativos'
slug: el-descuento-nominal-mas-el-multiplicador-unitario-pueden-dar-lugar-a-valores-negativos
status: PUBLISHED
createdAt: 2023-07-24T19:13:35.000Z
updatedAt: 2023-07-25T16:50:28.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-unit-multipler-may-generate-negative-values
locale: es
kiStatus: Backlog
internalReference: 867838
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se utiliza un descuento de «valor nominal», si hay varios valores afectados por un mismo descuento en el mismo carrito, dicho descuento se distribuye proporcionalmente entre los artículos.

Por ejemplo, supongamos que tengo `un descuento nominal de 50 $` en un pedido que se aplica a todos los artículos de mi carrito, el cual está compuesto por los siguientes artículos y precios originales:

- Artículo A, cuesta 100 $ --> con un multiplicador de 0,01
- 2 unidades del artículo B, cuestan 200 $


---> Total del pedido (sin el descuento) = 500 $

El descuento de 100 $ se distribuirá según el precio original de los artículos, es decir:

A --> 100/500 --> -50 $ * 1/5 = -10 $
B --> 200/500 --> -50 $ * 2/5 = -20 $
B --> 200/500 --> -50 $ * 2/5 = -20 $

Sin embargo, el precio del artículo A es en realidad 100 * 0,01 debido a su multiplicador unitario, por lo que el cálculo final de su precio en el pedido será: 1 $ - 50 $ = -49 $, lo que supone un precio negativo.

Aunque esto no afecta al cálculo del precio final del pedido (ya que el precio deducido del descuento seguirá siendo -20 $), puede afectar a las integraciones con ERP.

## Simulación

Crea un pedido en el que haya  2 o más artículos, uno con un multiplicador unitario de valor < 1 (idealmente un valor muy pequeño, como 0,01) y otros sin multiplicador unitario.

A continuación, crea una promoción de descuento nominal válida para todos los artículos del carrito.

El descuento se distribuirá teniendo en cuenta el precio original del artículo con el multiplicador unitario y puede dar lugar a que su precio sea negativo

## Workaround

Utilizar otros tipos de promoción para distribuir el descuento.