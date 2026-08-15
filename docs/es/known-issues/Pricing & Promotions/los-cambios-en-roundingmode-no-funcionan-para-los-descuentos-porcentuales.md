---
title: 'Los cambios en RoundingMode no funcionan para los descuentos porcentuales.'
slug: los-cambios-en-roundingmode-no-funcionan-para-los-descuentos-porcentuales
status: PUBLISHED
createdAt: 2025-03-12T19:53:08.000Z
updatedAt: 2026-08-15T23:19:03.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-changes-do-not-work-for-percentual-discounts
locale: es
kiStatus: Backlog
internalReference: 1192809
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, cuando un usuario desea controlar el redondeo de descuentos en una promoción, VTEX ofrece cuatro modos de redondeo:

- `ninguno` → redondeo predeterminado
- `techo` → redondea los descuentos hacia arriba (p. ej., 14.56 → 14.6)
- `piso` → redondea los descuentos hacia abajo (p. ej., 14.56 → 14.5)
- `preciso` → omite el redondeo de valores intermedios y redondea solo el resultado final

Para los **descuentos porcentuales**, `techo` y `piso` no funcionan como se espera. Ambos producen el mismo resultado que `ninguno`. `preciso` no se ve afectado y funciona correctamente tanto para **descuentos nominales como porcentuales**.

Este comportamiento está relacionado con el flujo de cálculo:

- `ninguno`, `techo` y `piso` redondean primero el descuento unitario y luego lo multiplican por la cantidad. La lógica de redondeo `ceiling` y `floor` solo se activa para descuentos nominales. Para descuentos porcentuales, no se activa, por lo que el cálculo vuelve al comportamiento predeterminado `none`.

`precise` multiplica primero el valor completo sin redondear y redondea solo el resultado final. Esta ruta de cálculo es independiente del tipo de descuento, por lo que funciona correctamente tanto para descuentos nominales como porcentuales.

Por lo tanto, el problema se **limita a** `ceiling` **y** `floor` **cuando se usan con descuentos porcentuales**. `precise` no se ve afectado.

## Simulación

Primero se debe solicitar un cambio en el modo de redondeo al equipo de soporte de VTEX. Una vez cambiado el modo de redondeo, cree una promoción con un descuento porcentual y pruebe el comportamiento de todos los modos. `none`, `ceiling` y `floor` producirán el mismo resultado, mientras que `precise` producirá un resultado diferente según su propia lógica de cálculo. A modo de comparación, se puede realizar la misma prueba con un descuento nominal, donde `techo` y `piso` aplicarán el redondeo esperado.

## Workaround

N/A