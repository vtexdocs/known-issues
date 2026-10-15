---
title: 'No se puede crear el pedido debido a que la tarjeta de crédito no es válida.'
slug: no-se-puede-crear-el-pedido-debido-a-que-la-tarjeta-de-credito-no-es-valida
status: PUBLISHED
createdAt: 2022-06-29T21:38:33.000Z
updatedAt: 2026-10-15T20:51:25.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-cant-be-created-due-to-invalid-credit-card
locale: es
kiStatus: Backlog
internalReference: 607742
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La creación de un pedido puede fallar con la excepción genérica "Se ha producido un error de comunicación con la pasarela de pago y no se han recibido correctamente los datos de pago para la transacción {id}", que tiene diferentes causas raíz. Una de ellas está relacionada con la excepción interna "La información de cuenta solicitada no existe", que se puede observar en el historial de transacciones/pagos del pedido incompleto.

La "información de cuenta" mencionada se refiere a una tarjeta de crédito que ya no existe en la plataforma. Aunque se ofrece como opción en el formulario de pedido (carrito), no se puede utilizar. Queda una referencia no válida en el perfil del cliente o en su formulario de pedido.

Un ejemplo de cómo se manifiesta este problema es cuando el usuario tiene una tarjeta (`accountId`) asociada a su perfil en el Sistema de Perfiles, pero la misma tarjeta no existe en la Pasarela de Pagos.

## Simulación

Se desconoce la causa raíz de este tipo de escenario, por lo que no existen pasos claros para reproducir el problema.

## Workaround

Cuando se trata de esta causa raíz específica, el cliente debe finalizar la compra con otra tarjeta de crédito. La tarjeta de crédito no válida también puede eliminarse manualmente del perfil del cliente a través de la página "Mi cuenta" o incluso desde el formulario de pedido (carrito) mientras esté conectado, siempre por el propio cliente.