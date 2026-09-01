---
title: 'Mis Tarjetas - La verificación de la transacción (AV) fue rechazada debido a que el campo del teléfono siempre está vacío, incluso cuando el teléfono del cliente está registrado en el perfil.'
slug: mis-tarjetas-la-verificacion-de-la-transaccion-av-fue-rechazada-debido-a-que-el-campo-del-telefono-siempre-esta-vacio-incluso-cuando-el-telefono-del-cliente-esta-registrado-en-el-perfil
status: PUBLISHED
createdAt: 2026-09-01T22:33:47.000Z
updatedAt: 2026-09-01T22:33:47.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-cards-verification-transaction-av-denied-due-to-phone-field-always-null-even-when-customers-phone-is-registered-in-profile
locale: es
kiStatus: Backlog
internalReference: 1455107
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un cliente guarda una nueva tarjeta de crédito a través de la pestaña "Mis Tarjetas" en Mi Cuenta, el proveedor de pagos puede rechazar el pequeño cargo de verificación generado debido a la falta de un número de teléfono, incluso si el cliente ya tiene un número de teléfono registrado en su cuenta.

A diferencia de otros casos en los que la transacción falla simplemente porque el registro del cliente está incompleto, aquí el número de teléfono está registrado en la cuenta del cliente, pero no se incluye correctamente al generar el cargo de verificación de la tarjeta.

## Simulación

1. Acceda a `https://.myvtex.com/account#/profile` e ingrese el número de teléfono del cliente.

2. Acceda a `https://.myvtex.com/account#/cards/new` y agregue una nueva tarjeta.
3. Al revisar la transacción de verificación generada en el panel de administración de Pagos, el campo `teléfono` seguirá apareciendo como `nulo`, aunque se haya completado en el paso 1. Dependiendo del conector/adquirente, este campo faltante puede provocar que se rechace la transacción.

## Workaround

No existe ninguna solución alternativa.