---
title: 'delayToAutoSettleAfterAntifraud: activa el cobro automático incluso sin el control antifraude'
slug: delaytoautosettleafterantifraud-activa-el-cobro-automatico-incluso-sin-el-control-antifraude
status: PUBLISHED
createdAt: 2021-05-17T18:47:36.000Z
updatedAt: 2023-05-08T19:58:51.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: delaytoautosettleafterantifraud-triggering-automatic-capture-even-without-antifraud
locale: es
kiStatus: Backlog
internalReference: 369633
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando la transacción **NO** cuenta con el módulo antifraude, se toma el valor más corto entre `delayToAutoSettle` y `delayToAutoSettleAfterAntifraud`. En este caso, el `EarlySettlementWorker` es el encargado de la captura, es decir, el trabajador encargado de la captura anticipada. Técnicamente, es el worker que se invoca después de que se ejecute el control antifraude, pero cuando no hay ninguno, inicia su cuenta atrás tras la autorización del pago.

Por otro lado, en el caso de que **EXISTA** el control antifraude, se comporta como se espera: se invoca el primero que se produzca. La captura automática inicia la cuenta atrás tras la aprobación del pago. La captura anticipada inicia la cuenta atrás tras la aprobación del control antifraude.

Por ejemplo, si `delayToAutoSettle` es igual a 1 minuto y `delayToAutoSettleAfterAntifraud` es igual a 1 segundo, y el control antifraude se invoca y se aprueba antes de que transcurra 1 minuto tras la autorización del pago, entonces se invocará el `EarlySettlementWorker`.

## Simulación

Para realizar la simulación, es necesario que el conector en cuestión envíe diferentes valores para delayto[...]. Teniendo en cuenta que esto está configurado, es necesario crear una condición de pago sin un control antifraude asociado. Realice un pedido y compruebe el tiempo que tarda en activarse la liquidación (que será la referencia para `delayToAutoSettleAfterAntifraud` y no para `delayToAutoSettle`).

## Workaround

N/A