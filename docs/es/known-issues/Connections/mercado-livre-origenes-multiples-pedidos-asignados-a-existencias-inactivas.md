---
title: 'Mercado Livre Orígenes múltiples: pedidos asignados a existencias inactivas'
slug: mercado-livre-origenes-multiples-pedidos-asignados-a-existencias-inactivas
status: PUBLISHED
createdAt: 2026-05-07T22:32:34.000Z
updatedAt: 2026-05-07T22:32:34.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-multiorigin-orders-allocated-to-inactive-stock
locale: es
kiStatus: Backlog
internalReference: 1403557
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se crearon pedidos de Mercado Livre en VTEX asignados a una ubicación de stock que estaba desactivada en la configuración de Multi-Origin de la cuenta.

## Simulación

Cuenta de VTEX integrada con Mercado Livre mediante Multi-Origin.

1. La asignación de stock no estaba configurada en Multi-Origin.
El pedido se creó en OMS utilizando stock de un almacén que no está correctamente asignado en Multi-Origin.

## Workaround

Una alternativa sería eliminar la política comercial de Mercado Livre de los muelles que no están activos en Multi-Origin.
De esta forma, el proceso de pago no los seleccionará, lo que evitará que se creen pedidos con el almacén incorrecto.