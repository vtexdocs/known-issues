---
title: 'La promoción de envío gratuito se aplica a pedidos divididos fuera de las restricciones de la promoción.'
slug: la-promocion-de-envio-gratuito-se-aplica-a-pedidos-divididos-fuera-de-las-restricciones-de-la-promocion
status: PUBLISHED
createdAt: 2026-09-16T21:38:49.000Z
updatedAt: 2026-09-16T21:51:24.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: free-shipping-promotion-being-applied-on-split-orders-outside-promotion-restriction
locale: es
kiStatus: Fixed
internalReference: 1462228
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la promoción de envío gratuito, la cuenta puede configurar una restricción, por ejemplo, el método de envío.

En los enlaces de carrito con productos vendidos por diferentes vendedores, puede darse el caso de pedidos divididos. Algunos productos serán entregados por un vendedor y otros por otro.

Es común que en estos casos los métodos de envío de los vendedores sean diferentes, lo que significa que los pedidos divididos tendrán métodos de envío distintos.

El problema surge cuando la promoción de envío gratuito no valida la restricción del método de envío en los pedidos divididos. El resultado es que el envío será gratuito incluso para el pedido dividido con un método de envío diferente.

El resultado esperado es que solo los pedidos divididos con métodos de envío que coincidan con la restricción tengan envío gratuito.

## Simulación

1. Crea una promoción de envío gratuito con una restricción de método de envío.

2. Simula un carrito con productos vendidos por diferentes vendedores (pueden ser vendedores de marca blanca) que tengan diferentes métodos de envío.
3. Asegúrate de que uno de los vendedores utilice un método de envío que no esté sujeto a la restricción de la promoción.

4. Verifica que el envío gratuito se aplique a todo el carrito.

## Workaround

No hay solución alternativa.