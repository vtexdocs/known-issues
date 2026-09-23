---
title: 'Catálogo Myvtex Iframe HTML Seleccionar Roto para Chrome 108'
slug: catalogo-myvtex-iframe-html-seleccionar-roto-para-chrome-108
status: PUBLISHED
createdAt: 2022-12-06T21:58:05.000Z
updatedAt: 2026-09-23T17:42:02.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-myvtex-iframe-html-select-breaking-for-chrome-108
locale: es
kiStatus: Backlog
internalReference: 711637
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Este es un efecto secundario de una actualización de Chrome que el equipo de Google tiene programada para solucionar la próxima semana, el 12/12/2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

El efecto que experimenta el administrador de VTEX es que los usuarios de Chrome v108 tienen problemas para seleccionar opciones en los menús desplegables. Por ejemplo, en la pestaña de configuración de SKU, al intentar seleccionar un valor en el menú desplegable, no se genera ninguna acción (debería mostrarse la lista completa de valores posibles):

![](https://vtexhelp.zendesk.com/attachments/token/JvqH3KkI0sgflVmKG3IOCfHa1/?name=image.png)

## Simulación

Usando la última versión de Chrome, v 108.0.5359.95, intenta acceder al menú desplegable usando la versión de administración de myvtex.

## Workaround

Existen varias soluciones alternativas, como:

1) Usar otros navegadores
2) Acceder a la misma interfaz de usuario a través de vtexcommercestable.com.br
3) Cambiar el valor mediante la API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification