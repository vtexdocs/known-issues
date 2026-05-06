---
title: 'El enlace de descarga de la exportación de datos maestros no está disponible'
slug: el-enlace-de-descarga-de-la-exportacion-de-datos-maestros-no-esta-disponible
status: PUBLISHED
createdAt: 2022-07-08T13:50:18.000Z
updatedAt: 2023-07-28T17:13:59.000Z
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

Actualmente, en el caso de las entidades de datos con varios campos, cuando se intenta exportar una hoja y descargarla, ya sea por correo electrónico o directamente a través de la interfaz de usuario, el enlace de descarga no guarda el archivo en el navegador.

## Simulación

1 - En una entidad de datos que contenga varios campos, intenta exportar todos los campos a la vez o varios registros

2 - El enlace de descarga no generará un archivo en su navegador

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)

## Workaround

**Haz clic con el botón derecho del ratón en el enlace de descarga y copia el enlace; a continuación, pégalo en otra pestaña y la descarga se iniciará, o bien** obtén los datos a través de la API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search y/o descarga los datos en varias hojas de cálculo más pequeñas