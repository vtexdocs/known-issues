---
title: 'El informe de exportación de pedidos no funciona cuando hay algún pedido con una gran carga útil en la lista.'
id: 3mV7q5QNFNwqsIzareUBEn
status: PUBLISHED
createdAt: 2023-05-25T20:58:49.088Z
updatedAt: 2023-05-25T20:58:49.643Z
publishedAt: 2023-05-25T20:58:49.643Z
firstPublishedAt: 2023-05-25T20:58:49.643Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-export-report-does-not-work-when-there-are-some-order-with-big-payload-on-the-list
locale: es
kiStatus: Backlog
internalReference: 832429
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La exportación de pedidos no funciona correctamente porque la tarea de exportar se cancela cuando hay un pedido en la lista con una gran carga útil, por ejemplo en el caso de un pedido con más de 500 elementos en json.



## Simulación


Configure un pedido con una gran cantidad de artículos (más de 500 artículos) e intente exportar utilizando la opción Filtrar Pedidos en Admin.



## Workaround


La solución es dividir el filtro. Estableciendo la fecha anterior a ese pedido y la fecha posterior a ese pedido.





