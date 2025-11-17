---
title: 'La bandera MessagessV2 requiere que el contenido se guarde en el idioma original'
slug: la-bandera-messagessv2-requiere-que-el-contenido-se-guarde-en-el-idioma-original
status: PUBLISHED
createdAt: 2025-11-17T17:30:28.389Z
updatedAt: 2025-11-17T17:30:28.389Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: messagessv2-flag-requires-content-to-be-saved-on-the-original-language
locale: es
kiStatus: Backlog
internalReference: 1260018
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Cuando una tienda multilenguaje tiene el indicador MessagesV2 Enable New Page Translation Configuration, se produce un problema en el editor del sitio. Si el cliente intenta guardar contenido en una de las localizaciones que no es la principal, puede recibir un error de: Algo ha ido mal.
 ![](https://vtexhelp.zendesk.com/attachments/token/QOndCdSMiZtiGHYTBf0sYstQd/?name=image.png)
Este error está relacionado con el mensaje "Contenido original no encontrado".

Pero con esta bandera activa, no se requiere guardar este contenido en la localización original para su uso. Por lo tanto, no debería ser necesario guardar el contenido.


#### Simulación



- Tener una tienda con varias configuraciones regionales bajo el mismo enlace
- Intente guardar un contenido en una configuración regional que no sea la principal.
- Si abre la pestaña Red en las Herramientas de desarrollo, aparecerá el mensaje "Contenido original no encontrado" en una solicitud.

## Workaround


Tenemos una versión beta del pages-graphQL, por favor abra un ticket para solicitar su instalación.



