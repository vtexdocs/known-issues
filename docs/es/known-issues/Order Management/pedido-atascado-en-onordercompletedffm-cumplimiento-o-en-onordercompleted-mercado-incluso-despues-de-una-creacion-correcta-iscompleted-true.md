---
title: Pedido atascado en on-order-completed-ffm (Cumplimiento) o en on-order-completed (Mercado) incluso después de una creación correcta (isCompleted: true)
slug: pedido-atascado-en-onordercompletedffm-cumplimiento-o-en-onordercompleted-mercado-incluso-despues-de-una-creacion-correcta-iscompleted-true
status: PUBLISHED
createdAt: 2025-08-11T12:36:15.259Z
updatedAt: 2025-08-11T12:36:15.259Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-onordercompletedffm-fulfillment-or-onordercompleted-marketplace-even-after-successful-creation-iscompleted-true
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
Nota: En los casos en los que la reserva haya caducado (estado=4), ¡¡¡el ajuste manual no es posible!!!



