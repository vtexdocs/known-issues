---
title: 'Mercado Livre Multi-Origen - pedidos asignados a stock inactivo'
slug: mercado-livre-multiorigen-pedidos-asignados-a-stock-inactivo
status: PUBLISHED
createdAt: 2026-05-07T22:32:34.000Z
updatedAt: 2026-11-12T21:49:16.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
locale: es
kiStatus: Fixed
internalReference: 1403557
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos de Mercado Livre se crearon en VTEX con una ubicación de stock deshabilitada en la configuración de Multi-Origin para la cuenta.

## Simulación

Cuenta VTEX integrada con Mercado Livre mediante Multi-Origin.

1. La asignación de stock no estaba configurada en Multi-Origin.

El pedido se creó en OMS utilizando stock de un almacén que no está correctamente asignado en Multi-Origin.

## Workaround

Una alternativa sería eliminar la política comercial de Mercado Livre de los almacenes que no estén activos en Multi-Origin.

De esta forma, el proceso de pago no los seleccionará, evitando que se creen pedidos con el almacén incorrecto.