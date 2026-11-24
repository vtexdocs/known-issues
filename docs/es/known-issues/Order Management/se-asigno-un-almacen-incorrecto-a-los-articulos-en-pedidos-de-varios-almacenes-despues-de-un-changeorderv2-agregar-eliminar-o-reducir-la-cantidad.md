---
title: 'Se asignó un almacén incorrecto a los artículos en pedidos de varios almacenes después de un ChangeOrderV2 (agregar, eliminar o reducir la cantidad).'
slug: se-asigno-un-almacen-incorrecto-a-los-articulos-en-pedidos-de-varios-almacenes-despues-de-un-changeorderv2-agregar-eliminar-o-reducir-la-cantidad
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-11-25T00:19:25.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-warehouse-assigned-to-items-in-multiwarehouse-orders-after-a-changeorderv2-add-remove-or-reduce-quantity
locale: es
kiStatus: Backlog
internalReference: 1433311
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un pedido con artículos provenientes de diferentes almacenes se modifica mediante el flujo de cambios posterior a la compra, un artículo puede quedar guardado en el almacén incorrecto. Esto puede ocurrir al agregar un artículo, o al eliminar otros artículos o reducir su cantidad: un artículo restante puede reasignarse al almacén (y tarifa de envío) de otro artículo del pedido. El registro del pedido y el administrador muestran entonces un almacén diferente al de la reserva de stock, que mantiene el almacén original. Este problema no se origina en la facturación ni en el ERP.

## Simulación

1. Pedido en Marketplace con dos artículos provenientes de diferentes almacenes que comparten el mismo muelle de entrega y la misma opción de envío.

2. Reducir la cantidad de un artículo o eliminar una línea mediante el flujo de cambios.

3. Comparar el almacén del artículo en el pedido antes y después del cambio, y la reserva de stock. La reserva no se actualiza.

## Workaround

No existe una solución alternativa validada para eliminaciones o reducciones de cantidad. La reserva de stock mantiene el almacén original, por lo que el inventario no se ve afectado; la discrepancia se produce en el registro del pedido. Si el almacén exacto es fundamental, evite eliminar artículos de pedidos con múltiples almacenes mediante el flujo de cambios (sin validación).