---
title: Estado del pago bloqueado y anulación de la operación tras el rechazo del análisis de riesgos
slug: estado-del-pago-bloqueado-y-anulacion-de-la-operacion-tras-el-rechazo-del-analisis-de-riesgos
status: PUBLISHED
createdAt: 2025-10-14T19:17:12.562Z
updatedAt: 2025-10-14T19:17:12.562Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-status-stuck-and-transaction-canceling-after-risk-analysis-rejected
locale: es
kiStatus: Backlog
internalReference: 1163213
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El pago está atascado, y el estado de la transacción se cancela después de rechazar el análisis de riesgo.



#### Simulación


Cuando el proceso de autoliquidación se produce antes de que finalice el análisis de riesgo, el estado del pago se actualiza a "finalizado", mientras que la operación permanece en estado "analizando riesgo".

Si el análisis de riesgo da como resultado "riesgo rechazado", se activa el proceso de anulación. Sin embargo, una vez que una transacción ha sido liquidada no puede ser cancelada.

Como resultado, las transacciones se quedan atascadas en el estado "cancelando", incluso después de un reembolso con éxito, mientras que el estado de pago sigue siendo "finalizado".

## Workaround



Cancele el pedido manualmente en OMS para evitar problemas con la gestión del inventario.



