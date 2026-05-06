---
title: 'El informe de exportación de pedidos no funciona cuando hay algunos pedidos con una carga de datos elevada en la lista'
slug: el-informe-de-exportacion-de-pedidos-no-funciona-cuando-hay-algunos-pedidos-con-una-carga-de-datos-elevada-en-la-lista
status: PUBLISHED
createdAt: 2023-05-25T20:58:36.000Z
updatedAt: 2023-05-25T20:58:36.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-does-not-work-when-there-are-some-order-with-big-payload-on-the-list
locale: es
kiStatus: Backlog
internalReference: 832429
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La exportación de pedidos no funciona correctamente porque la tarea de exportación se cancela cuando hay un pedido en la lista con una carga de datos muy grande; por ejemplo, en el caso de un pedido con más de 500 artículos en JSON.

## Simulación

Configure un pedido con una carga útil elevada, con más de 500 artículos, e intente exportarlo utilizando la opción «Exportar pedidos filtrados» en el panel de administración.

## Workaround

provisional**
La solución provisional consiste en dividir el filtro. Establezca la fecha anterior a ese pedido y la fecha posterior a ese pedido.