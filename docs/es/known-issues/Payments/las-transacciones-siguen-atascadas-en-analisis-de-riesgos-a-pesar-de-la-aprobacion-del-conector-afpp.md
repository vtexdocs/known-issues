---
title: 'Las transacciones siguen atascadas en Análisis de riesgos a pesar de la aprobación del conector AFPP'
slug: las-transacciones-siguen-atascadas-en-analisis-de-riesgos-a-pesar-de-la-aprobacion-del-conector-afpp
status: PUBLISHED
createdAt: 2025-12-26T14:44:42.530Z
updatedAt: 2025-12-26T14:44:42.530Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-analyzing-risk-despite-afpp-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1344361
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, el Transaction Worker falla en avanzar la transacción al estado esperado, aún después de recibir una respuesta exitosa (200 OK) del conector antifraude AFPP. Como resultado, las transacciones pueden permanecer atascadas en **Analizando Riesgo** y las órdenes correspondientes permanecen en "**Pago Pendiente**". Este comportamiento puede ocurrir cuando el conector AFPP devuelve correctamente una respuesta aprobada, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.



#### Simulación


No es posible simular.

## Workaround


Abra un ticket para el equipo de Soporte de Producto.



