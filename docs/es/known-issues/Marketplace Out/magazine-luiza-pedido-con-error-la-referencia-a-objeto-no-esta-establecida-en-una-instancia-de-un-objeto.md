---
title: 'Magazine Luiza Pedido con error "La referencia a objeto no está establecida en una instancia de un objeto"'
slug: magazine-luiza-pedido-con-error-la-referencia-a-objeto-no-esta-establecida-en-una-instancia-de-un-objeto
status: PUBLISHED
createdAt: 2023-03-23T23:11:42.000Z
updatedAt: 2026-11-13T17:35:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-order-with-error-object-reference-not-set-to-an-instance-of-an-object
locale: es
kiStatus: Fixed
internalReference: 777298
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos pedidos no se crearon en OMS+Bridge y en el registro aparece el error: «Referencia de objeto no establecida a una instancia de un objeto»

Marketplace: Magazine Luiza
Causa raíz del producto: Pedidos
Impacto: ocurre con pocas solicitudes/excepciones

## Simulación

Podría tratarse de un error en la solicitud del cliente, donde faltaba algún campo obligatorio y, aparentemente, el flujo no previó que algún campo sería «nulo».

![](https://vtexhelp.zendesk.com/attachments/token/eAXF9lNpZblveDVQvGYdP8TXE/?name=image.png)

## Workaround

Proceda con el pedido directo en el Marketplace