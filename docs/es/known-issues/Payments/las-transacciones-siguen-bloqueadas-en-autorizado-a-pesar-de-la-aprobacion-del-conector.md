---
title: 'Las transacciones siguen bloqueadas en Autorizado a pesar de la aprobación del conector'
slug: las-transacciones-siguen-bloqueadas-en-autorizado-a-pesar-de-la-aprobacion-del-conector
status: PUBLISHED
createdAt: 2025-12-26T14:37:27.500Z
updatedAt: 2025-12-26T14:37:27.500Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-authorized-despite-connector-approval
locale: es
kiStatus: Backlog
internalReference: 1344357
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, el Transaction Worker no consigue avanzar la transacción al estado esperado, incluso después de recibir una respuesta correcta (200 OK) del conector. Como resultado, las transacciones pueden permanecer atascadas en **Autorizado** y los pedidos correspondientes en **"Pendiente de pago "**. Este comportamiento puede ocurrir cuando el conector devuelve correctamente una respuesta de aprobado, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.


#### Simulación


No es posible simular.

## Workaround


Abra un ticket para el equipo de soporte del producto.



