---
title: 'Problema de compatibilidad de versiones de Node.'
slug: problema-de-compatibilidad-de-versiones-de-node
status: PUBLISHED
createdAt: 2025-07-08T17:31:55.000Z
updatedAt: 2026-06-26T17:13:56.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: issue-with-node-version-compatibility
locale: es
kiStatus: Backlog
internalReference: 1256617
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, nuestro centro de compilación se ejecuta en la imagen 16.X, lo que significa que solo es posible compilar bibliotecas compatibles hasta esa versión. Las aplicaciones que usan el compilador 7 se ejecutan en Node 20; sin embargo, el problema surge al compilar, ya que el centro de compilación se ejecuta en la versión 16, lo que provoca un problema de incompatibilidad.

## Simulación

Al intentar compilar una aplicación en VTEX, por ejemplo, se produce el siguiente error:

@vendor/app@1.X.X: El motor "node" es incompatible con este módulo. Se esperaba la versión ">=18.0.0". Se obtuvo "16.X.X". Se encontró un módulo incompatible.

El módulo requiere Node versión 18.0.0 o superior, pero la versión que usa actualmente el compilador es la 16.X.X.

## Workaround

Dado que builder-hub está limitado a Node 16.X, necesitas usar paquetes que tengan el motor Node >= 16.X. Si usas una biblioteca específica, debes cambiar a una versión compatible.