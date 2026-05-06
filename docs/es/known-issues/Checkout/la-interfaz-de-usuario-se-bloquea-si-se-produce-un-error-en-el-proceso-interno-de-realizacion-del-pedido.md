---
title: 'La interfaz de usuario se bloquea si se produce un error en el proceso interno de realización del pedido'
slug: la-interfaz-de-usuario-se-bloquea-si-se-produce-un-error-en-el-proceso-interno-de-realizacion-del-pedido
status: PUBLISHED
createdAt: 2023-11-28T18:55:39.000Z
updatedAt: 2023-11-28T18:55:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-gets-frozen-if-an-error-occurs-in-the-place-order-internal-process
locale: es
kiStatus: Backlog
internalReference: 943771
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se produce un error durante el proceso interno de realización del pedido, la interfaz de usuario se queda bloqueada en la pantalla de carga sin mostrar ningún mensaje de error ni advertencia.

## Simulación

Este comportamiento se ha observado cuando el servicio fiscal agota el tiempo de espera durante la solicitud de realización del pedido, aunque no se limita a este caso.

## Workaround

provisional**
Actualiza la página.