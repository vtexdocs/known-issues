---
title: La sustitución de archivos SVG con el mismo nombre no funciona
slug: la-sustitucion-de-archivos-svg-con-el-mismo-nombre-no-funciona
status: PUBLISHED
createdAt: 2025-10-16T20:00:47.544Z
updatedAt: 2025-10-16T20:00:47.544Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: svg-file-replacement-with-the-same-name-doesnt-work
locale: es
kiStatus: Backlog
internalReference: 1151600
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se utiliza el gestor de archivos CMS en el administrador de la cuenta, hay una opción para que usted pueda subir archivos:

 ![](https://vtexhelp.zendesk.com/attachments/token/tIFD30VhzhOuxTIV0f7UurtEH/?name=image.png) ![](https://vtexhelp.zendesk.com/attachments/token/k1Du6DExk2Rg7OCwXAKVRJfzv/?name=image.png)

Cuando suba archivos .SVG, si elige reemplazar un archivo anterior, utilizando el mismo nombre, se mostrará la siguiente pantalla:

 ![](https://vtexhelp.zendesk.com/attachments/token/3jOyJQyyWWZJ2s6tlzjiJyDko/?name=image.png)

Sin embargo, el contenido de dicho archivo nunca se actualiza cuando se utiliza este método.


#### Simulación


1 - Obtener 2 archivos .SVG con el mismo nombre.
2 - subir el archivo #1 y comprobar su contenido
3 - sube el archivo #2 y comprueba su contenido, incluso después de días, no se habrá sobrescrito.

## Workaround


Borre el archivo anterior antes de volver a subirlo.



