---
title: 'No se pueden cancelar las transacciones que han cambiado la configuración de la división del pago'
id: 2bhsI5119DLOhNjk2cb6q
status: PUBLISHED
createdAt: 2022-06-28T16:44:10.992Z
updatedAt: 2024-02-16T20:24:09.734Z
publishedAt: 2024-02-16T20:24:09.734Z
firstPublishedAt: 2022-06-28T16:44:11.460Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unable-to-cancel-transactions-that-had-payout-split-config-change
locale: es
kiStatus: No Fix
internalReference: 364382
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se produce un cambio en la configuración, añadiendo la división del pago, y esto hace que las nuevas transacciones tengan información que no estaba disponible antes y que ahora se utilizará en la operación de cancelación, lo que hace que las transacciones creadas antes de esta configuración no se estén cancelando.



## Simulación



1. Hacer una transacción sin que la división de pagos esté correctamente configurada.
2. Antes de finalizar la transacción, configure el reparto de pagos.
3. Intente cancelar la transacción a través de la interfaz de usuario o la API.



## Workaround


Actualmente no tenemos una solución. Las transacciones no podrán ser canceladas hasta que tengamos una solución. Lo que se indica es que el cliente espere hasta que se completen las transacciones de división de preconfiguración antes de registrarse.

