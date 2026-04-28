---
title: 'Capacidad de entrega con (cero) pedidos, lo que permite seleccionar el transportista al finalizar la compra'
slug: capacidad-de-entrega-con-cero-pedidos-lo-que-permite-seleccionar-el-transportista-al-finalizar-la-compra
status: PUBLISHED
createdAt: 2026-04-28T14:04:13.053Z
updatedAt: 2026-04-28T14:04:13.053Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: delivery-capacity-as-zero-orders-allowing-schedule-carrier-at-checkout
locale: es
kiStatus: Fixed
internalReference: 471612
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Existe una posible configuración relacionada con la capacidad de entrega (pedidos o SKU).

Cuando la configuración es (cero) pedidos para el intervalo de tiempo, es posible crear un pedido y programarlo para un intervalo no deseado.

## Simulación

Configure las condiciones de la política de envíos con (CERO PEDIDOS) como capacidad para cualquier día de la semana.
El proceso de pago permite crear pedidos programados para esa franja horaria, durante la franja horaria creada como (cero pedidos)

## Workaround

La solución alternativa para esto es eliminar la programación de la capacidad de entrega cuando el valor deseado es 0 (CERO). Si no desea que se cree un pedido en esta franja horaria, no es necesario que la configure como (cero).