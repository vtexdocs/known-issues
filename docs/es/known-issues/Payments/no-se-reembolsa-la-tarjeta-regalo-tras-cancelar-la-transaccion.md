---
title: No se reembolsa la tarjeta regalo tras cancelar la transacción
slug: no-se-reembolsa-la-tarjeta-regalo-tras-cancelar-la-transaccion
status: PUBLISHED
createdAt: 2025-08-12T18:51:12.534Z
updatedAt: 2025-08-12T18:51:12.534Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-not-getting-refund-after-transaction-cancellation
locale: es
kiStatus: Unknown
internalReference: 491195
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el método de pago es una tarjeta regalo y se produce un error durante el proceso de realización del pedido, provocando que éste quede incompleto, el saldo de la tarjeta regalo no se reembolsa una vez cancelada la transacción.

Esto provoca que el saldo de la tarjeta regalo se deduzca aunque la operación de cargo haya fallado técnicamente. Dado que la tarjeta regalo no se ha podido cargar correctamente, la transacción queda incompleta. Sin embargo, al revisar el extracto de la tarjeta regalo, es posible ver que el débito se procesó correctamente, a pesar del mensaje de error que aparece en las interacciones.

Esto ocurre porque el sistema utiliza varias bases de datos para registrar las transacciones con tarjetas regalo, lo que puede dar lugar a incoherencias entre el extracto del usuario y los datos devueltos por la API.
Lo más habitual es que primero se realice el cargo en la tarjeta regalo y, a continuación, se guarde la transacción. Si se produce un fallo durante este segundo paso, el cargo no se anula, lo que provoca la incoherencia.


## Simulación


No es posible simular

## Workaround


Reembolso manual a través de la interfaz de usuario de la tarjeta regalo.


