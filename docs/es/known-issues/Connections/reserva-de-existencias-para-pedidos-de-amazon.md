---
title: 'Reserva de existencias para pedidos de Amazon'
slug: reserva-de-existencias-para-pedidos-de-amazon
status: PUBLISHED
createdAt: 2022-10-03T18:46:51.000Z
updatedAt: 2024-10-08T14:34:37.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-orders-stock-reservation
locale: es
kiStatus: Backlog
internalReference: 670572
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se crea un pedido en Amazon Marketplace y, tras un tiempo, se cancela antes de que se haya pagado, la reserva de stock permanece activa en VTEX.

## Simulación

El pedido no aparecerá en el menú «VTEX Order Bridge», pero la reserva seguirá activa.

## Workaround

provisional**
Como solución provisional, el vendedor puede cancelar la reserva mediante la API de logística.