---
title: 'Error en las operaciones de reembolso y captura con Payout Split: «El valor de los destinatarios * no coincide con el valor de la operación *».'
slug: error-en-las-operaciones-de-reembolso-y-captura-con-payout-split-el-valor-de-los-destinatarios-no-coincide-con-el-valor-de-la-operacion
status: PUBLISHED
createdAt: 2022-11-14T20:24:52.000Z
updatedAt: 2024-02-02T20:52:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-refund-and-capture-operations-with-payout-split-value-in-recipients-is-different-than-operation-value
locale: es
kiStatus: Backlog
internalReference: 698005
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Debido a problemas de redondeo al recalcular los beneficiarios de una transacción con «Payout Split», ya sea en el momento de la captura o en el del reembolso, recibimos la siguiente excepción de la pasarela, ya que la suma de los valores de los beneficiarios difiere del valor de la transacción.


    Vtex.Practices.ExceptionHandling.ValidationException: El valor de los destinatarios (xx.989999999999999999999999988) es diferente del valor de la operación (xx.99). en Vtex.PaymentGateway.PaymentSplit.RecipientsBuilder.ValidateRecipientsValue(List`1 recipients, Decimal value)...

## Simulación

No se puede simular

## Workaround

No hay solución alternativa