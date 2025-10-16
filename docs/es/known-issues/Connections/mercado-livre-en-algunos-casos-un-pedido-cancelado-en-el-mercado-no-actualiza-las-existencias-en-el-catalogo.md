---
title: Mercado Livre En algunos casos, un pedido cancelado en el mercado no actualiza las existencias en el catálogo
slug: mercado-livre-en-algunos-casos-un-pedido-cancelado-en-el-mercado-no-actualiza-las-existencias-en-el-catalogo
status: PUBLISHED
createdAt: 2025-10-16T20:27:13.001Z
updatedAt: 2025-10-16T20:27:13.001Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-in-some-cases-a-canceled-order-on-the-marketplace-doesnt-update-stock-in-the-catalog
locale: es
kiStatus: Backlog
internalReference: 1146543
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos casos, un pedido cancelado en el marketplace no actualiza el stock en el catálogo. Este escenario afecta a cuentas que trabajan con pocas unidades en stock (1 / 2 unidades)



#### Simulación



Escenario
Anuncio con una unidad en stock
Cuando se completa un pedido con la última unidad en stock > Mercado Livre restablece el stock del anuncio y lo pausa

En algunas situaciones
Pedido creado en Mercado Livre > Mercado Livre borra stock y pausa anuncio
Minutos después este pedido se cancela en Mercado Livre
Pedido cancelado > Mercado Livre devuelve stock y activa el anuncio en Mercado Livre
Pero el stock no vuelve al inventario del Catálogo VTEX


## Workaround


Anuncio para tener más de 2 unidades en stock



