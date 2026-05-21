---
title: 'La transacción se está liquidando, mientras que el pago con tarjeta regalo permanece en estado «autorizado» tras un error en la liquidación automática'
slug: la-transaccion-se-esta-liquidando-mientras-que-el-pago-con-tarjeta-regalo-permanece-en-estado-autorizado-tras-un-error-en-la-liquidacion-automatica
status: PUBLISHED
createdAt: 2025-03-28T18:39:37.000Z
updatedAt: 2026-05-21T23:30:49.000Z
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

Los pagos con tarjetas regalo quedan bloqueados en el estado «autorizado» tras un error de liquidación en GiftcardHub (código HTTP 400 u otros errores). Incluso tras los reintentos activados por SOS, el estado del pago no se actualiza y la liquidación nunca se completa.

El mensaje en las interacciones de la transacción es:

 Mensaje: Error desconocido en AutoSettle. La llamada a «https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements» devolvió el estado HTTP «()».


El problema solo se produce en el **modo de liquidación total (predeterminado de la plataforma):** cuando una transacción tiene varios métodos de pago, si la liquidación de la tarjeta regalo falla en el primer intento, es posible que el otro método de pago ya se haya capturado (liquidación automática). En los reintentos, el SOS envía el valor total de la factura, pero la pasarela ahora solo cubre el saldo restante de la tarjeta regalo. La pasarela registra «Liquidación de la transacción iniciada».

Esto ocurre porque el valor solicitado supera el saldo capturable restante. El flujo se interrumpe antes de llamar al Hub, no se registra ningún `PaymentWorkFlowChangeStatus`, no se realiza ninguna llamada al Hub y no se registra ningún `Liquidación de la transacción finalizada`.

## Simulación

Requisitos previos:

1. Estar en modo de captura total
2. No tener configurada la captura automática o anticipada


Pasos:

1. Crea un pedido/transacción con una tarjeta regalo + otro método de pago
2. Aprueba ambos pagos
3. Fuerza que falle la captura del pago con tarjeta regalo
4. Captura con éxito el otro método de pago
5. Llama a la captura de la pasarela con el valor total y recibe el error:
6.

    { "error": { "code": "1402", "message": "El valor solicitado para la liquidación (xx.xx) debe ser menor o igual al importe restante a pagar (xx.xx), que debe ser distinto de 0.", "exception": null }}

## Workaround

Para evitar este error por completo, el comerciante puede optar por cambiar el tipo de captura al modo «Hold» (Retención) o «Partial» (Parcial).
Revise cada uno de estos modos antes de habilitarlos: https://help.vtex.com/docs/tutorials/payment-settlement-types

Otra forma de evitar el problema es habilitar la captura automática o anticipada en el conector.
Recomendamos un `delayToAutoSettle` o `delayToAutoSettleAfterAntifraud` de 3600 segundos (1 h), pero lo importante es que sea inferior al tiempo habitual de facturación de los pedidos:
https://help.vtex.com/docs/tutorials/configuring-maximum-automatic-payment-settlement-time-frame

Nota: Es necesario que el comerciante consulte con el proveedor si es posible configurar esos campos.

Si el comerciante no desea implementar ninguno de los cambios anteriores, abra un ticket solicitando una actualización del estado.


%0A