---
title: 'La falta del campo minicart.buyer.id hace que el antifraude cancele transacciones'
slug: la-falta-del-campo-minicartbuyerid-hace-que-el-antifraude-cancele-transacciones
status: PUBLISHED
createdAt: 2025-11-14T19:29:32.154Z
updatedAt: 2025-11-14T19:29:32.154Z
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


Ha habido casos en los que ciertas transacciones han sido rechazadas durante el análisis antifraude debido al valor nulo en el campo `minicart.buyer.id`. Por lo tanto, se espera que el campo `minicart.buyer.id` se envíe desde la caja a la pasarela a través de `sendAdditionalData`. Sin embargo, de acuerdo con la arquitectura actual de la caja, no hay ningún requisito específico para proporcionar este campo en `sendAdditionalData`, y su definición puede o no estar disponible en una etapa posterior.


#### Simulación


No es posible reproducir este comportamiento una vez que esto es intermitente.

## Workaround


Es posible enviar los datos adicionales después a través de nuestra API:
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data



