---
title: "[Magazine Luiza] Pedido FOB integrado con entrega 'Convencional"
id: 74uM19UXEopXguM6m0JbOL
status: PUBLISHED
createdAt: 2022-12-23T12:40:05.775Z
updatedAt: 2022-12-23T12:40:06.357Z
publishedAt: 2022-12-23T12:40:06.357Z
firstPublishedAt: 2022-12-23T12:40:06.357Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-integrated-fob-order-with-conventional-delivery
locale: es
kiStatus: Backlog
internalReference: 721951
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Necesitamos revisar el flujo y entender por qué órdenes como `"Magalu Entregas/FOB"` están siendo integradas con` selectedSla = "Convencional"` por ejemplo.

_**Mercado:**_ Revista Luiza
_**Producto Causa Raíz:**_ Pedidos
_**Arquitectura:**_ FOB / Magalu Entregas


##

## Simulación


 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Connections/magazine-luiza-pedido-fob-integrado-con-entrega-convencional_1.png)

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Connections/magazine-luiza-pedido-fob-integrado-con-entrega-convencional_2.png)


    Si no se envía isFOB=true, el SLA seleccionado debe ser uno del tipo FOB, como, por ejemplo: "selectedSla": "vtex:fob_1" Si desea seleccionar un ANS que no sea de tipo FOB, el campo isFOB deberá enviarse como false o no enviarse.




## Workaround


n/a

