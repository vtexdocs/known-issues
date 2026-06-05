---
title: 'NPS: no aceptamos respuestas con más de 65 536 caracteres'
slug: nps-no-aceptamos-respuestas-con-mas-de-65-536-caracteres
status: PUBLISHED
createdAt: 2020-12-17T18:32:42.000Z
updatedAt: 2026-06-05T21:08:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: nps-we-arent-accepting-response-with-more-than-65536-characters
locale: es
kiStatus: No Fix
internalReference: 317389
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar el conector **NPS**, las transacciones que contienen un **gran número de artículos de pedido** pueden fallar durante la fase de liquidación automática. El conector NPS devuelve una respuesta que supera el **límite de 65 536 caracteres** aceptado por VTEX Gateway, lo que provoca que la liquidación falle con el siguiente error:

> `Error desconocido en AutoSettle — Se ha superado el límite máximo de tamaño de los mensajes entrantes (65 536). Para aumentar el límite, utilice la propiedad MaxReceivedMessageSize en el elemento de enlace correspondiente.`

La transacción se bloquea y no se puede liquidar automáticamente.

## Simulación

El problema puede producirse al realizar un pedido con **más de aproximadamente 223 artículos** utilizando el conector NPS. La respuesta devuelta por NPS refleja la lista completa de artículos de la orden, y cuando esta lista es lo suficientemente grande como para superar los 65 536 caracteres, la pasarela rechaza el mensaje.

## Workaround

provisional**
No hay ninguna solución provisional disponible.