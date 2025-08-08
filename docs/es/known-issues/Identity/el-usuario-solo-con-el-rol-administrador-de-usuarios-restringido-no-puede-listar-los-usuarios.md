---
title: "El usuario sólo con el rol 'Administrador de usuarios - RESTRINGIDO' no puede listar los usuarios"
id: ifXUAzgJ1xr8ezhqKpRUI
status: PUBLISHED
createdAt: 2023-11-08T18:07:14.508Z
updatedAt: 2023-11-08T18:07:15.030Z
publishedAt: 2023-11-08T18:07:15.030Z
firstPublishedAt: 2023-11-08T18:07:15.030Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: user-only-with-the-role-user-administrator-restricted-is-not-able-to-list-the-users
locale: es
kiStatus: Backlog
internalReference: 932666
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si un usuario administrador sólo tiene el rol "**Administrador de usuarios - RESTRINGIDO**" (recurso "**Guardar usuario**"), la lista de usuarios no está disponible y no es posible realizar las ediciones o eliminaciones necesarias.


##

## Simulación



- Tener un usuario sólo con el rol "**Usuario Administrador - RESTRINGIDO**";
- Acceda a la página "**Admin Usuarios**" con este usuario (por ejemplo, https://my-account-here.myvtex.com/admin/users);
- Puede observar que la lista está vacía, incluso con usuarios ya registrados ("_No users found :: The user search returned an empty list. Intente eliminar cualquier filtro de búsqueda o añadir nuevos usuarios a esta cuenta._"):
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Identity/el-usuario-solo-con-el-rol-administrador-de-usuarios-restringido-no-puede-listar-los-usuarios_1.png)

- Es posible añadir el usuario que queramos, e incluir los roles necesarios, pero no podemos acceder a los usuarios para añadir/editar/eliminar roles, o incluso borrar al usuario a través de su registro, sino sólo a través del rol.



## Workaround


Puedes añadir o eliminar el usuario al rol accediendo directamente al rol.

También puedes crear un rol personalizado sólo con los recursos "**Obtener roles paginados**" y "**Obtener usuarios paginados**":
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Identity/el-usuario-solo-con-el-rol-administrador-de-usuarios-restringido-no-puede-listar-los-usuarios_2.png)
Y luego, añadirlo al usuario que puede guardar usuarios.





