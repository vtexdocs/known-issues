---
title: 'El artículo añadido a la orden de modificación se encuentra en otro paquete tras la facturación'
slug: el-articulo-anadido-a-la-orden-de-modificacion-se-encuentra-en-otro-paquete-tras-la-facturacion
status: PUBLISHED
createdAt: 2021-08-12T23:01:42.000Z
updatedAt: 2023-05-09T12:40:39.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: item-added-to-change-order-is-in-another-package-after-invoiced
locale: es
kiStatus: Backlog
internalReference: 412526
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los artículos eliminados o añadidos mediante el proceso de modificación de pedidos no forman parte del paquete, por lo que no aparecerán en el correo electrónico de la factura; además, si se eliminan todos los artículos de un pedido y se añaden posteriormente, no se envía el correo electrónico de la factura, ya que los artículos añadidos no se incluyen en el paquete del pedido original;

## Simulación

1 - Tenga un pedido con el estado «**Gestión del envío**» y, a continuación, seleccione «_Modificación de artículos_»;
2 - Añada una o más unidades de un SKU existente al pedido (o añada un nuevo SKU);
3 - Compruebe que la unidad se ha añadido al paquete;
4 - Facture el pedido (a través de la interfaz de usuario o la API). En este caso, lo hice a través de la interfaz de usuario (_«Facturar paquete» > «Enviar una factura» > «Total»_). Pero puedes hacerlo utilizando este punto final;
5 - Y luego, podemos observar que, incluso después de facturar todo el paquete, la unidad añadida se encontraba en un paquete separado;
6 - Y no es posible facturar este paquete por separado;

El pedido aparecerá normalmente con el estado «**Facturado**», pero este detalle no resulta muy «intuitivo» (paquetes separados):

## Workaround

Lamentablemente, no disponemos de una solución alternativa para este caso.