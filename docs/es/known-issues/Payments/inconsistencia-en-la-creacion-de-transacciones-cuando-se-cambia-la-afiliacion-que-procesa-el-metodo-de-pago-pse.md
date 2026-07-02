---
title: 'Inconsistencia en la creación de transacciones cuando se cambia la afiliación que procesa el método de pago PSE.'
slug: inconsistencia-en-la-creacion-de-transacciones-cuando-se-cambia-la-afiliacion-que-procesa-el-metodo-de-pago-pse
status: PUBLISHED
createdAt: 2022-09-14T22:29:45.000Z
updatedAt: 2026-07-02T15:52:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistency-in-creating-transactions-when-the-affiliation-processing-the-pse-payment-method-is-switched
locale: es
kiStatus: No Fix
internalReference: 658378
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una tienda tiene configuradas dos condiciones de pago para el método de pago PSE, cada una procesada por un conector diferente (PSE y MercadoPago), cambiar entre dichas condiciones durante el proceso de pago puede provocar, de forma intermitente, un fallo en la creación de la transacción. El cliente ve un error en la página de pago y el registro de la transacción resultante queda inaccesible en el panel de administración.

## Simulación

No se ha podido reproducir de forma consistente. El fallo se produce de forma intermitente cuando el cliente cambia entre condiciones de pago PSE respaldadas por diferentes conectores durante la misma sesión de pago.

## Workaround

No disponible.