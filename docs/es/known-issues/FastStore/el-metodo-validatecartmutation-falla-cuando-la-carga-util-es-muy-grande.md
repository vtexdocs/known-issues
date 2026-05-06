---
title: 'El método «ValidateCartMutation» falla cuando la carga útil es muy grande'
slug: el-metodo-validatecartmutation-falla-cuando-la-carga-util-es-muy-grande
status: PUBLISHED
createdAt: 2024-02-21T15:23:28.000Z
updatedAt: 2024-02-21T15:23:28.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecartmutation-failing-when-large-payload
locale: es
kiStatus: Backlog
internalReference: 985867
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al añadir varios productos al minicart, dependiendo de la información asociada a dichos productos, si se produce un error «payloadTooLarge», el producto se añadirá al carrito pero no se transferirá correctamente al formulario de pedido

## Simulación

- Añade productos al carrito hasta que recibas un error 413 «Payload Too Large»

## Workaround

provisional**
N/A