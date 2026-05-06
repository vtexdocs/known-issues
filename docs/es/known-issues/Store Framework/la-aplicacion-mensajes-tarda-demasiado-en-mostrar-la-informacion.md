---
title: 'La aplicación Mensajes tarda demasiado en mostrar la información'
slug: la-aplicacion-mensajes-tarda-demasiado-en-mostrar-la-informacion
status: PUBLISHED
createdAt: 2022-04-26T20:00:55.000Z
updatedAt: 2024-01-30T14:16:42.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: messages-app-taking-too-long-to-return-the-informations
locale: es
kiStatus: Backlog
internalReference: 567305
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el proceso de indexación, llamamos a la aplicación de mensajes para guardar la información traducida de los productos; el principal problema es que las solicitudes tardan demasiado en responder y, por ello, algunas tiendas con muchos idiomas o bien no se indexan por completo o bien se bloquean durante la indexación.

## Simulación

Comprueba cualquier tienda que tenga una gran cantidad de idiomas, más de 10, y verás que la respuesta de los mensajes empieza a ralentizarse.
Esto puede afectar a otros sistemas que dependen de los mensajes para traducir la información.

## Workaround

provisional**
N/A