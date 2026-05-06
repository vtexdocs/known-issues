---
title: 'Error de MELI al enviar el seguimiento del pedido'
slug: error-de-meli-al-enviar-el-seguimiento-del-pedido
status: PUBLISHED
createdAt: 2023-03-06T10:06:43.000Z
updatedAt: 2023-10-20T17:28:21.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-error-while-sending-the-order-tracking
locale: es
kiStatus: Fixed
internalReference: 764885
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente estamos registrando un mensaje de error en el menú Bridge - Seguimiento; este error lo devuelve MELI cuando les enviamos el flujo de seguimiento.

Es importante señalar que esto no afecta al flujo, ya que el seguimiento funciona correctamente, pero el problema es que estamos registrando el mensaje como un error cuando debería aparecer como un éxito (debido a lo que devuelve MELI).

## Simulación

Dentro del menú Bridge - Seguimiento se mostrará un mensaje de error como el que se indica a continuación.

«Mensaje de error no mapeado por la integración. Póngase en contacto con VTEX informando de lo ocurrido para que se realice el mapeo.
Mensaje de error de Mercado Libre:»

## Workaround

provisional**

No es necesario realizar ninguna acción; es importante tener en cuenta que, aunque se muestre el mensaje de error, esto no afecta al flujo de seguimiento, el XML se envía a MELI y el estado del pedido se actualiza.