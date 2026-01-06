---
title: 'El texto de inicio de sesión en la tienda no se traduce con el editor del sitio.'
slug: el-texto-de-inicio-de-sesion-en-la-tienda-no-se-traduce-con-el-editor-del-sitio
status: PUBLISHED
createdAt: 2026-01-06T14:19:07.898Z
updatedAt: 2026-01-06T14:19:07.898Z
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


Al tratar de traducir un texto utilizando el editor de sitio para el inicio de sesión de la tienda, los cambios no se aplicarán en el frente de la tienda.


#### Simulación



1. Abrir el editor del sitio
2. Seleccione el bloque Store Login
3. Cambia la etiqueta de texto del inicio de sesión por la que desees
4. Guardar cambios
5. Visualice la página y el texto será el mismo independientemente de la configuración regional seleccionada.


## Workaround


Asegúrese de que iconLabel está vacío tanto en el código de la tienda como en el editor del sitio.
Si no está seguro de que esté vacío en el editor del sitio, puede restablecer el contenido pasando por la versión del editor del sitio > restablecer.
 ![](https://vtexhelp.zendesk.com/attachments/token/PXovY6zVHdqqhxjodbtMqdXAa/?name=image.png)

Siga la documentación aquí y los contextos aquí para establecer la etiqueta como desee en su lugar.



