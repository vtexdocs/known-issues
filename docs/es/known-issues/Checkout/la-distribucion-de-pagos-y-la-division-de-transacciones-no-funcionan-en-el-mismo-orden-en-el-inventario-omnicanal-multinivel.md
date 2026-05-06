---
title: 'La distribución de pagos y la división de transacciones no funcionan en el mismo orden en el inventario omnicanal multinivel'
slug: la-distribucion-de-pagos-y-la-division-de-transacciones-no-funcionan-en-el-mismo-orden-en-el-inventario-omnicanal-multinivel
status: PUBLISHED
createdAt: 2023-03-23T19:03:08.000Z
updatedAt: 2023-03-27T12:27:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payout-and-transaction-split-dont-work-in-the-same-order-for-multilevel-omnichannel-inventory
locale: es
kiStatus: Backlog
internalReference: 777201
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un mercado con vendedores que mantienen relaciones multinivel (MOI), cuando se crea un carrito con al menos un vendedor que utiliza el reparto de transacciones y otros que utilizan el reparto de pagos, las transacciones con reparto de pagos se duplicarán, repitiendo los artículos de los distintos vendedores. En este caso, no será posible realizar el pedido y aparecerá el mensaje «Lo sentimos. No se han podido procesar los pagos solicitados».

## Simulación

- Configura un vendedor con el punto final de pago / para que utilice relaciones multinivel (MOI);
- Configura un vendedor con el punto final de cumplimiento y habilita la división de transacciones;
- Crea un carrito con esos vendedores;
- Realiza el pedido.

## Workaround

Utiliza la división de pagos para todos los vendedores