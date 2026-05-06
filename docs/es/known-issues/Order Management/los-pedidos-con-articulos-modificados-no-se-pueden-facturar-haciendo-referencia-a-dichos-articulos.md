---
title: 'Los pedidos con artículos modificados no se pueden facturar haciendo referencia a dichos artículos'
slug: los-pedidos-con-articulos-modificados-no-se-pueden-facturar-haciendo-referencia-a-dichos-articulos
status: PUBLISHED
createdAt: 2023-04-04T18:06:30.000Z
updatedAt: 2025-11-05T15:12:31.000Z
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

Actualmente, al eliminar un artículo de un pedido a través del proceso de modificación de artículos, se espera que dicho artículo no aparezca durante el proceso de creación de la factura;
sin embargo, debido a la forma en que el proceso de modificación afecta al JSON del pedido, aunque el artículo se haya eliminado del pedido, sigue apareciendo cuando el usuario realiza el proceso de «Enviar factura con referencia a los artículos»;

Y por este motivo, la interfaz de usuario muestra un mensaje que impide al usuario continuar con este flujo de facturación;

## Simulación

1 - Disponer de un pedido con el estado «Gestión del envío» y seleccionar «Modificar artículo»;
2 - Eliminar una o más unidades de un SKU existente del pedido;
3 - Facturar el pedido (a través de la interfaz de usuario), seleccionando la opción de facturación «Enviar factura haciendo referencia a los artículos»;
4 - A continuación, observamos que el artículo eliminado del pedido sigue estando disponible para su selección en esta área;
5 - Al intentar realizar el flujo de facturación haciendo referencia a los artículos, independientemente de si se selecciona o no el artículo que se ha eliminado, la interfaz de usuario devuelve un error, lo que impide al usuario continuar con el flujo de facturación haciendo referencia a los artículos;

## Workaround

** **
No hay solución alternativa.