---
title: 'Transacción liquidada mientras el pago con Giftcard se atasca en estado autorizado después de un error de autoliquidación'
slug: transaccion-liquidada-mientras-el-pago-con-giftcard-se-atasca-en-estado-autorizado-despues-de-un-error-de-autoliquidacion
status: PUBLISHED
createdAt: 2025-07-24T17:50:09.993Z
updatedAt: 2025-07-24T17:50:09.993Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-settling-while-giftcard-payment-stuck-in-authorized-status-after-autosettle-error
locale: es
kiStatus: Backlog
internalReference: 1201336
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los pagos con Giftcard se atascan en el estado `authorized` después de cualquier error de liquidación automática en la solicitud de GiftcardHub.
Incluso después de un reintento y una liquidación exitosa, el estado del pago no cambia.

El mensaje en las interacciones de transacción es:


    Mensaje: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


Esto no depende del estado HTTP devuelto.


#### Simulación


N/A

## Workaround


Abra un ticket solicitando la actualización del estado.



