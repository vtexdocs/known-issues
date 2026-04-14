---
title: 'Las transacciones siguen bloqueadas a pesar de la aprobación del conector'
slug: las-transacciones-siguen-bloqueadas-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2026-04-14T12:27:10.464Z
updatedAt: 2026-04-14T12:27:10.464Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-despite-connector-approval
locale: es
kiStatus: Scheduled
internalReference: 1302349
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, el **Transaction Worker** no logra que la transacción pase al estado esperado, incluso después de recibir una respuesta correcta (**200 OK** con el estado «approved») del conector. Como resultado, las transacciones pueden quedarse atascadas en **Autorización pendiente**, **Autorizada** o **Analizando riesgo**, y los pedidos correspondientes permanecen en **Pago pendiente**. Este comportamiento puede producirse cuando el conector devuelve correctamente una respuesta de aprobación, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

> **Importante:** Tras el análisis de impacto y la alineación interna en (dic/2025), este KI se **dividió en cuatro KIs más específicos**, cada uno centrado en un estado concreto en el que la transacción permanece bloqueada tras la aprobación del conector:
>
> 1. **[KI] Las transacciones permanecen bloqueadas en Autorización pendiente a pesar de la aprobación del conector**
> 2. **[KI] Las transacciones permanecen bloqueadas en Autorizado a pesar de la aprobación del conector**
> 3. **[KI] Las transacciones permanecen bloqueadas en «Análisis de riesgo» a pesar de la aprobación del conector antifraude heredado**
> 4. **[KI] Las transacciones permanecen bloqueadas en «Análisis de riesgo» a pesar de la aprobación del conector AFPP**

El texto anterior refleja la descripción consolidada original utilizada antes de esta división y debe interpretarse como el **KI general/raíz** de estos cuatro KI derivados.

## Simulación

No es posible simularlo.

## Workaround

La solución alternativa depende del estado actual de la transacción:


- Escenario 1 – Transacción atascada en «Pendiente de autorización». Ejecute la siguiente API para avanzar manualmente en la autorización: POST /api/pvt/transactions/{transactionId}/authorization-request 🔗 Referencia de la API: https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/authorization-request
- Escenario 2: transacción bloqueada en «Autorizada»
- Escenario 3: transacción bloqueada en «Analizando riesgo»
Para los escenarios 2 y 3, es necesario abrir un ticket para Producto.



%0A