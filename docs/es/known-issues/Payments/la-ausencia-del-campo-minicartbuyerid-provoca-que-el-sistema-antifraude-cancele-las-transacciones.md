---
title: 'La ausencia del campo «minicart.buyer.id» provoca que el sistema antifraude cancele las transacciones'
slug: la-ausencia-del-campo-minicartbuyerid-provoca-que-el-sistema-antifraude-cancele-las-transacciones
status: PUBLISHED
createdAt: 2022-01-31T18:18:34.000Z
updatedAt: 2023-05-23T17:10:00.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: missing-minicartbuyerid-field-causes-antifraud-to-cancel-transactions
locale: es
kiStatus: Backlog
internalReference: 514335
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se han dado casos en los que algunas transacciones han sido rechazadas durante el análisis antifraude debido a que el campo `minicart.buyer.id` tenía un valor nulo. Por lo tanto, se espera que `minicart.buyer.id` se envíe desde el proceso de pago a la pasarela a través de `sendAdditionalData`. Sin embargo, según la arquitectura actual del proceso de pago, no existe ningún requisito específico para proporcionar este campo en `sendAdditionalData`, y su definición puede estar disponible o no en una fase posterior.

## Simulación

No es posible reproducir este comportamiento, ya que es intermitente.

## Workaround

Es posible enviar los datos adicionales posteriormente a través de nuestra API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data