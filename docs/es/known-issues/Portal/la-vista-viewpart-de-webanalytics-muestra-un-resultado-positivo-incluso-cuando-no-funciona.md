---
title: 'La vista «Viewpart» de Webanalytics muestra un resultado positivo incluso cuando no funciona'
slug: la-vista-viewpart-de-webanalytics-muestra-un-resultado-positivo-incluso-cuando-no-funciona
status: PUBLISHED
createdAt: 2023-03-09T18:20:24.000Z
updatedAt: 2023-03-09T18:20:40.000Z
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

Actualmente, el componente «webanalytics» no muestra ningún mensaje de error, incluso cuando falla y no proporciona el contenido de metadatos al usuario.

Este problema también podría ocultar posibles incidencias relacionadas con un número incorrecto de eventos PageView en la navegación de las páginas heredadas de VTEX

## Simulación

Este problema es bastante difícil de reproducir, ya que no hay notificación de error.

El código fuente de la vista contiene una serie de etiquetas que pueden cargar metadatos si el usuario ha implementado su código fuente de GTM:https://account.myvtex.com/

Sin embargo, incluso cuando las etiquetas (como el contenido de GTM) no cargan los datos necesarios para enviarlos a Google (por ejemplo, si no hay ningún GTM configurado), la etiqueta de WebAnalytics se genera y no hay ningún mensaje de error que informe al usuario de lo que falla.

## Workaround

provisional**
n/a