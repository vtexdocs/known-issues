---
title: 'El pedido de Amazon no se integra correctamente'
id: 76AsvaidpYs285YXs3GkyJ
status: PUBLISHED
createdAt: 2024-10-02T13:52:36.821Z
updatedAt: 2024-10-02T13:52:37.755Z
publishedAt: 2024-10-02T13:52:37.755Z
firstPublishedAt: 2024-10-02T13:52:37.755Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-order-does-not-integrate-correctly
locale: es
kiStatus: Backlog
internalReference: 1109828
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El pedido de Amazon no se envía a OMS correctamente o no sigue todo el flujo de trabajo correctamente atascándose en alguna fase.


##

## Simulación


Para realizar la reserva de los pedidos de Amazon, la integración no configura la información de deliveryChannel.

La mayoría de las veces la falta de esta información no tiene ningún impacto en el pedido, pero en algunos escenarios de error (como el tiempo de espera para confirmar la reserva) el sistema logístico necesita esta información para reprocesar el pedido.




## Workaround


N/A





