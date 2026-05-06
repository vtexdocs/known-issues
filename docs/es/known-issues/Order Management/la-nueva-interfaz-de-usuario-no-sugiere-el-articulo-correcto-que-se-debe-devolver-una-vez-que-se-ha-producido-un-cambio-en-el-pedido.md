---
title: 'La nueva interfaz de usuario no sugiere el artículo correcto que se debe devolver una vez que se ha producido un cambio en el pedido'
slug: la-nueva-interfaz-de-usuario-no-sugiere-el-articulo-correcto-que-se-debe-devolver-una-vez-que-se-ha-producido-un-cambio-en-el-pedido
status: PUBLISHED
createdAt: 2023-01-18T15:04:39.000Z
updatedAt: 2023-01-18T17:05:33.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: ew-ui-does-not-suggest-the-correct-item-to-be-returned-once-the-order-has-a-change
locale: es
kiStatus: Backlog
internalReference: 735854
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La nueva interfaz de usuario no sugiere el artículo correcto para la devolución.
La nueva interfaz de usuario sugiere como artículo de salida uno que aún no se ha facturado, o bien puede sugerir un artículo que se ha eliminado de los artículos originales. Esto ocurre cuando se produce un cambio en el pedido, incluso si solo se modifica el valor. El campo «itemsReturnable» no es correcto en «api/orders/..invoices/summary».

## Simulación

Crea un pedido con dos o más artículos, realiza un cambio eliminando el artículo «itemindex0» e intenta la devolución en la nueva interfaz de usuario. El artículo «itemindex0» aparecerá como una opción para devolver.

## Workaround

provisional**
Por el momento no hay ninguna solución provisional.