---
title: 'Los cambios en el pedido pueden provocar que los importes de captura, cancelación y reembolso no coincidan con el pedido.'
slug: los-cambios-en-el-pedido-pueden-provocar-que-los-importes-de-captura-cancelacion-y-reembolso-no-coincidan-con-el-pedido
status: PUBLISHED
createdAt: 2026-10-02T20:46:00.000Z
updatedAt: 2026-10-16T20:15:01.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-changes-can-leave-capture-cancellation-and-refund-amounts-out-of-sync-with-the-order
locale: es
kiStatus: Backlog
internalReference: 1469699
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se modifica un pedido mediante una Orden de Cambio (Modificación de Pedido), por ejemplo, eliminando artículos, reduciendo cantidades o precios, o aplicando un cargo financiero, el Sistema de Pedidos de Venta (SOS) recalcula el importe que debe cancelarse, cobrarse o reembolsarse en la transacción de pago. En algunos casos, este recálculo mezcla importes anteriores y posteriores al cambio, y los valores enviados al proveedor de pagos ya no coinciden con el pedido ni con la factura.

Esto afecta principalmente a las **cancelaciones parciales** (cambios que reducen el valor del pedido); el escenario 4 es la excepción e implica un cambio que añade un cargo financiero. Los escenarios conocidos son:

1. **No se devuelven intereses en caso de cancelación parcial (pagos a plazos con intereses).** Cuando se elimina un artículo de un pedido pagado a plazos con intereses, SOS cancela únicamente el valor del artículo **sin** los intereses. El comprador continúa pagando intereses por un artículo que ya no forma parte del pedido. Ejemplo: pedido de 100,00, transacción de 127,30 (27,3 % de interés), se elimina un artículo de 10,00 → se cancelan 10,00 en lugar de 12,73. Afecta a las órdenes de cambio V1 y V2.

2. **Importe inferior al de la factura, o ausencia de importe, tras una cancelación parcial.** Cuando se factura el pedido tras una cancelación parcial, el importe ya cancelado por el cambio se deduce por segunda vez del importe. El importe final es inferior al de la factura o, si el resultado es cero o negativo, no se envía ningún importe (no se muestra ningún error). La factura de salida se emite con normalidad; solo el importe es incorrecto. En consecuencia, el proveedor de pagos rechaza los reembolsos de devoluciones posteriores porque superan el importe capturado. Si el pedido incluye más de una transacción, la cancelación de una de ellas puede deducirse de la captura de la otra. Esto ocurre en pedidos sin intereses (valor de referencia igual al importe del pago), independientemente del número de cuotas. Verificado con la Orden de Cambio V2.

3. **Captura superior a la factura tras una cancelación parcial.** En algunos pedidos, la captura tras una cancelación parcial se calcula como si el pedido tuviera intereses, y el importe capturado es superior a la factura.

4. **División nativa con un cargo financiero aplicado de forma desigual entre subpedidos.**

** En pedidos divididos de forma nativa (varios subpedidos que comparten una transacción) con un cargo financiero aplicado mediante órdenes de cambio independientes por subpedido (incremento), la captura del primer subpedido facturado puede ser inferior al importe facturado cuando el cargo es asimétrico. El saldo restante puede fallar repetidamente al capturarse automáticamente, dejando la transacción en estado de liquidación. En este caso, no se produce ninguna cancelación.

5. **Factura de compensación o reembolso bloqueada tras una cancelación parcial.** El reembolso generado por la modificación del pedido se resta por segunda vez al calcular el importe disponible para reembolso. El envío de una factura de compensación/entrada con reembolso falla con el error `400 BAD_REQUEST — "No se puede utilizar el reembolso de restitución superior a 0.0"`.

Los importes de captura, cancelación y reembolso son calculados por SOS, no por el proveedor de pagos. El equipo de ingeniería confirmó que estos escenarios son errores. Se trata de casos similares (valores con bases diferentes combinados en los cálculos de cancelación parcial y captura, en distintas rutas de código) y se espera que se solucionen mediante la refactorización de dicho cálculo. Por el momento, no hay una fecha estimada de finalización.

## Simulación

Escenario 1: Crear un pedido pagado a plazos con intereses, eliminar un artículo mediante la Modificación del pedido y comparar el valor cancelado en la transacción con el valor del artículo más su parte de los intereses.

Escenario 2: Crear un pedido sin intereses, eliminar un artículo mediante la Modificación del pedido y, a continuación, facturar los artículos restantes. Comparar el importe capturado en la transacción con el valor de la factura.

Escenario 5: Crear un pedido de 100,00 con dos artículos (A = 70,00, B = 30,00), eliminar el artículo A mediante la Modificación del pedido e intentar procesar un reembolso a través de la Devolución de mercancía.

Los escenarios 3 y 4 no tienen pasos de reproducción sencillos.

## Workaround

No hay ninguna solución alternativa disponible.