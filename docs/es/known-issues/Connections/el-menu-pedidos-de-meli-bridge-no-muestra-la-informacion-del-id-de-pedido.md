---
title: 'El menú «Pedidos» de MELI Bridge no muestra la información del ID de pedido'
slug: el-menu-pedidos-de-meli-bridge-no-muestra-la-informacion-del-id-de-pedido
status: PUBLISHED
createdAt: 2023-08-16T10:46:38.000Z
updatedAt: 2023-10-05T18:50:59.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-bridge-orders-menu-not-showing-the-orderid-information
locale: es
kiStatus: Fixed
internalReference: 881733
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente tenemos un problema que solo afecta a la visibilidad de algunos pedidos de MELI. Lo que ocurre es que, aunque estamos registrando el ShipmentID en el menú del puente de pedidos, en algunos mensajes de error falta el OrderID, y este es necesario en algunos casos, ya que el OrderID es la información que los vendedores tienen en el portal de MELI.

## Simulación

Dentro del menú de pedidos del puente, algunos mensajes de error no registran el ID del pedido, lo que da la impresión de que algunos pedidos no están en el puente de VTEX, pero los vendedores pueden encontrar los pedidos buscando el ID de envío.

## Workaround

provisional**
Buscar el ID de envío en lugar del ID del pedido