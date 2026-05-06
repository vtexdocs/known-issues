---
title: 'El SKU eliminado de Amazon SC no se desactiva en el portal de Amazon'
slug: el-sku-eliminado-de-amazon-sc-no-se-desactiva-en-el-portal-de-amazon
status: PUBLISHED
createdAt: 2023-05-18T11:43:16.000Z
updatedAt: 2023-08-14T17:49:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: sku-removed-from-amazon-sc-is-not-being-disable-in-amazon-portal
locale: es
kiStatus: Fixed
internalReference: 827760
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente tenemos un problema con la integración de Amazon: cuando se elimina un SKU de un canal de ventas de Amazon ya existente, no se envía la notificación de desactivación al Centro de vendedores de Amazon.

## Simulación

Esto puede provocar que los SKU sin canal de ventas de Amazon en VTEX se activen en el Centro de vendedores de Amazon.

## Workaround

provisional**
Cuando se detecte este caso, el vendedor puede desactivar directamente el SKU en el Centro de vendedores de Amazon para evitar que se generen pedidos de dicho SKU.