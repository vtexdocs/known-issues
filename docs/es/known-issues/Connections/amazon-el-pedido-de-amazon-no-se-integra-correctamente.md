---
title: 'Amazon El pedido de Amazon no se integra correctamente'
slug: amazon-el-pedido-de-amazon-no-se-integra-correctamente
status: PUBLISHED
createdAt: 2025-11-17T17:35:15.930Z
updatedAt: 2025-11-17T17:35:15.930Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-amazon-order-does-not-integrate-correctly
locale: es
kiStatus: Fixed
internalReference: 1109828
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El pedido de Amazon no se envía a OMS correctamente o no sigue todo el flujo de trabajo correctamente atascándose en alguna fase.



#### Simulación


Para realizar la reserva de los pedidos de Amazon, la integración no configura la información del deliveryChannel.

La mayoría de las veces la falta de esta información no tiene ningún impacto en el pedido, pero en algunos escenarios de error (como el tiempo de espera para confirmar la reserva) el sistema logístico necesita esta información para reprocesar el pedido.

## Workaround


N/A



