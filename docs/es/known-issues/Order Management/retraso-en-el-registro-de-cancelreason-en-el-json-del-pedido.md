---
title: 'Retraso en el registro de «CancelReason» en el JSON del pedido'
slug: retraso-en-el-registro-de-cancelreason-en-el-json-del-pedido
status: PUBLISHED
createdAt: 2023-04-18T17:20:09.000Z
updatedAt: 2023-04-18T17:27:21.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delay-to-register-cancelreason-in-the-order-json
locale: es
kiStatus: Backlog
internalReference: 792650
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Debido a la forma en que se ejecuta el flujo de actualización de pedidos desde cualquier estado hasta el estado «cancelado», es posible que el sistema de pedidos tarde un tiempo en registrar el motivo de la cancelación (CancelReason) en el JSON del pedido, lo que provoca una breve inconsistencia si se consulta o se utiliza el JSON unos segundos después de la acción de cancelación;

Un ejemplo práctico es el uso de este campo en la plantilla `vtexcommerce-order-cancelled`, ya que, dado que el proceso de guardado puede tardar un tiempo, es posible que el envío del correo electrónico no entregue estos datos al usuario final, ya que el envío del correo electrónico es asíncrono con respecto al flujo de cancelación;

## Simulación

No es posible simularlo.
Pero se puede observar en la cronología de un pedido cancelado, una vez que la propiedad `cancellationReason` se utiliza en la plantilla de la tienda.

## Workaround

En caso de que el fallo afecte al proceso de obtención del pedido, recomendamos realizar una nueva obtención;