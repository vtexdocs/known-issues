---
title: 'La transacción se ha quedado bloqueada en el estado «aprobada» con el conector NPS debido al código psp_ResponseCod en la respuesta de liquidación'
slug: la-transaccion-se-ha-quedado-bloqueada-en-el-estado-aprobada-con-el-conector-nps-debido-al-codigo-pspresponsecod-en-la-respuesta-de-liquidacion
status: PUBLISHED
createdAt: 2022-04-06T14:06:46.000Z
updatedAt: 2023-05-12T22:37:46.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-approved-with-nps-connector-due-to-pspresponsecod-in-settlement-response
locale: es
kiStatus: Backlog
internalReference: 557051
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Tras enviar la solicitud de captura al conector NPS, recibimos su respuesta. Sin embargo, actualmente no tenemos prevista ninguna acción para los casos en que el campo `psp_ResponseCod` devuelva un valor distinto de 2. Esto provoca que la operación de captura falle, lo que impide que el pago se capture correctamente.

## Simulación

No es posible simular el comportamiento, ya que dependemos de la respuesta del proveedor.

## Workaround

N/A