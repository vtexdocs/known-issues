---
title: 'El pedido se queda atascado en estado de pago pendiente a pesar de que la transacción fue aprobada (el sistema de gestión de pedidos muestra un estado obsoleto al procesar el pago aprobado).'
slug: el-pedido-se-queda-atascado-en-estado-de-pago-pendiente-a-pesar-de-que-la-transaccion-fue-aprobada-el-sistema-de-gestion-de-pedidos-muestra-un-estado-obsoleto-al-procesar-el-pago-aprobado
status: PUBLISHED
createdAt: 2026-09-03T16:57:14.000Z
updatedAt: 2026-09-03T16:57:14.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-payment-pending-despite-approved-transaction-oms-reads-stale-status-when-processing-paymentapproved
locale: es
kiStatus: Backlog
internalReference: 1456295
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Un pedido puede permanecer atascado en "Pago pendiente" aunque la transacción haya alcanzado el estado **"Aprobado"** en Pagos (sin reversión, según lo confirman los registros de transacciones) y el sistema de gestión de pedidos (OMS) haya recibido correctamente la notificación de "pago aprobado" sin demora.

**El fallo se produce en un paso posterior:** durante el procesamiento de la notificación, el OMS (`SalesOrderSystem::CreateAuthorization`, estado "aprobar pago") realiza una comprobación de estado independiente con la pasarela de pago. En los casos afectados, esta comprobación devuelve **"Autorizado"** (una lectura obsoleta), aunque la transacción ya haya alcanzado el estado **"Aprobado"** en Pagos. Esto impide que se complete la transición a "aprobar pago" y no se observa ningún reintento automático posterior, lo que significa que el pedido puede permanecer atascado indefinidamente.

## Simulación

No es posible realizar una simulación.

## Workaround

Abre una incidencia con VTEX solicitando que se vuelva a enviar la notificación de pago aprobado a OMS.