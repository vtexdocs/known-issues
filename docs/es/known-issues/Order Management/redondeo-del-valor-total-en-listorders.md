---
title: 'Redondeo del valor total en ListOrders'
slug: redondeo-del-valor-total-en-listorders
status: PUBLISHED
createdAt: 2023-02-17T14:06:34.000Z
updatedAt: 2025-01-28T13:47:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: rounding-of-totalvalue-in-listorders
locale: es
kiStatus: Backlog
internalReference: 756314
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando consultamos el `totalValue` de algunos pedidos mediante la ruta GET ListOrders, es posible que encontremos valores que difieren de los devueltos en la ruta GET Order. Esto se debe a que la ruta ListOrders consulta la base de datos Solr, en la que el campo `totalValue` está definido como tipo float, lo que puede generar cifras inexactas debido a su naturaleza de aproximación y redondeo.

Por otro lado, en la ruta GET Order, la base de datos consultada está configurada como entero, por lo que el resultado no se comporta de la misma manera que en la ruta List Order.

La consecuencia de esto es que la API de la lista puede devolver valores con decimales diferentes cuando el valor es demasiado alto.
Otro efecto secundario de este escenario es la visualización de `totalValue` con «.0» en los pedidos de la lista.

## Simulación

No hay forma de simular el escenario, pero puede ocurrir en pedidos con un valor muy alto o en situaciones con monedas con muchos ceros;

## Workaround

provisional**
Aún no disponemos de una solución provisional.