---
title: 'El comportamiento de RefId no es coherente entre la API y la interfaz de usuario'
slug: el-comportamiento-de-refid-no-es-coherente-entre-la-api-y-la-interfaz-de-usuario
status: PUBLISHED
createdAt: 2023-09-29T13:10:51.000Z
updatedAt: 2023-10-20T13:41:33.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: refid-behavior-not-consistent-between-api-and-ui
locale: es
kiStatus: Backlog
internalReference: 910050
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, el código refid presenta dos comportamientos distintos: a través de la API no es posible que coincida con el de otros productos, pero a través de la interfaz de usuario sí se puede introducir el mismo valor que ya tienen otros productos.

## Simulación

Crea un producto con un código refId.
Crea otro producto e intenta utilizar el mismo código refId que el otro; a través de la API no será posible, pero sí a través de la interfaz de usuario.

## Workaround

Si necesitas utilizar los mismos refIds para diferentes productos, insértalos a través de la interfaz de usuario.