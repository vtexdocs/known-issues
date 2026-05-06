---
title: 'Magazine Luiza Pedido con el error «La referencia al objeto no se ha establecido en una instancia de un objeto»'
slug: magazine-luiza-pedido-con-el-error-la-referencia-al-objeto-no-se-ha-establecido-en-una-instancia-de-un-objeto
status: PUBLISHED
createdAt: 2023-03-23T20:11:42.000Z
updatedAt: 2023-03-23T20:11:42.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-order-with-error-object-reference-not-set-to-an-instance-of-an-object
locale: es
kiStatus: Backlog
internalReference: 777298
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos pedidos no se crearon en OMS+Bridge y en el registro aparece el error: `"La referencia de objeto no se ha establecido en una instancia de un objeto"`

Marketplace: Magazine Luiza
Producto Causa raíz: Pedidos
Impacto:  ocurre con pocas solicitudes/excepciones

## Simulación

Incluso podría tratarse de un error en la solicitud del cliente, en la que faltaba algún campo obligatorio y, al parecer, el flujo no previó que se produjera un valor «nulo» en algún campo.

 ![](https://vtexhelp.zendesk.com/attachments/token/eAXF9lNpZblveDVQvGYdP8TXE/?name=image.png)

## Workaround

provisional**
Proceder con el pedido directo en el Marketplace