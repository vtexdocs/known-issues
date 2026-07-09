---
title: 'La aplicación Cielo 3DS2 devuelve un estado de "aprobado" incluso en situaciones en las que la autenticación ha fallado.'
slug: la-aplicacion-cielo-3ds2-devuelve-un-estado-de-aprobado-incluso-en-situaciones-en-las-que-la-autenticacion-ha-fallado
status: PUBLISHED
createdAt: 2023-05-05T17:48:42.000Z
updatedAt: 2026-07-09T14:37:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: es
kiStatus: No Fix
internalReference: 820060
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando falla el paso de autenticación 3DS2 (por ejemplo, no se puede autenticar al cliente), la aplicación de autenticación Cielo continúa incorrectamente el flujo y envía un estado de «aprobado» al paso de autorización. Como resultado, la transacción se procesa con el adquirente aunque la verificación 3DS2 no se haya completado.

Esto crea una brecha de seguridad: las transacciones fraudulentas pueden eludir la protección 3DS2 y ser autorizadas por Cielo. Cielo podría posteriormente marcar esas transacciones como indicadores de fraude, lo que expone al comercio al riesgo de disputas y contracargos.

## Simulación

1. Habilite 3DS2 en una tienda utilizando el conector CieloV3.

2. Intente realizar una compra con una tarjeta que no supere el paso de registro 3DS2.

3. Observe en los registros de interacción de la transacción que la autenticación devolvió un estado de error («No se puede autenticar al cliente» o similar).

4. Observe que, a pesar del error, VTEX envió «Autenticar: verdadero» a Cielo y la transacción fue autorizada.

## Workaround

Migre al conector **Cielo Ecommerce** (CieloV4). El error es específico de `cielo-authentication-app v1.2.1`, utilizado por CieloV3. Cielo ha recomendado oficialmente esta migración, y el flujo 3DS2 funciona correctamente en el conector más reciente.