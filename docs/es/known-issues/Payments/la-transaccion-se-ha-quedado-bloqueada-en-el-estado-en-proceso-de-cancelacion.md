---
title: 'La transacción se ha quedado bloqueada en el estado «en proceso de cancelación»'
slug: la-transaccion-se-ha-quedado-bloqueada-en-el-estado-en-proceso-de-cancelacion
status: PUBLISHED
createdAt: 2021-01-23T01:47:19.000Z
updatedAt: 2026-05-28T19:52:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-status
locale: es
kiStatus: No Fix
internalReference: 327248
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones procesadas a través del conector de pago **MundiPagg** pueden quedarse bloqueadas en el estado **«En cancelación»** de forma indefinida, incluso después de enviar varias solicitudes de cancelación. El conector no devuelve una respuesta de cancelación correcta, lo que impide que VTEX Gateway pueda cambiar el estado de la transacción a **«Cancelada»**.
Como resultado, el pedido permanece congelado en el OMS y el inventario del cliente sigue bloqueado.

> ⚠️ Este problema es **específico del conector MundiPagg** (`affiliations_mundipagg`). Si la transacción utiliza un conector diferente, este KI no es aplicable.

## Simulación

No es posible simularlo.

## Workaround

No hay ninguna solución alternativa disponible en este momento.