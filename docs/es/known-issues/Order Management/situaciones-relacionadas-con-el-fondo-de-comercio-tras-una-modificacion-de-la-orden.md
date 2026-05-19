---
title: 'Situaciones relacionadas con el fondo de comercio tras una modificación de la orden'
slug: situaciones-relacionadas-con-el-fondo-de-comercio-tras-una-modificacion-de-la-orden
status: PUBLISHED
createdAt: 2026-05-19T22:54:03.000Z
updatedAt: 2026-05-19T22:54:46.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: scenarios-involving-goodwill-following-an-order-modification
locale: es
kiStatus: Backlog
internalReference: 1409506
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hemos identificado un problema en el escenario «Goodwill» —concretamente en los casos relacionados con «modificaciones de pedidos»— en el que los importes de los reembolsos se calculan sumando *todos* los recibos `refundPayment` asociados al pedido, sin distinguir entre los que se derivan de una «modificación de pedido» y los que proceden de un reembolso independiente.
El problema radica en que el `orderValueProportionalToTransaction` ya se calcula en función del valor posterior a la modificación (es decir, el valor *después* del cambio), que ya incorpora el descuento aplicado durante la modificación del pedido. En consecuencia, el recibo de reembolso generado por la modificación del pedido se resta por segunda vez, lo que da lugar a una doble contabilización.

Este comportamiento impide que las cuentas envíen una factura de entrada/de buena voluntad, lo que provoca el siguiente error:

400 BAD_REQUEST
«No se puede utilizar el reembolso de restitución superior a 0,0»

## Simulación

De hecho, es posible simular esto creando un pedido con un valor total de 100,00 $, que contenga dos artículos —A y B— donde el artículo A cuesta 70,00 $ y el artículo B cuesta 30,00 $. Elimine el artículo A mediante la modificación del pedido y, a continuación, intente procesar un reembolso utilizando Goodwill.

## Workaround

Por el momento no disponemos de ninguna solución alternativa.