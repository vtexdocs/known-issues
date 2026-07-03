---
title: 'PayPalPlus no respeta el importe mínimo de la cuota.'
slug: paypalplus-no-respeta-el-importe-minimo-de-la-cuota
status: PUBLISHED
createdAt: 2021-05-18T21:34:28.000Z
updatedAt: 2026-07-03T15:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: paypalplus-does-not-respect-the-minimum-installment-amount
locale: es
kiStatus: No Fix
internalReference: 370271
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El importe mínimo de la cuota configurado en una condición de pago de PayPalPlus no se aplica al finalizar la compra. A los clientes se les muestran opciones de pago inferiores al mínimo configurado, independientemente del valor establecido en la configuración de la condición de pago.

Esto sucede porque PayPalPlus envía las opciones de pago disponibles en su respuesta de autorización; VTEX no envía una solicitud especificando la restricción. Dado que PayPal define las reglas de pago, VTEX no puede modificarlas.

También se observa un comportamiento secundario: cuando se modifica o elimina un importe mínimo de cuota existente, el proceso de pago puede seguir aplicando el valor anterior incluso después de guardar y reindexar.

## Simulación

1. Configure una condición de pago de PayPalPlus con un importe mínimo de cuota (p. ej., R$30).

2. Añada un producto al carrito cuyo total permita pagos inferiores a ese mínimo.

3. Continúe con el proceso de pago y seleccione PayPalPlus como método de pago.

4. Observe que aún se muestran opciones de pago inferiores al mínimo configurado.

## Workaround

No disponible para la limitación principal. PayPal controla sus propias reglas de pago a plazos y VTEX no puede modificarlas.

En los casos en que persista un mínimo previamente establecido tras su actualización o eliminación: elimine la condición de pago existente y cree una nueva desde cero con la configuración deseada. Es posible que la edición de la condición existente no propague el cambio correctamente.