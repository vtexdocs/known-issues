---
title: 'La transacción se queda bloqueada en la fase de cancelación cuando se rechaza una de las tarjetas'
slug: la-transaccion-se-queda-bloqueada-en-la-fase-de-cancelacion-cuando-se-rechaza-una-de-las-tarjetas
status: PUBLISHED
createdAt: 2021-09-13T04:30:47.000Z
updatedAt: 2025-04-22T20:02:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-canceling-when-one-of-the-card-is-denied
locale: es
kiStatus: No Fix
internalReference: 429082
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se realiza un pedido con dos tarjetas, y una es aprobada mientras que la otra es rechazada, ocurre que el pedido queda bloqueado con el importe capturado y no se cancela automáticamente. La transacción bloqueada está en proceso de cancelación.

##

## Simulación

1. Realiza una compra con dos tarjetas de crédito.
2. Una de las tarjetas es rechazada.

## Workaround

No hay ninguna solución para completar la cancelación, pero es posible reembolsar el importe capturado.


## **Notas internas**
Al intentar cancelar la transacción, se produce el siguiente error:

 {"error": {"code": "1","message": "La referencia de objeto no está establecida en una instancia de un objeto.","exception": null }}

A pesar de que se pasan el valor correcto y los datos del carrito.