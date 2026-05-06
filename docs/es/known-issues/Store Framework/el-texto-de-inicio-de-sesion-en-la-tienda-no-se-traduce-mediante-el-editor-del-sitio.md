---
title: 'El texto de «Inicio de sesión en la tienda» no se traduce mediante el editor del sitio'
slug: el-texto-de-inicio-de-sesion-en-la-tienda-no-se-traduce-mediante-el-editor-del-sitio
status: PUBLISHED
createdAt: 2023-10-02T22:55:14.000Z
updatedAt: 2026-01-06T15:59:21.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: text-in-store-login-are-not-being-translated-using-site-editor
locale: es
kiStatus: Backlog
internalReference: 911757
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar traducir un texto mediante el editor del sitio para el inicio de sesión en la tienda, los cambios no se aplican en la página principal de la tienda.

## Simulación

1. Abre el editor del sitio
2. Selecciona el bloque «Inicio de sesión en la tienda»
3. Cambia el texto de la etiqueta del inicio de sesión por el que desees
4. Guarda los cambios
5. Visualiza la página y el texto seguirá siendo el mismo independientemente de la configuración regional seleccionada

## Workaround

Asegúrate de que iconLabel esté vacío tanto en el código de la tienda como en el editor del sitio.
Si no estás seguro de si está vacío en el editor del sitio, puedes restablecer el contenido yendo a la versión del editor del sitio > restablecer.
 ![](https://vtexhelp.zendesk.com/attachments/token/PXovY6zVHdqqhxjodbtMqdXAa/?name=image.png)

Sigue la documentación aquí y los contextos aquí para configurar la etiqueta como desees.