---
title: 'En un caso de pago fraccionado en el que el importe ya se haya cobrado, la pasarela ya no permite solicitar la cancelación'
slug: en-un-caso-de-pago-fraccionado-en-el-que-el-importe-ya-se-haya-cobrado-la-pasarela-ya-no-permite-solicitar-la-cancelacion
status: PUBLISHED
createdAt: 2023-01-27T20:13:08.000Z
updatedAt: 2023-01-27T20:13:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-a-payout-split-scenario-when-the-amount-was-already-captured-the-gateway-no-longer-allows-a-cancellation-request
locale: es
kiStatus: Backlog
internalReference: 742046
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un escenario de división, cuando el usuario realiza una orden de modificación o incluso una simple cancelación después de que el pago ya se haya capturado, la pasarela ya no permite recibir una nueva llamada a `UpdateAdditionalData`.
Por lo tanto, en este caso, la pasarela lanzará una excepción denominada PayoutSplitWasAlreadyDone.

## Simulación

Intente cancelar una transacción junto con una actualización de datos (updateAdditionalData) después de que la transacción haya capturado su pago.

## Workaround

Finalice la transacción capturando el importe restante y, a continuación, realice un reembolso total o parcial del importe de la transacción.