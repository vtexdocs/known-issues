---
title: 'Subir archivo no funciona en admin/portal/#/sites/default/code'
id: 5pFAkaymcuOQMAqUDGPQZK
status: PUBLISHED
createdAt: 2023-09-12T13:37:36.429Z
updatedAt: 2023-09-12T13:37:37.323Z
publishedAt: 2023-09-12T13:37:37.323Z
firstPublishedAt: 2023-09-12T13:37:37.323Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: upload-file-not-working-on-adminportalsitesdefaultcode
locale: es
kiStatus: Backlog
internalReference: 897956
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al intentar subir un nuevo fichero en admin/portal/#/sites/default/code no ocurre nada. Comprobando la consola en devTools podemos ver un mensaje de error:
"eventTrackerService no está definido"


##

## Simulación



1. 1. Vaya a admin/portal/#/sites/default/code
2. Vaya a Nuevo -> Subir Archivo -> seleccione el archivo que desea importar -> pulse crear
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Portal/subir-archivo-no-funciona-en-adminportalsitesdefaultcode_1.png)
3. Compruebe que no ocurre nada.


##

## Workaround


La WA es crear el fichero directamente en esta UI.
Ir a Nuevo -> Archivo -> Nombre del archivo y haga clic en crear -> Inserte el código y haga clic en guardar.





