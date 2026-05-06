---
title: 'Los usuarios que solo tengan el rol «Administrador de usuarios - RESTRINGIDO» no pueden ver la lista de usuarios'
slug: los-usuarios-que-solo-tengan-el-rol-administrador-de-usuarios-restringido-no-pueden-ver-la-lista-de-usuarios
status: PUBLISHED
createdAt: 2023-11-08T18:06:57.000Z
updatedAt: 2023-11-08T18:06:57.000Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: user-only-with-the-role-user-administrator-restricted-is-not-able-to-list-the-users
locale: es
kiStatus: Backlog
internalReference: 932666
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si un usuario administrador solo tiene el rol «**Administrador de usuarios - RESTRINGIDO**» (recurso «**Guardar usuario**»), la lista de usuarios no está disponible y no es posible realizar las modificaciones o eliminaciones necesarias.

## Simulación

- Disponga de un usuario que solo tenga el rol «**Administrador de usuarios - RESTRINGIDO**»;
- Acceda a la página «**Usuarios de administración**» con este usuario (por ejemplo, https://my-account-here.myvtex.com/admin/users);
- Observará que la lista está vacía, incluso aunque ya haya usuarios registrados («_No se han encontrado usuarios :: La búsqueda de usuarios ha devuelto una lista vacía. Intente eliminar cualquier filtro de búsqueda o añadir nuevos usuarios a esta cuenta._"):
 ![](https://vtexhelp.zendesk.com/attachments/token/fZ2k11R3xPrhNv5yHVkv9alam/?name=image.png)

- Es posible añadir el usuario que desees e incluir los roles necesarios, pero no podemos acceder a los usuarios para añadir/editar/eliminar roles, ni siquiera eliminar al usuario a través de su registro, sino solo a través del rol.

## Workaround

Puedes añadir o eliminar al usuario del rol accediendo directamente al rol.

También puede crear un rol personalizado con solo los recursos «**Obtener roles paginados**» y «**Obtener usuarios paginados**»:
 ![](https://vtexhelp.zendesk.com/attachments/token/yjNfjlnfFaBrXZE6gx97OaxHy/?name=image.png)
A continuación, añádalo al usuario que puede guardar usuarios.