---
title: 'No se puede guardar la tarjeta en Mis Tarjetas cuando el método de pago tiene una condición especial con la subcuenta.'
slug: no-se-puede-guardar-la-tarjeta-en-mis-tarjetas-cuando-el-metodo-de-pago-tiene-una-condicion-especial-con-la-subcuenta
status: PUBLISHED
createdAt: 2025-08-29T22:03:35.000Z
updatedAt: 2026-09-21T19:16:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cannot-save-card-in-mycards-when-the-payment-method-has-a-special-condition-with-subaccount
locale: es
kiStatus: Backlog
internalReference: 1283953
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el método de pago utilizado para la validación de la tarjeta incluye la condición especial "nombres de cuenta" (que incluye una subcuenta), la tarjeta no se puede guardar en Mi Tarjeta.

## Simulación

1. Cree un método de pago con la condición especial "nombres de cuenta" y seleccione más de una cuenta.

2. Utilice este método de pago para la validación de la tarjeta (la transacción estándar de $1.50).

3. Intente guardar la tarjeta en Mi Tarjeta, desde Mi Cuenta.

4. La tarjeta no se guardará y aparecerá un mensaje de error.

## Workaround

No existe una solución alternativa para este problema. Recomendamos que el comercio utilice un método de pago diferente para la validación de la tarjeta, sin la condición especial "nombres de cuenta".