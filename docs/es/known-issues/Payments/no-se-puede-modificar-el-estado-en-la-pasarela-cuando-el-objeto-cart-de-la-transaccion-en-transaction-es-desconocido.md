---
title: 'No se puede modificar el estado en la pasarela cuando el objeto «Cart» de la transacción en /transaction es «desconocido».'
slug: no-se-puede-modificar-el-estado-en-la-pasarela-cuando-el-objeto-cart-de-la-transaccion-en-transaction-es-desconocido
status: PUBLISHED
createdAt: 2023-03-23T14:27:02.000Z
updatedAt: 2023-03-23T14:27:02.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: unable-to-change-status-on-gateway-when-transaction-cart-object-in-transaction-is-unknown
locale: es
kiStatus: Backlog
internalReference: 776837
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para cancelar o modificar un pedido en casos de pago fraccionado, nuestra pasarela requiere un objeto de carrito. Sin embargo, si el proceso de pago a través de OMS envía un objeto de carrito nulo o desconocido, nuestra pasarela no puede procesar estas operaciones, lo que da lugar a un error de análisis sintáctico en la biblioteca Newtonsoft utilizada en la pasarela.

## Simulación

Para reproducir el problema, actualice el objeto carrito en la entidad /transaction con un valor nulo utilizando nuestra API para enviar datos adicionales.
https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data

## Workaround

Si el objeto carrito inicial ya no está disponible, recuperarlo y reenviarlo a la entidad /transaction utilizando nuestra API para enviar datos adicionales puede resultar complicado. Si este es el caso, ponte en contacto con el equipo de soporte de VTEX para obtener ayuda.