---
title: 'No se puede crear el pedido porque la tarjeta de crédito no es válida'
slug: no-se-puede-crear-el-pedido-porque-la-tarjeta-de-credito-no-es-valida
status: PUBLISHED
createdAt: 2022-06-29T21:38:33.000Z
updatedAt: 2025-10-20T16:43:41.000Z
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

La creación de un pedido puede fallar con la excepción genérica «_Se ha producido un error de comunicación con la pasarela y no se han recibido correctamente los datos de pago de la transacción {id}_», lo cual puede deberse a diferentes causas. Una de ellas estará relacionada con la excepción interna «_La información de la cuenta solicitada no existe_», que puede consultarse en el historial de transacciones/pagos correspondiente al pedido incompleto.

La mencionada «información de la cuenta» está relacionada con una tarjeta de crédito que ya no existe en la plataforma. Aunque se ofrece en el formulario de pedido (carrito) como una opción, no se puede utilizar. Quedó una referencia no válida en el perfil del cliente y/o en su formulario de pedido.

Uno de los casos en los que se manifiesta este problema es cuando el usuario tiene una tarjeta (`accountId`) asociada a su perfil en el sistema de perfiles, pero dicha tarjeta no existe en la pasarela de pagos.

## Simulación

Se desconoce la causa raíz de este tipo de escenario, por lo que no hay pasos claros para reproducir el problema.

## Workaround

provisional**
En relación con esta causa raíz específica, el cliente debe finalizar la compra con otra tarjeta de crédito. La tarjeta de crédito no válida también puede eliminarse manualmente del perfil del cliente a través de la página «mi-cuenta», o incluso desde el formulario de pedido específico (carrito) mientras se está conectado, siempre por parte del propio cliente.