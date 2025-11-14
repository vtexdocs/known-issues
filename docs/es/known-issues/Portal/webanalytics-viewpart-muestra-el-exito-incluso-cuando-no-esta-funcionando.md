---
title: 'Webanalytics Viewpart Muestra el éxito incluso cuando no está funcionando'
slug: webanalytics-viewpart-muestra-el-exito-incluso-cuando-no-esta-funcionando
status: PUBLISHED
createdAt: 2025-11-14T19:37:09.872Z
updatedAt: 2025-11-14T19:37:09.872Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: webanalytics-viewpart-shows-success-even-when-it-isnt-working
locale: es
kiStatus: Backlog
internalReference: 768059
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, el viewpart de webanalytics no muestra ningún mensaje de error, incluso cuando falla y no entrega contenido de metadatos al usuario.

Este problema también podría ocultar posibles problemas relacionados con un número incorrecto de eventos PageView en la navegación de páginas VTEX heredadas.

## Simulación


Este problema es bastante difícil de replicar, ya que no hay retroalimentación de error.

El viewsource tiene una serie de etiquetas que pueden cargar metatada si el usuario ha implementado su GTM view-source:https://account.myvtex.com/

Sin embargo, incluso cuando las etiquetas (como el contenido gtm) no cargan los datos necesarios para enviar a google (por ejemplo, si no hay GTM configurado), se genera la etiqueta webanalytcs y no hay ningún feedback de error para informar al usuario de lo que está mal.

## Workaround


n/a



