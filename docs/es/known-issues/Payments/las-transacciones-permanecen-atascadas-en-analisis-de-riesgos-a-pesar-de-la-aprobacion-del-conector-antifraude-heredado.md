---
title: 'Las transacciones permanecen atascadas en Análisis de riesgos a pesar de la aprobación del conector antifraude heredado'
slug: las-transacciones-permanecen-atascadas-en-analisis-de-riesgos-a-pesar-de-la-aprobacion-del-conector-antifraude-heredado
status: PUBLISHED
createdAt: 2025-12-26T14:41:00.118Z
updatedAt: 2025-12-26T14:41:00.118Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-legacy-anti-fraud-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1344359
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, el Transaction Worker no consigue avanzar la transacción al estado esperado, incluso después de recibir una respuesta correcta (200 OK) del conector heredado. Como resultado, las transacciones pueden permanecer atascadas en **Analizando Riesgo** y los pedidos correspondientes en "**Pago Pendiente**". Este comportamiento puede ocurrir cuando el conector heredado devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.


#### Simulación


No es posible simular.

## Workaround


Abra un ticket para el equipo de soporte del producto.




