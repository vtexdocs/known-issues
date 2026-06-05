---
title: 'Problemas al cancelar una transacción con el conector Sitef'
slug: problemas-al-cancelar-una-transaccion-con-el-conector-sitef
status: PUBLISHED
createdAt: 2021-04-02T02:15:15.000Z
updatedAt: 2026-06-05T21:19:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problems-to-cancel-a-transactions-with-sitef-connector
locale: es
kiStatus: No Fix
internalReference: 351783
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Durante el proceso de cancelación de las transacciones procesadas a través del conector **Sitef**, el conector **no devuelve los datos de respuesta esperados** de forma intermitente. Como resultado, la transacción se queda bloqueada en el estado **«Cancelando»** y nunca pasa a **«Cancelada»**, lo que impide que se libere el inventario del comerciante.

## Simulación

No se puede reproducir en un entorno controlado. El problema se produce de forma intermitente en producción en las transacciones procesadas a través del conector Sitef cuando se activa una cancelación.

## Workaround

provisional**
No hay ninguna solución provisional disponible.