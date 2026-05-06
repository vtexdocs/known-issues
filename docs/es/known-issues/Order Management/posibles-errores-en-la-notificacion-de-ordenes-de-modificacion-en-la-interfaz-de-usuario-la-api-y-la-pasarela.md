---
title: 'Posibles errores en la notificación de órdenes de modificación en la interfaz de usuario, la API y la pasarela.'
slug: posibles-errores-en-la-notificacion-de-ordenes-de-modificacion-en-la-interfaz-de-usuario-la-api-y-la-pasarela
status: PUBLISHED
createdAt: 2023-12-19T22:37:32.000Z
updatedAt: 2025-04-22T21:46:35.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: possible-errors-in-change-orders-notification-in-the-ui-api-and-gateway
locale: es
kiStatus: No Fix
internalReference: 955489
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

_**Importante**: Recomendamos utilizar la nueva **Change V2**, ya que se ha dedicado un gran esfuerzo a desarrollar esta nueva función._

Se han detectado algunos problemas en la arquitectura de Change Orders V1, en la que, en algunos casos, no se notificaban en la interacción del pedido en la interfaz de usuario ni en la API Get Orders, aunque sí se aplicaba un descuento o un incremento en el valor. También hemos observado casos en los que la notificación se produce tanto en la interfaz de usuario como en la API, pero el descuento o el aumento no se aplica en la pasarela.

Hay un segundo punto a tener en cuenta: cuando el cambio se introduce a través de MKP y el vendedor es de marca blanca, en estos casos, ¡es posible que el cambio no se replique en el vendedor!
¡Lo correcto es realizar el cambio a través del vendedor!

## Simulación

No es posible realizar una simulación, ya que los casos son esporádicos y, por lo general, se producen debido a un error de tiempo de espera, para lo cual ya hemos aumentado el temporizador.

## Workaround

Por el momento, no disponemos de una solución alternativa.