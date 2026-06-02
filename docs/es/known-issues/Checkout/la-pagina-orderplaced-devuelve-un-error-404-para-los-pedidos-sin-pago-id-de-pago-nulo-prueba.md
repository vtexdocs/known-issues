---
title: 'La página «orderPlaced» devuelve un error 404 para los pedidos sin pago (ID de pago nulo) - Prueba'
slug: la-pagina-orderplaced-devuelve-un-error-404-para-los-pedidos-sin-pago-id-de-pago-nulo-prueba
status: PUBLISHED
createdAt: 2026-05-30T00:36:12.000Z
updatedAt: 2026-05-30T00:36:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderplaced-page-returns-404-for-orders-with-no-payment-null-payment-id-test
locale: es
kiStatus: Backlog
internalReference: 1414430
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página `orderPlaced` devuelve un error 404 cuando un pedido tiene un valor total de 0 $, como es el caso de los pedidos que solo contienen artículos de regalo o promocionales. En este caso, la plataforma crea una transacción ficticia identificada como `"NO-PAYMENT"` sin ningún registro de pago asociado, lo que significa que el `paymentId` del pedido es nulo.

Cuando se carga la página `orderPlaced`, se activa una consulta GraphQL `getOrderGroup`. Dado que el campo `Payment.id` en el esquema `order-placed-graphql` está definido como no nulo, devolver un valor nulo para este campo provoca que toda la consulta falle con el siguiente error:

> `No se puede devolver null para el campo no nulo Payment.id.`

Esto hace que la página `orderPlaced` no pueda renderizarse, devolviendo un 404 al cliente.

Nota: los estados de la transacción y del pago no se ven afectados; el pedido en sí se crea y se procesa correctamente. El problema se limita a la página de confirmación `orderPlaced`.

## Simulación

Cualquier pedido con un valor total de 0 $, en el que no se requiera ningún pago real; por ejemplo, un pedido compuesto íntegramente por productos con un descuento del 100 % o artículos gratuitos.

## Workaround

No hay ninguna solución alternativa disponible.