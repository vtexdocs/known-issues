---
title: Error al procesar la segunda devolución o cancelación con el mismo valor que la primera
slug: error-al-procesar-la-segunda-devolucion-o-cancelacion-con-el-mismo-valor-que-la-primera
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-or-cancellation-with-the-same-value-as-the-first
locale: es
kiStatus: Scheduled
internalReference: 1118560
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al solicitar un segundo reembolso parcial del mismo valor que el primero, la pasarela devuelve el siguiente mensaje:

    Mensaje: La tarjeta regalo ya ha sido reembolsada.


O si se solicita una segunda cancelación parcial con el mismo valor que la primera, la pasarela devuelve:

    Mensaje: "La tarjeta regalo ya ha sido cancelada"


Aunque esto se registra en la interacción, el segundo reembolso/cancelación no se procesa realmente.
Este escenario es mucho más común para el segundo reembolso/cancelación con el mismo valor, pero también puede ocurrir en reembolsos posteriores, siempre que el importe solicitado sea igual a la suma de los reembolsos ya procesados.


#### Simulación



1. Realiza una compra exclusivamente con una Tarjeta Regalo (CG);
2. 2. Finalice la transacción;
3. Emitir un reembolso parcial por un importe inferior a la mitad del pago total;
4. 4. Solicitar otro reembolso por el mismo importe que el primero.

## Workaround


Se ha creado un indicador de función en el que las cuentas añadidas ignoran la parte que introduce este error.
https://github.com/vtex/configs/blob/main/src/configs/payment-gateway/flags/gch-refund-condition.jsonnet


