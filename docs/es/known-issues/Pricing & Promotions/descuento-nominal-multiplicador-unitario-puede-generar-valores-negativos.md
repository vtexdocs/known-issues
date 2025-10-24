---
title: 'Descuento nominal + Multiplicador unitario puede generar valores negativos'
slug: descuento-nominal-multiplicador-unitario-puede-generar-valores-negativos
status: PUBLISHED
createdAt: 2025-10-16T19:52:23.286Z
updatedAt: 2025-10-16T19:52:23.286Z
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


Cuando se utiliza un descuento de tipo "valor nominal", si hay múltiples valores afectados por un mismo descuento en el mismo carrito, este descuento se distribuye proporcionalmente entre los artículos.

Por ejemplo, supongamos que tengo `un descuento nominal de 50$` en un pedido que se aplica a todos los artículos de mi cesta, que está compuesta por los siguientes artículos y precios originales:

- Artículo A, cuesta 100 $ --> con un multiplicador de 0,01 unidades
- 2x Artículo B, cuesta 200


---> Total del pedido (sin el descuento) = $500

El descuento de 100 $ se distribuirá según el precio original de los artículos, es decir

A --> 100/500 --> -$50*1/5 = -$10
B --> 200/500 --> -$50*2/5 = -$20
B --> 200/500 --> -$50*2/5 = -$20

Sin embargo, el precio del artículo A es en realidad 100*0,01 debido a su multiplicador unitario, por lo que el cálculo final de su precio en el pedido será: $1-$50 = -$49, que es un precio negativo.

Aunque esto no afecta al cálculo del precio final del pedido (porque el precio deducido del descuento seguirá siendo -20$), puede afectar a las integraciones ERP.




#### Simulación


Cree un pedido en el que haya 2+ artículos, uno con un multiplicador unitario de valor < 1 (idealmente un valor muy pequeño, como 0,01) y otro(s) sin multiplicador unitario.

A continuación, cree una promoción de descuento nominal válida para todos los artículos del carrito.

El descuento se distribuirá teniendo en cuenta el precio original del artículo con el multiplicador unitario y posiblemente su precio sea negativo.

## Workaround


Utilizar otros tipos de promoción para distribuir el descuento.



