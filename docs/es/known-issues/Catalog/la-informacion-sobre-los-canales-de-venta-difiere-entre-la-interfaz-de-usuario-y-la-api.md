---
title: 'La información sobre los canales de venta difiere entre la interfaz de usuario y la API'
slug: la-informacion-sobre-los-canales-de-venta-difiere-entre-la-interfaz-de-usuario-y-la-api
status: PUBLISHED
createdAt: 2023-05-04T15:30:00.000Z
updatedAt: 2023-05-04T15:30:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sales-channel-info-divergent-between-ui-and-api
locale: es
kiStatus: Backlog
internalReference: 802560
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, la información sobre el canal de venta puede variar en función de dónde la consulte el cliente.

## Simulación

Esta situación no se da siempre. Suele ocurrir cuando la indexación falla o no es reciente.

Comprueba el canal de venta al que pertenece el producto a través de la interfaz de usuario.
Comprueba el canal de venta al que pertenece el producto a través de la API:
https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}
 ![](https://vtexhelp.zendesk.com/attachments/token/F8f1Y1fSQVsq5JubtoILmeZjz/?name=image.png)

## Workaround

Indexe el producto.