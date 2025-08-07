---
title: Pedidos atascados en estado completado/en curso de pedido completado en fulfillment o estado de pago aprobado en Marketplace.
slug: pedidos-atascados-en-estado-completadoen-curso-de-pedido-completado-en-fulfillment-o-estado-de-pago-aprobado-en-marketplace
status: PUBLISHED
createdAt: 2025-08-07T20:26:35.489Z
updatedAt: 2025-08-07T20:26:35.489Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completedonordercompleted-status-in-fulfillment-or-approved-payment-status-in-marketplace
locale: es
kiStatus: Backlog
internalReference: 1218615
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, un pedido puede quedarse atascado en sus estados iniciales (`aprobar-pago`, `en-pedido-completado-ffm`, `en-pedido-completado` o `procesando`) incluso después de haber sido aparentemente creado con éxito, esto ocurre cuando uno de los pasos internos del flujo de creación del pedido falla silenciosamente, causando una **desincronización del flujo de trabajo** que impide que el pedido progrese con normalidad.



#### Simulación


Por el momento, este escenario no se puede simular de forma fiable, ya que depende de fallos intermitentes o puntuales en partes aisladas del proceso de creación del pedido.


## Workaround


Actualmente no hay forma de prevenir este tipo de escenario, pero el equipo técnico puede aplicar manualmente acciones correctivas a los pedidos afectados, permitiéndoles proceder con normalidad a través del flujo de trabajo.



