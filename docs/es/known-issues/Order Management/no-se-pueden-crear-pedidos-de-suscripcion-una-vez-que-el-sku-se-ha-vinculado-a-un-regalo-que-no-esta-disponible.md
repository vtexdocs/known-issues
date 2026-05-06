---
title: 'No se pueden crear pedidos de suscripción una vez que el SKU se ha vinculado a un regalo que no está disponible.'
slug: no-se-pueden-crear-pedidos-de-suscripcion-una-vez-que-el-sku-se-ha-vinculado-a-un-regalo-que-no-esta-disponible
status: PUBLISHED
createdAt: 2021-07-14T19:02:16.000Z
updatedAt: 2023-05-19T19:13:03.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-orders-can-not-be-created-once-the-sku-has-linked-to-a-gift-unavailable
locale: es
kiStatus: Fixed
internalReference: 395965
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Existe una situación en la que no se pueden crear pedidos de suscripción porque están vinculados a un **regalo no disponible**, aunque los artículos de la suscripción estén disponibles.

## Simulación

- Para simular esto, necesitas un regalo (como la promoción **Compra uno y llévate otro gratis**) vinculado a una referencia de suscripción, y este regalo debe estar indisponible después de realizar la compra y antes del siguiente ciclo.
- El error en el ciclo de suscripción es «**No se ha podido seleccionar un SLA para el SKU {SKU ID}**».

## Workaround

La forma de evitar esta situación es eliminar el enlace del regalo agotado o garantizar que el regalo tenga stock si se desea crear un nuevo ciclo con el regalo.