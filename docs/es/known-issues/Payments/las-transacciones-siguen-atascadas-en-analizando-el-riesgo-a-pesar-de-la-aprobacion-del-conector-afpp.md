---
title: 'Las transacciones siguen atascadas en «Analizando el riesgo» a pesar de la aprobación del conector AFPP.'
slug: las-transacciones-siguen-atascadas-en-analizando-el-riesgo-a-pesar-de-la-aprobacion-del-conector-afpp
status: PUBLISHED
createdAt: 2026-03-09T12:50:38.272Z
updatedAt: 2026-03-09T12:50:38.272Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-afpp-connector-approval
locale: es
kiStatus: Fixed
internalReference: 1344361
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, el Transaction Worker no logra avanzar la transacción al estado esperado, incluso después de recibir una respuesta satisfactoria (200 OK) del conector antifraude AFPP. Como resultado, las transacciones pueden quedarse atascadas en **Analizando riesgo** y los pedidos correspondientes permanecen en «**Pago pendiente**». Este comportamiento puede producirse cuando el conector AFPP devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

## Simulación

No es posible simularlo.

## Workaround

Abra un ticket para el equipo de soporte técnico del producto.