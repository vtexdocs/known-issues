---
title: 'Las transacciones siguen bloqueadas a pesar de la aprobación del conector.'
slug: las-transacciones-siguen-bloqueadas-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2026-01-12T20:35:43.790Z
updatedAt: 2026-01-12T20:35:43.790Z
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

 En algunos casos, el **Transaction Worker** no logra avanzar la transacción al estado esperado, incluso después de recibir una respuesta satisfactoria (**200 OK** con el estado «aprobado») del conector. Como resultado, las transacciones pueden quedarse atascadas en **Autorización pendiente**, **Autorizada** o **Analizando riesgo**, y los pedidos correspondientes permanecen en **Pago pendiente**. Este comportamiento puede producirse cuando el conector devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente. > **Importante:** Tras el análisis de impacto y la alineación interna en (dic/2025), este KI se **dividió en cuatro KI más específicos**, cada uno centrado en un estado concreto en el que la transacción permanece bloqueada tras la aprobación del conector: > > 1. **[KI] Las transacciones permanecen bloqueadas en Pendiente de autorización a pesar de la aprobación del conector** > 2. **[KI] Las transacciones permanecen bloqueadas en Autorizado a pesar de la aprobación del conector**
> 3. **[KI] Las transacciones permanecen bloqueadas en Análisis de riesgo a pesar de la aprobación del conector antifraude heredado** > 4. **[KI] Las transacciones permanecen bloqueadas en Análisis de riesgo a pesar de la aprobación del conector AFPP** El texto anterior refleja la descripción consolidada original utilizada antes de esta división y debe leerse como el **KI general/raíz** para estos cuatro KI derivados.


#### Simulación

## Workaround

