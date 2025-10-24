---
title: 'Al eliminar rutas del archivo routes.json, no se eliminan de la interfaz de usuario.'
slug: al-eliminar-rutas-del-archivo-routesjson-no-se-eliminan-de-la-interfaz-de-usuario
status: PUBLISHED
createdAt: 2025-10-16T20:34:39.074Z
updatedAt: 2025-10-16T20:34:39.074Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: when-deleting-routes-from-the-routesjson-file-they-are-not-deleted-from-the-ui
locale: es
kiStatus: Backlog
internalReference: 1172460
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Si creas una ruta en el archivo `routes.json` de tu tema, la ruta no se borrará del admin.


#### Simulación


Cree una página en sus temas bajo el archivo routes.json:
 ![](https://vtexhelp.zendesk.com/attachments/token/zoljY2X9GZ6NL4wUd10zoranp/?name=image.png)

La página se creará correctamente en el admin:
 ![](https://vtexhelp.zendesk.com/attachments/token/n2RP165BLtHwdHRrscu0IwOTo/?name=image.png)

Si eliminas esa ruta del tema, la referencia al admin seguirá ahí. Pero usted todavía será capaz de editar las rutas en el admin.

## Workaround


Puedes abrir un ticket al equipo de soporte solicitando la eliminación de esas rutas.


