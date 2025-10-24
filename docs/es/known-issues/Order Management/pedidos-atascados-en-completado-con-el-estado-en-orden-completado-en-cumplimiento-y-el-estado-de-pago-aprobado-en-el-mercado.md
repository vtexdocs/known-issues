---
title: 'Pedidos atascados en completado con el estado en orden completado en cumplimiento y el estado de Pago Aprobado en el Mercado.'
slug: pedidos-atascados-en-completado-con-el-estado-en-orden-completado-en-cumplimiento-y-el-estado-de-pago-aprobado-en-el-mercado
status: PUBLISHED
createdAt: 2025-08-07T21:10:45.616Z
updatedAt: 2025-08-07T21:10:45.616Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-completed-with-onordercompleted-status-in-fulfillment-and-approved-payment-status-in-marketplace
locale: es
kiStatus: Backlog
internalReference: 1218615
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, un pedido puede quedarse atascado en sus estados iniciales (`on-order-completed-ffm`, `on-order-completed` ) incluso después de haber sido aparentemente creado con éxito, esto ocurre cuando uno de los pasos internos del flujo de creación del pedido falla silenciosamente, causando una **desincronización del flujo de trabajo** que impide que el pedido progrese con normalidad.



## Simulación


Por el momento, este escenario no puede simularse de forma fiable, ya que depende de fallos intermitentes o puntuales en partes aisladas del proceso de creación de pedidos.



## Workaround


Actualmente no hay manera de prevenir este tipo de escenario, pero el equipo técnico puede aplicar manualmente acciones correctivas a los pedidos afectados, permitiéndoles proceder normalmente a través del flujo de trabajo.




