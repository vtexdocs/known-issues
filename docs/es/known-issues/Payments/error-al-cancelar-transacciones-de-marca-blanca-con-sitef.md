---
title: 'Error al cancelar transacciones de marca blanca con Sitef'
slug: error-al-cancelar-transacciones-de-marca-blanca-con-sitef
status: PUBLISHED
createdAt: 2021-10-18T20:02:55.000Z
updatedAt: 2026-06-05T21:18:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-to-cancel-private-label-transactions-with-sitef
locale: es
kiStatus: No Fix
internalReference: 451735
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar cancelar una transacción de **marca privada** procesada a través del conector **Sitef**, el proceso de cancelación queda incompleto. El flujo de cancelación de Sitef requiere dos pasos —`beginCancel` y `doCancel`— pero, en el caso de las transacciones de marca privada, solo se ejecuta el primer paso (`beginCancel`).
El segundo paso falla porque el campo `accountId` es `null` para las transacciones de Private Label, lo que impide que VTEX complete la cancelación con el conector. Como resultado, la transacción se marca como cancelada en la plataforma VTEX, pero **permanece activa en el lado de Sitef**, lo que requiere una intervención manual directamente con Sitef para completar la cancelación.

## Simulación

No se puede reproducir en un entorno controlado sin una cuenta de Sitef con un método de pago de marca privada configurado y credenciales de tarjeta de prueba. El problema se manifiesta en producción cuando se activa una cancelación en una transacción de marca privada capturada a través de Sitef.

## Workaround

No hay ninguna solución alternativa disponible por parte de VTEX. El comerciante debe **ponerse en contacto directamente con Sitef** para que cancelen la transacción por su parte.