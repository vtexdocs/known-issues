---
title: Amazon Selección de transportistas
slug: amazon-seleccion-de-transportistas
status: PUBLISHED
createdAt: 2025-10-16T20:39:45.275Z
updatedAt: 2025-10-16T20:39:45.275Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-carrier-selection
locale: es
kiStatus: Backlog
internalReference: 1186908
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Divergencia en el tipo de método de entrega seleccionado
Esto ocurre porque la integración, cuando no se solicita a los EE.UU., en realidad envía null a la simulación.


#### Simulación




1. La simulación devuelve una lista de ANS.
2. La integración filtra para utilizar el ANS de menor valor.
3. Se crea la reserva.
4. Al realizar el pedido, se utiliza el ANS de la reserva, es decir, el de menor valor.

Entendemos que existe una divergencia entre la elección del comprador al realizar el pedido y la forma en que el pedido entra en la OMS.

## Workaround


N/A



