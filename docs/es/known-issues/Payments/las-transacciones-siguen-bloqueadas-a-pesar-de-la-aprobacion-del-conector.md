---
title: 'Las transacciones siguen bloqueadas a pesar de la aprobación del conector'
slug: las-transacciones-siguen-bloqueadas-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2025-11-14T19:33:47.259Z
updatedAt: 2025-11-14T19:33:47.259Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1302349
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, el Transaction Worker no consigue avanzar la transacción al estado esperado, incluso después de recibir una respuesta correcta (200 OK) del conector. Como resultado, las transacciones pueden permanecer atascadas en Pendiente de Autorización, Autorizada o Analizando Riesgo, y los pedidos correspondientes permanecen en "Pendiente de Pago". Este comportamiento puede ocurrir cuando el conector devuelve correctamente una respuesta de autorización, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.


#### Simulación


No es posible simular.

## Workaround


La solución depende del estado actual de la transacción:

- Escenario 1 - Transacción atascada en Pendiente de autorización Ejecute la siguiente API para adelantar manualmente la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request
- Escenario 2 - Transacción atascada en Autorizada
- Escenario 3 - Transacción atascada en Analizando el riesgo
Para los escenarios 2 y 3, es necesario abrir un ticket para Producto.


