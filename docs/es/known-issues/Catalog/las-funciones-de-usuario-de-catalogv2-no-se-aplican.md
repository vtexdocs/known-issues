---
title: 'Las funciones de usuario de CatalogV2 no se aplican'
slug: las-funciones-de-usuario-de-catalogv2-no-se-aplican
status: PUBLISHED
createdAt: 2026-03-06T19:25:39.520Z
updatedAt: 2026-03-06T19:25:39.520Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogv2-user-roles-not-applying
locale: es
kiStatus: No Fix
internalReference: 489297
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario está vinculado a un rol configurado como de solo lectura en el Administrador de licencias, aún puede editar productos en Catalog V2.

## Simulación

1) Acceda a la interfaz de usuario del administrador de licencias de una tienda que tenga instalado CatalogV2 (/admin/license-manager/#/role-details).

2) Establezca un rol de usuario de solo lectura ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png).

3) Con estas reglas establecidas, inicie sesión con el usuario correspondiente. 4) Intente actualizar un producto; podrá hacerlo a pesar de las credenciales de solo lectura.

## Workaround

Utilice la API del administrador de licencias para gestionar estos permisos.