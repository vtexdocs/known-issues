---
title: 'Catálogo Myvtex Iframe HTML: selección de «Breaking» para Chrome 108'
slug: catalogo-myvtex-iframe-html-seleccion-de-breaking-para-chrome-108
status: PUBLISHED
createdAt: 2022-12-06T18:58:05.000Z
updatedAt: 2022-12-06T18:58:21.000Z
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

Se trata de un efecto secundario de una actualización de Chrome para el que el equipo de Google tiene prevista una solución la próxima semana, el 12 de diciembre de 2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

El efecto que se nota en el panel de administración de VTEX es que los usuarios de Chrome v108 tienen problemas para seleccionar opciones en los menús desplegables; por ejemplo, en la pestaña de configuración de SKU, al intentar seleccionar un valor en el menú desplegable, no se genera ninguna acción (debería mostrarse la lista completa de valores posibles):

 ![](https://vtexhelp.zendesk.com/attachments/token/JvqH3KkI0sgflVmKG3IOCfHa1/?name=image.png)

## Simulación

Utilizando la última versión de Chrome, v 108.0.5359.95, intente acceder a un menú desplegable utilizando la versión de administrador de myvtex.

## Workaround

Existen numerosas soluciones alternativas, tales como:

1) Utilizar otros navegadores
2) Acceder a la misma interfaz de usuario a través de vtexcommercestable.com.br
3) Cambiar el valor a través de la API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification