---
title: 'La acción «Nuevo usuario» está desactivada en «Mi organización» en el dominio público'
slug: la-accion-nuevo-usuario-esta-desactivada-en-mi-organizacion-en-el-dominio-publico
status: PUBLISHED
createdAt: 2026-03-25T19:05:00.699Z
updatedAt: 2026-03-25T19:05:00.699Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: new-user-action-disabled-in-my-organization-on-public-domain
locale: es
kiStatus: Backlog
internalReference: 1383616
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los usuarios administradores no pueden añadir nuevos miembros desde el dominio público de la tienda en «Mi cuenta» > «Mi organización», ya que el botón «NUEVO» permanece desactivado, mientras que la misma acción funciona en el dominio myvtex. El síntoma visible es un botón «NUEVO» desactivado en el subdominio público para todos los usuarios, incluso aquellos que tienen los siguientes permisos en la organización:

`"add-users-organization",`
`"remove-users-organization"`

## Simulación

- Acceda a la tienda a través del dominio público e inicie sesión como usuario con los permisos `"add-users-organization"` y `"remove-users-organization"` para una organización determinada
- Vaya a Mi cuenta > Mi organización > Usuarios.
- Observe que el botón «NUEVO» para añadir usuarios está desactivado en el dominio público, aunque el mismo usuario puede añadir otros usuarios a la organización cuando accede a través del dominio myvtex o mediante GraphQL.

## Workaround

Realice la gestión de usuarios (añadir usuarios) desde el dominio myvtex, donde el botón «NUEVO» está habilitado, o a través de la mutación GraphQL `AddUser` de la aplicación `vtex.b2b-organizations-graphql`.