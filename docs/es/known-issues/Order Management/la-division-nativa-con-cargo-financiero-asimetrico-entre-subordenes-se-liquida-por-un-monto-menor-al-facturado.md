---
title: 'La división nativa con cargo financiero asimétrico entre subórdenes se liquida por un monto menor al facturado.'
slug: la-division-nativa-con-cargo-financiero-asimetrico-entre-subordenes-se-liquida-por-un-monto-menor-al-facturado
status: PUBLISHED
createdAt: 2026-10-02T20:46:00.000Z
updatedAt: 2026-10-02T20:46:00.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: native-split-with-asymmetric-financial-charge-across-suborders-settles-less-than-the-invoiced-amount
locale: es
kiStatus: Backlog
internalReference: 1469699
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En pedidos divididos de forma nativa (varios subpedidos que comparten una única transacción de pago) pagados a plazos con un cargo financiero (intereses), este cargo puede aplicarse mediante operaciones ChangeOrderV2 independientes, una por cada subpedido. Cuando el cargo resultante es **asimétrico** entre los subpedidos, el importe liquidado al facturar el primer subpedido puede ser **inferior al importe facturado**. El saldo restante de la transacción puede entonces no liquidarse automáticamente de forma repetida, dejando la transacción en estado de «Liquidación».

El valor de liquidación lo calcula el Sistema de Pedidos de Venta (SOS), no el proveedor de pagos. Se espera que el cálculo sea correcto solo cuando el cargo sea simétrico entre los subpedidos.

El equipo de ingeniería confirmó que se trata de un error. La solución requiere una importante refactorización del cálculo del valor proporcional y, por el momento, no hay una fecha estimada de entrega.

## Simulación

No existe una forma sencilla de reproducir el escenario.

## Workaround

No hay ninguna solución alternativa disponible.