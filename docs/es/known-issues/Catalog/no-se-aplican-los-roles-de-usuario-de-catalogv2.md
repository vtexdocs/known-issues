---
title: 'No se aplican los roles de usuario de CatalogV2'
slug: no-se-aplican-los-roles-de-usuario-de-catalogv2
status: PUBLISHED
createdAt: 2021-12-16T18:28:26.000Z
updatedAt: 2026-03-06T22:25:04.000Z
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

Cuando se asigna a un usuario un rol configurado como de solo lectura en el Gestor de licencias, este sigue pudiendo editar productos en Catalog V2.

## Simulación

1) Accede a la interfaz de usuario del Gestor de licencias de una tienda que tenga instalado Catalog V2 (/admin/license-manager/#/role-details)

2) Configure un rol de usuario de solo lectura

 ![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Una vez configuradas estas reglas, inicie sesión con el usuario correspondiente

4) Intente actualizar un producto; podrá hacerlo, a pesar de las credenciales de solo lectura.

## Workaround

Utilice la API del gestor de licencias para gestionar estos permisos.