---
title: 'No se aplican los roles de usuario de CatalogV2'
slug: no-se-aplican-los-roles-de-usuario-de-catalogv2
status: PUBLISHED
createdAt: 2021-12-16T18:28:26.000Z
updatedAt: 2026-10-28T17:39:32.000Z
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

Cuando un usuario está vinculado a un rol configurado como de solo lectura en License Manager, aún puede editar productos en Catalog V2.

## Simulación

1) Acceda a la interfaz de usuario de License Manager de una tienda que tenga instalado Catalog V2 (/admin/license-manager/#/role-details)

2) Configure un rol de usuario de solo lectura.

![](https://vtexhelp.zendesk.com/attachments/token/NpEBOSahA9ogF72lsW9kYRjyH/?name=inline441836406.png)

3) Con estas reglas configuradas, inicie sesión con el usuario correspondiente.

4) Intente actualizar un producto; podrá hacerlo, a pesar de las credenciales de solo lectura.

## Workaround

Utilice las API de GraphQL de Catalog V2 para gestionar estos permisos.