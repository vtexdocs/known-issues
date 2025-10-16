---
title: Pedidos atascados en estado cancelado en cumplimiento, pero con Mercado cancelado.
slug: pedidos-atascados-en-estado-cancelado-en-cumplimiento-pero-con-mercado-cancelado
status: PUBLISHED
createdAt: 2025-10-16T20:42:47.392Z
updatedAt: 2025-10-16T20:42:47.392Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-cancel-status-in-fulfillment-but-with-marketplace-canceled
locale: es
kiStatus: Backlog
internalReference: 1198719
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En escenarios donde los pedidos de Fulfillment no pueden ser cancelados debido a alguna inconsistencia, pero el pedido de Marketplace puede pasar a estado cancelado, no podremos desbloquear, ya que el Vendedor intenta cancelar el pedido de Marketplace nuevamente y da error, ya que el pedido de Marketplace ya está cancelado, rompiendo la validación que hace fulfillment.


#### Simulación


Actualmente no podemos simular este escenario, ya que se produce debido a algún tipo de inconsistencia o retraso en el endpoint o errores en otros módulos, como el catálogo.

## Workaround


No tenemos una solución para este problema, es decir, el pedido del vendedor estará en estado "cancelado".



