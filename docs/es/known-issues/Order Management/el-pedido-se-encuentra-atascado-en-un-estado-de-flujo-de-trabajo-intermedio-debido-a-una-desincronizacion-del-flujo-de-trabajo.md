---
title: 'El pedido se encuentra atascado en un estado de flujo de trabajo intermedio debido a una desincronización del flujo de trabajo.'
slug: el-pedido-se-encuentra-atascado-en-un-estado-de-flujo-de-trabajo-intermedio-debido-a-una-desincronizacion-del-flujo-de-trabajo
status: PUBLISHED
createdAt: 2026-09-23T23:44:50.000Z
updatedAt: 2026-09-23T23:44:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-in-an-intermediate-workflow-status-due-to-a-workflow-desynchronization
locale: es
kiStatus: Backlog
internalReference: 1465447
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Existen situaciones en las que un pedido puede quedarse atascado en un estado intermedio de su flujo de trabajo —por ejemplo, (lista no exhaustiva) aprobación de pago, pedido completado (ffm), pedido completado, procesamiento o autorización de envío— aunque aparentemente se haya creado/procesado correctamente hasta ese punto. Esto ocurre cuando uno de los pasos internos del flujo de trabajo del pedido falla silenciosamente o encuentra una inconsistencia, lo que provoca una desincronización que impide que el pedido avance automáticamente al siguiente estado. Este problema no se limita a un solo estado ni a una sola instancia (Marketplace o Fulfillment/Seller); puede presentarse en diferentes puntos del ciclo de vida del pedido.

## Simulación

No existe una forma sencilla de reproducir este escenario, ya que depende de fallos intermitentes o específicos en puntos aislados de la ejecución del flujo de trabajo del pedido.

## Workaround

"No aplica" Si un pedido se encuentra atascado en un estado intermedio del flujo de trabajo sin avanzar durante un tiempo inusual, abra un ticket con el equipo de Producto de VTEX (Gestión de Pedidos) para que puedan inspeccionar el pedido y, si es necesario, resincronizar manualmente su flujo de trabajo.