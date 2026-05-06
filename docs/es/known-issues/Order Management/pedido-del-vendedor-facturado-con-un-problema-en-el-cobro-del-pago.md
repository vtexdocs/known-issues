---
title: 'Pedido del vendedor facturado con un problema en el cobro del pago'
slug: pedido-del-vendedor-facturado-con-un-problema-en-el-cobro-del-pago
status: PUBLISHED
createdAt: 2021-06-02T15:40:03.000Z
updatedAt: 2024-01-29T16:51:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sellers-order-invoiced-with-problem-in-the-payment-capture
locale: es
kiStatus: Backlog
internalReference: 376646
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En este momento, tal y como está estructurada nuestra arquitectura, tanto el vendedor como el mercado son dos entidades totalmente distintas. El funcionamiento es el siguiente: el mercado se encarga de recibir el pago del cliente, mientras que el vendedor se encarga de toda la logística hasta el momento de entregar los productos al cliente.

La parte de «recibir el pago» se divide en autorización y captura. Ambas son acciones independientes en la pasarela de pago y se ejecutan en dos momentos distintos. La primera tiene lugar cuando el cliente realiza la compra y la segunda, cuando se introduce una factura en el sistema. Tras el proceso de autorización, el mercado «indica» al vendedor que puede proceder a preparar y enviar los productos al cliente. Dado que existe un intervalo de tiempo entre la autorización y la captura, y que se trata de acciones independientes, no hay garantía de que la acción de captura se ejecute correctamente.

Esto nos deja con el problema de que el vendedor recibió una notificación para enviar los productos, introdujo una notificación de factura en el sistema y el Marketplace tuvo un problema al intentar realizar la acción de captura.

En estos casos de notificación de autorización y captura, la pasarela siempre notifica inicialmente al marketplace, que a su vez notifica al vendedor.

El problema es que el flujo del vendedor no se detiene por los problemas que pueda tener en la captura del pago, sino que se refleja en el flujo del marketplace.

## Simulación

No disponemos de un paso a paso para replicarlo; sin embargo, es posible validar un pedido de ejemplo.

Podemos ver que el pedido del Marketplace informó de un problema en la captura y no pudo completar el flujo, mostrando el error: «La operación de liquidación ha devuelto un error».

En el flujo, el estado del pedido en el Marketplace será «Verificando factura» y en las interacciones se mostrará el mensaje: «La operación de liquidación ha devuelto un error».

En los eventos de transacción, se mostrará el mensaje: «Error: La respuesta fue Entity_Declined».

Aunque el pedido del vendedor llegó a «Facturado», esto se debe a que, para el vendedor en la arquitectura actual, la captura del pago no es su responsabilidad, incluso siendo el propietario del pago.

## Workaround

En este momento no disponemos de una solución alternativa para completar el flujo del Marketplace, ya que esto depende de que la captura se realice correctamente. Sin la confirmación de la pasarela, el pedido no podrá avanzar. Lamentablemente, la única forma de resolver este tipo de inconsistencia es cancelar el pedido del Marketplace e intentar realizar uno nuevo manualmente.

Es importante comprobar siempre que la captura del pago se haya completado antes de entregar los productos



%0A