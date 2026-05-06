---
title: 'La función «Configuración de CMS» no funciona como se esperaba'
slug: la-funcion-configuracion-de-cms-no-funciona-como-se-esperaba
status: PUBLISHED
createdAt: 2022-03-09T13:13:47.000Z
updatedAt: 2023-06-19T12:31:18.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: cms-settings-role-not-working-as-expected
locale: es
kiStatus: Backlog
internalReference: 538706
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El rol de configuración del CMS no funciona como se esperaba. En ocasiones, el usuario no puede acceder al CMS incluso después de haber sido añadido al rol.
Otro comportamiento inesperado es que otros módulos siguen estando disponibles para el rol del CMS, incluso sin los permisos necesarios.

## Simulación

- Crea un rol en la aplicación «Roles del gestor de licencias» otorgando acceso únicamente a:
  - El menú CMS de la barra superior;
  - La configuración del CMS.

 ![](https://vtexhelp.zendesk.com/attachments/token/fbpObVoVdnEYGeYjd3GDh9Qqf/?name=image.png)


- Asocie este rol a un usuario;
- Inicie sesión con este usuario e intente acceder al menú de configuración del CMS; no podrá hacerlo.
- Compruebe que los demás módulos siguen estando disponibles.

## Workaround

Para acceder al menú del CMS, el usuario debe ser un superadministrador.