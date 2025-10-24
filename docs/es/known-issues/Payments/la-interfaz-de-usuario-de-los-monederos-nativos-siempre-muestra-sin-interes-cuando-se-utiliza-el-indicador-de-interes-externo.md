---
title: 'La interfaz de usuario de los monederos nativos siempre muestra "sin interés" cuando se utiliza el indicador de interés externo.'
slug: la-interfaz-de-usuario-de-los-monederos-nativos-siempre-muestra-sin-interes-cuando-se-utiliza-el-indicador-de-interes-externo
status: PUBLISHED
createdAt: 2025-10-16T20:59:55.908Z
updatedAt: 2025-10-16T20:59:55.908Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: native-wallets-ui-always-shows-no-interest-when-using-external-interest-flag
locale: es
kiStatus: Backlog
internalReference: 1243648
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Cuando se utiliza un monedero nativo como Google Pay con una regla de tarjeta de crédito que tiene activada la opción "Tipo de interés de terceros", el valor del interés no se calcula ni se muestra durante el pago. Se muestra el texto `sin interés` en las opciones.

Además, si se establecen tanto el "Interés de terceros" como un tipo de interés estándar, el importe de la cuota se actualiza de acuerdo con el tipo estándar, pero el proceso de pago indica incorrectamente "sin intereses".

## Simulación




1. Activar el monedero (como GooglePay) de pago
2. Añadir una regla de tarjeta de crédito con un tipo de interés
3. Marca la opción de tipo de interés de terceros
4. Vaya a la caja y compruebe las opciones de pago del monedero

## Workaround


No hay ninguna solución disponible.



