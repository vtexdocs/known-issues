---
title: 'Las transacciones siguen atascadas en «Analizando el riesgo» a pesar de la aprobación del conector antifraude heredado.'
slug: las-transacciones-siguen-atascadas-en-analizando-el-riesgo-a-pesar-de-la-aprobacion-del-conector-antifraude-heredado
status: PUBLISHED
createdAt: 2026-03-09T12:51:56.500Z
updatedAt: 2026-03-09T12:51:56.500Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-legacy-anti-fraud-connector-approval
locale: es
kiStatus: Fixed
internalReference: 1344359
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, el Transaction Worker no logra avanzar la transacción al estado esperado, incluso después de recibir una respuesta satisfactoria (200 OK) del conector heredado. Como resultado, las transacciones pueden quedarse atascadas en **Analizando riesgo** y los pedidos correspondientes permanecen en «**Pago pendiente**». Este comportamiento puede producirse cuando el conector heredado devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

## Simulación

No es posible simularlo.

## Workaround

Abra un ticket para el equipo de soporte técnico del producto.