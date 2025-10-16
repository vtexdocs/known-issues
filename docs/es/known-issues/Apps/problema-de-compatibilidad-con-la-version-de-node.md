---
title: Problema de compatibilidad con la versión de Node
slug: problema-de-compatibilidad-con-la-version-de-node
status: PUBLISHED
createdAt: 2025-10-16T19:23:28.894Z
updatedAt: 2025-10-16T19:23:28.894Z
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


Actualmente, nuestro builder hub se ejecuta en la imagen 16.X, lo que significa que sólo es posible construir librerías soportadas hasta esa versión. Las aplicaciones que utilizan builder 7 se ejecutan en el nodo 20, sin embargo, el problema surge cuando se construye, ya que el builder hub se ejecuta en la versión 16, causando un problema de incompatibilidad.


#### Simulación


Al intentar construir una aplicación en VTEX. Por ejemplo, el error es el siguiente:

    @vendor/app@1.X.X: El motor "node" es incompatible con este módulo. Versión esperada ">=18.0.0". Obtuvo "16.X.X "Módulo incompatible encontrado.


El módulo requiere la versión 18.0.0 o superior de Node, pero la versión actual utilizada por el constructor es la 16.X.X.

## Workaround


Dado que builder-hub está limitado a Node 16.X, necesitas usar paquetes que tengan el motor como node >= 16.X. Si estás usando una librería específica, necesitas bajar la versión de la librería a una compatible.



