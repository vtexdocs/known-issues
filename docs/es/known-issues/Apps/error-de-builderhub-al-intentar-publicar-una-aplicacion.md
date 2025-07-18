---
title: Error de Builder-hub al intentar publicar una aplicación
slug: error-de-builderhub-al-intentar-publicar-una-aplicacion
status: PUBLISHED
createdAt: 2025-07-18T12:49:30.771Z
updatedAt: 2025-07-18T12:49:30.771Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: builderhub-error-when-trying-to-publish-an-app
locale: es
kiStatus: Backlog
internalReference: 1262332
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al intentar publicar una app, es posible que te encuentres con un error builder-hub. Esta intermitencia ocurre normalmente en apps con autodependencia. Verás un error como:


    error: node@4.x builder failed to install dependencies through yarn (retries=3)yarn errors:Se ha producido un error inesperado: "http://.vtexassets.com/_v/public/typings/v1//public/@types/: Request failed \"500 Internal Server Error\"". vtex.builder-hub@0.309.0



#### Simulación


No es un problema sencillo de reproducir, es intermitente.

## Workaround


Puede solucionarse tras algunos reintentos, pero si persiste, abre un ticket a Soporte de Producto para solucionarlo



