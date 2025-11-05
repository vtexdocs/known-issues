---
title: 'Los pedidos con itens de modificación no pueden facturarse haciendo referencia a los artículos'
slug: los-pedidos-con-itens-de-modificacion-no-pueden-facturarse-haciendo-referencia-a-los-articulos
status: PUBLISHED
createdAt: 2025-11-05T12:13:05.070Z
updatedAt: 2025-11-05T12:13:05.070Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-with-change-itens-cannot-be-invoiced-referencing-the-items
locale: es
kiStatus: Backlog
internalReference: 784171
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Actualmente, al eliminar un artículo de un pedido mediante el flujo de modificación de artículos, se espera que el artículo no se muestre durante el flujo de facturación de artículos;
Sin embargo, debido a la forma en que el flujo de cambios actúa sobre el json del pedido, aunque el artículo se haya eliminado del pedido, se sigue mostrando cuando el usuario realiza el proceso Enviar factura con referencia a artículos;

Y por esta razón la UI devuelve un mensaje impidiendo al usuario continuar con este flujo de facturas;


#### Simulación


1 - Tener un pedido en estado "Gestionando envío" y seleccionar "Modificar artículo";
2 - Eliminar una o más unidades de una SKU existente del pedido;
3 - Facturar el pedido (vía UI), seleccionando la opción factura - Enviar factura referenciando artículos;
4 - Y entonces, podemos observar que el artículo eliminado del pedido sigue estando disponible para su selección en esta área;
5 - Al tratar de realizar el flujo de elementos de la factura que hace referencia a los elementos de elegir o no el elemento que se ha eliminado la interfaz de usuario devuelve un error, lo que impide al usuario continuar con el flujo de la factura que hace referencia elemento;


## Workaround


** **
No hay solución.


