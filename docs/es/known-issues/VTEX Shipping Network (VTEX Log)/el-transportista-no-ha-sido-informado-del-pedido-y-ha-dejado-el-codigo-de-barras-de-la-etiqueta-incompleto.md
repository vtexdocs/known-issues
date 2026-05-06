---
title: 'El transportista no ha sido informado del pedido y ha dejado el código de barras de la etiqueta incompleto'
slug: el-transportista-no-ha-sido-informado-del-pedido-y-ha-dejado-el-codigo-de-barras-de-la-etiqueta-incompleto
status: PUBLISHED
createdAt: 2023-08-01T16:50:43.000Z
updatedAt: 2023-09-18T22:52:38.000Z
contentType: knownIssue
productTeam: VTEX Shipping Network (VTEX Log)
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shipping Network (VTEX Log)
slugEN: order-not-notified-carrier-leaves-label-barcode-incomplete
locale: es
kiStatus: Backlog
internalReference: 872530
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los clientes que utilicen transportistas asociados a Shipping Network, al solicitar la emisión de la etiqueta en Ready to Ship, pueden recibir un archivo con el código de barras incompleto, lo que podría impedir el envío del paquete.

## Simulación

No fue posible reproducir el problema, solo verificarlo comprobando las etiquetas enviadas por los clientes con el código de barras incompleto y confirmando a través de la API que el paquete no había sido notificado.

## Workaround

Notificar el pedido manualmente de nuevo garantiza que se avise al transportista, que el código de barras esté completo y que la etiqueta pueda utilizarse.