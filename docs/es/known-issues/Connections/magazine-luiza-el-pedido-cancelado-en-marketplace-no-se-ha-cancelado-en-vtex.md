---
title: 'Magazine Luiza El pedido cancelado en Marketplace no se ha cancelado en VTEX'
slug: magazine-luiza-el-pedido-cancelado-en-marketplace-no-se-ha-cancelado-en-vtex
status: PUBLISHED
createdAt: 2023-04-18T16:52:57.000Z
updatedAt: 2023-04-18T16:52:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-order-canceled-on-marketplace-didnt-cancel-on-vtex
locale: es
kiStatus: Backlog
internalReference: 792618
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El pedido se canceló en el marketplace, pero en el OMS figura como cancelado y sigue con el estado «A la espera de autorización para el envío».

## Simulación

- Pedido cancelado en el marketplace;
- El estado del pedido no se actualizó a «Cancelado» en el OMS;
- El registro no muestra ningún error en el flujo;
- Bridge no muestra ningún error;

Debemos revisar el flujo de los pedidos cancelados y el proceso que recupera el estado de estos pedidos del marketplace.

## Workaround

provisional**
¿Es posible cancelar el pedido utilizando una ruta interna?