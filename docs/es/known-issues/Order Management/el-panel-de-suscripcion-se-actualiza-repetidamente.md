---
title: 'El panel de suscripción se actualiza repetidamente.'
slug: el-panel-de-suscripcion-se-actualiza-repetidamente
status: PUBLISHED
createdAt: 2022-05-02T21:14:51.000Z
updatedAt: 2026-09-14T22:56:59.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscription-dashboard-gets-refreshed-repeatedly
locale: es
kiStatus: Fixed
internalReference: 570688
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, al consultar la información de las suscripciones con incidencias, debido a la cantidad de caracteres del mensaje, se produce un problema al indexar la información en la interfaz de usuario, lo que provoca que la página se actualice repetidamente. Esto afecta no solo la experiencia del usuario, sino que también dificulta la visualización del error tanto en la cuadrícula del panel de control como en la opción emergente "(ver más)".

## Simulación

Este comportamiento se produce en la funcionalidad "**Suscripciones > Paneles de control > Órdenes de suscripción > Ciclos con incidencias**", dependiendo de la cantidad de caracteres del mensaje.

## Workaround

Actualmente no disponemos de una solución alternativa para este problema de navegación de la interfaz de usuario.