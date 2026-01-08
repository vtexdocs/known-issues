---
title: 'Los sistemas antifraude heredados no pueden completar una solicitud cuando falta el ID de la cuenta.'
slug: los-sistemas-antifraude-heredados-no-pueden-completar-una-solicitud-cuando-falta-el-id-de-la-cuenta
status: PUBLISHED
createdAt: 2026-01-08T16:18:39.461Z
updatedAt: 2026-01-08T16:18:39.461Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: legacy-antifrauds-cannot-complete-a-request-when-the-accountid-is-missing
locale: es
kiStatus: Backlog
internalReference: 496298
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Hay un problema con la aprobación de algunas transacciones relacionadas con nuestros conectores antifraude heredados. Este problema surge cuando el sistema no puede realizar la solicitud necesaria debido a la ausencia del accountId, que es necesario para recuperar la información de pago de la base de datos de la cuenta. Puede verificarlo examinando la ruta «/payment», donde encontrará el nodo «usedAccountId» con un valor de «False» en tales casos.

**{**"name": "usedAccountId","value": "False"**}** Normalmente, el mensaje que aparece en la respuesta antifraude es «Referencia de objeto no establecida en una instancia de un objeto», lo que impide que se apruebe la transacción. Además, este problema se observa con frecuencia cuando un usuario elimina su propia tarjeta de la página Mi cuenta inmediatamente después de realizar un pedido.


#### Simulación

## Workaround

