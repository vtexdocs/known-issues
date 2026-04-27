---
title: 'Error en la transacción debido a una discrepancia en la validación del BIN en las reglas de pago'
slug: error-en-la-transaccion-debido-a-una-discrepancia-en-la-validacion-del-bin-en-las-reglas-de-pago
status: PUBLISHED
createdAt: 2026-04-27T20:31:21.791Z
updatedAt: 2026-04-27T20:31:21.791Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-error-caused-by-bin-validation-mismatch-in-payment-rules
locale: es
kiStatus: Backlog
internalReference: 1398229
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando las reglas de pago se configuran utilizando condiciones del emisor de la tarjeta, la validación del proceso de pago puede tener en cuenta configuraciones de BIN tanto de 8 como de 6 dígitos, pero la pasarela sigue resolviendo el BIN utilizando únicamente los primeros 6 dígitos. Si un determinado BIN está registrado en la base de datos de VTEX con 8 dígitos y no existe uno más amplio y equivalente con 6 dígitos, el proceso de pago identifica correctamente la condición de pago, pero la transacción falla porque el BIN de 6 dígitos no coincide con ninguna regla de pago configurada. El error devuelto en las interacciones de la transacción es «No hay ninguna condición de pago que coincida con los parámetros de pago proporcionados...».

## Simulación

1. Configure una regla de pago con condiciones especiales utilizando la información del emisor bancario (país, banco, nivel de tarjeta);
2. Elija un número de tarjeta con el BIN de 8 dígitos registrado en la base de datos de VTEX, pero no la versión de 6 dígitos;
3. El proceso de pago identifica la regla de pago como una opción válida, pero la transacción falla porque el BIN de 6 dígitos utilizado no coincide con los parámetros de la regla.

## Workaround

Abre un ticket al soporte técnico de VTEX para que añada el BIN de 6 dígitos correspondiente, enviando la información requerida: https://help.vtex.com/docs/tutorials/adding-bin-information.