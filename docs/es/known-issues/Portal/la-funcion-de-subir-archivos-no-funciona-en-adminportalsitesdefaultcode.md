---
title: 'La función de subir archivos no funciona en admin/portal/#/sites/default/code'
slug: la-funcion-de-subir-archivos-no-funciona-en-adminportalsitesdefaultcode
status: PUBLISHED
createdAt: 2023-09-12T13:37:21.000Z
updatedAt: 2023-09-12T13:37:21.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: upload-file-not-working-on-adminportalsitesdefaultcode
locale: es
kiStatus: Backlog
internalReference: 897956
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar subir un nuevo archivo en admin/portal/#/sites/default/code no ocurre nada. Al consultar la consola en DevTools, vemos un mensaje de error:
«eventTrackerService no está definido»

## Simulación

1. Ve a admin/portal/#/sites/default/code
2. Vaya a Nuevo -> Subir archivo -> seleccione el archivo que desea importar -> haga clic en crear
 ![](https://vtexhelp.zendesk.com/attachments/token/4uSgPeUxG9xAOkTq1HUs8khX6/?name=image.png)
3. Compruebe que no ocurre nada.

## Workaround

La solución alternativa es crear el archivo directamente en esta interfaz de usuario.
Ve a Nuevo -> Archivo -> Asigna un nombre al archivo y haz clic en «Crear» -> Inserta el código y haz clic en «Guardar».