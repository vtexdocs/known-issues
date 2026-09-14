---
title: 'Al compartir la transacción de órdenes divididas con el cambio de vendedor, el flujo de estado está roto.'
slug: al-compartir-la-transaccion-de-ordenes-divididas-con-el-cambio-de-vendedor-el-flujo-de-estado-esta-roto
status: PUBLISHED
createdAt: 2024-08-16T00:15:19.000Z
updatedAt: 2026-09-14T23:02:38.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: split-orders-sharing-transaction-with-change-seller-the-status-flow-is-broken
locale: es
kiStatus: Fixed
internalReference: 1082298
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos divididos que comparten la transacción con vendedores intermedios no pueden pasar a la fase de facturado. Aunque todos los pedidos de los vendedores intermedios se cancelan correctamente y el último vendedor se factura, el pedido del marketplace no puede completar el flujo y pasar a la fase de facturado. Es posible que, tras el tiempo de espera, termine cancelándose.

Esto ocurre porque la pasarela de pago con el conector utilizado no puede liquidar solo la parte del pago correspondiente al vendedor que realizó el pago completo del pedido.

Cuando el otro pedido cambia de vendedor, intenta realizar un paso que se comunica con la pasarela para informar de este cambio (asociado al minicarrito). Sin embargo, para la pasarela, el pago ya se ha capturado por completo debido al error en esta llamada, y el pedido no puede procesarse ni avanzar en el flujo de trabajo.

## Simulación

Pedidos divididos que comparten la transacción, y uno de ellos requiere más de un vendedor intermedio.

Una vez liquidada la transacción, se liquidará el valor total.
Por lo tanto, al finalizar todo el proceso, el mercado original, a partir del pedido dividido con cambio de vendedor, no se actualiza a facturado y se cancela tras un tiempo de espera agotado.

## Workaround

Lamentablemente, actualmente no existe una solución alternativa para este caso.