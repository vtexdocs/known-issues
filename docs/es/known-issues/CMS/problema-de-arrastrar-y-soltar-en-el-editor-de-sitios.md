---
title: 'Problema de arrastrar y soltar en el Editor de Sitios'
slug: problema-de-arrastrar-y-soltar-en-el-editor-de-sitios
status: PUBLISHED
createdAt: 2025-11-17T17:30:11.517Z
updatedAt: 2025-11-17T17:30:11.517Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: drag-and-drop-issue-on-site-editor
locale: es
kiStatus: Backlog
internalReference: 685103
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los clientes no pueden utilizar la función de arrastrar y soltar en el editor del sitio para subir imágenes, esto probablemente ocurre duo nuestra nueva implementación de nuestro nuevo CMS Media Management.


#### Simulación



Ir a cualquier cuenta y tratar de subir una imagen de banner a través de arrastrar y soltar

 ![](https://vtexhelp.zendesk.com/attachments/token/VImrMx2X11Cyb9sePaOFJJbj2/?name=inline785506209.png)
https://share.vidyard.com/watch/RXWHL4QYir7i5h1U4zuEuJ


#### Workaround


Subir imágenes sin usar arrastrar y soltar, o,

Trate de volver a una versión anterior de admin-pages sin algunas correcciones y CMS Media Management, que es la versión de admin-pages 4.43.1

Ejecute `vtex install vtex.admin-pages@4.43.1`
Esto resolverá el problema de arrastrar y soltar, pero otros problemas pueden aparecer de nuevo.