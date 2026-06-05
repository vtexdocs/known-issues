---
title: 'La función «Guardar tarjeta» de «Mi cuenta» no funciona con PayUGlobal'
slug: la-funcion-guardar-tarjeta-de-mi-cuenta-no-funciona-con-payuglobal
status: PUBLISHED
createdAt: 2020-11-25T17:22:09.000Z
updatedAt: 2026-06-05T21:14:04.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-functionality-of-save-card-in-my-account-do-not-work-for-payuglobal
locale: es
kiStatus: No Fix
internalReference: 309354
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un cliente intenta **guardar una tarjeta de crédito en «Mi cuenta»** en una tienda que utiliza el conector **PayU Global**, la operación falla y la tarjeta no se guarda. Se crea una transacción de validación de **1,50 R$** que se cancela inmediatamente como parte del proceso de guardar la tarjeta, pero el proceso no se completa con éxito.

## Simulación

No se puede reproducir en un entorno controlado. Para observar el problema, crea una cuenta en una tienda que utilice el conector PayU Global e intenta guardar una tarjeta de crédito en «Mi cuenta». La operación fallará y se verá una transacción de validación cancelada de 1,50 R$ en la pasarela.

## Workaround

provisional**
No hay ninguna solución provisional disponible.