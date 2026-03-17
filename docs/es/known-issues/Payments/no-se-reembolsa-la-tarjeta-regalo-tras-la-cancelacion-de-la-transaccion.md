---
title: 'No se reembolsa la tarjeta regalo tras la cancelación de la transacción'
slug: no-se-reembolsa-la-tarjeta-regalo-tras-la-cancelacion-de-la-transaccion
status: PUBLISHED
createdAt: 2026-03-17T20:52:03.073Z
updatedAt: 2026-03-17T20:52:03.073Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-not-getting-refund-after-transaction-cancellation
locale: es
kiStatus: Backlog
internalReference: 491195
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el método de pago es una tarjeta regalo y se produce un error durante el proceso de realización del pedido, lo que hace que este quede incompleto, el saldo de la tarjeta regalo no se reembolsa tras la cancelación de la transacción.

Esto da lugar a que se deduzca el saldo de la tarjeta regalo aunque, técnicamente, la operación de débito haya fallado. Dado que no se ha podido realizar el cargo en la tarjeta regalo correctamente, la transacción queda incompleta. Sin embargo, al revisar el extracto de la tarjeta regalo, es posible ver que el cargo se ha procesado correctamente, a pesar del mensaje de error que se muestra en las interacciones.

Esto ocurre porque el sistema utiliza varias bases de datos para registrar las transacciones de las tarjetas regalo, lo que puede dar lugar a inconsistencias entre el extracto del usuario y los datos devueltos por la API.
El escenario más común es que primero se cargue la tarjeta regalo y, a continuación, se guarde la transacción. Si se produce un fallo durante este segundo paso, el cargo no se revierte, lo que da lugar a la inconsistencia

## Simulación

No es posible simularlo

## Workaround

Realice el reembolso manualmente a través de la interfaz de usuario de la tarjeta regalo.
En los casos en que la tarjeta regalo tenga la configuración «Recargable: No», el saldo no se puede modificar mediante la interfaz de usuario. Por lo tanto, el reembolso debe realizarse utilizando la API de transacciones de tarjetas regalo.