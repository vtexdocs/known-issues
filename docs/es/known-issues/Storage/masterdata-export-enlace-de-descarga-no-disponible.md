---
title: 'Masterdata Export Enlace de descarga no disponible'
slug: masterdata-export-enlace-de-descarga-no-disponible
status: PUBLISHED
createdAt: 2025-11-14T19:39:32.015Z
updatedAt: 2025-11-14T19:39:32.015Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-export-download-link-unavailable
locale: es
kiStatus: Backlog
internalReference: 613864
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, para las entidades de datos con varios campos, cuando se intenta exportar una hoja y descargarla, tanto por correo electrónico como directamente a través de la interfaz de usuario, el enlace de descarga no guarda el archivo en el navegador.



#### Simulación


1 - para una entidad de datos en la que tiene varios campos, intente exportar todos sus campos al mismo tiempo o varios registros

2 - el enlace de descarga no generará un archivo en su navegador

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)

## Workaround


**Haga clic con el botón derecho del ratón en el enlace de descarga y copie el enlace; a continuación, péguelo en otra pestaña y se iniciará la descarga o bien obtenga los datos a través de la API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search y/o descargue los datos en varias hojas de cálculo más pequeñas.