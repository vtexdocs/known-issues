---
title: 'Aparece un mensaje de error al acceder a las rutas /a y /p en las tiendas del Portal'
slug: aparece-un-mensaje-de-error-al-acceder-a-las-rutas-a-y-p-en-las-tiendas-del-portal
status: PUBLISHED
createdAt: 2023-11-30T16:31:29.000Z
updatedAt: 2023-11-30T16:31:29.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: something-went-wrong-message-when-accessing-a-and-p-routes-in-portal-stores
locale: es
kiStatus: Backlog
internalReference: 945226
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se espera que se pueda buscar cualquier término en las tiendas del Portal; sin embargo, las letras «A» y «P» no se pueden buscar directamente a través de la URL.
Por lo tanto, aparecerá el mensaje «Ha ocurrido un error» al acceder a las rutas `/a` y `/p` en las tiendas del Portal

## Simulación

1. Acceda a una tienda del Portal.
2. Vaya al enlace `site.com/a` o `site.com/p`.
3. Verá el mensaje «Algo ha salido mal» en la página de inicio.

## Workaround

No aplicable a la ruta `/a`.
Registre una redirección en el CMS heredado de `/p` a `/?ft=p`.