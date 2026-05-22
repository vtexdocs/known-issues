---
title: 'Las transacciones siguen bloqueadas en «Autorizadas» a pesar de que el conector las ha aprobado'
slug: las-transacciones-siguen-bloqueadas-en-autorizadas-a-pesar-de-que-el-conector-las-ha-aprobado
status: PUBLISHED
createdAt: 2025-12-26T17:37:00.000Z
updatedAt: 2026-05-22T17:50:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-remain-stuck-in-authorized-despite-connector-approval
locale: es
kiStatus: Fixed
internalReference: 1344357
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, el Transaction Worker no logra que la transacción pase al estado esperado, incluso después de recibir una respuesta positiva (200 OK) del conector. Como resultado, las transacciones pueden quedarse bloqueadas en _Authorized_ y los pedidos correspondientes permanecen en _«Pago pendiente»_. Este comportamiento puede producirse cuando el conector devuelve correctamente una respuesta de aprobación, pero el proceso interno que actualiza el estado de la transacción no se ejecuta correctamente.

Este problema corresponde al escenario: _«Silencio tras la autorización»_, en el que se identificaron cinco causas raíz distintas que compartían el mismo síntoma superficial pero diferentes mecanismos de fallo. Las otras causas son:

- Bucle de reintentos antifraude de ClearSale debido a `NullReferenceException` en el conector. Ticket n.º 1059028
- Bucle de reintentos antifraude de ClearSale debido a `address.number=null`. Ticket n.º 496298
- Pago atascado en el estado `Recibido` tras la autorización, sin estado visible en la interfaz de usuario. Ticket n.º 1411012.
- Regresión de estado «Aprobado» → «Autorizado» causada por una llamada de retorno secundaria del conector, resuelta junto con este KI.

## Simulación

No es posible simularlo.

## Workaround

Abre un ticket para el equipo de soporte técnico del producto.