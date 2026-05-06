---
title: 'Storefront Permissions tiene en cuenta las organizaciones inactivas'
slug: storefront-permissions-tiene-en-cuenta-las-organizaciones-inactivas
status: PUBLISHED
createdAt: 2023-10-27T22:07:57.000Z
updatedAt: 2024-09-05T17:42:31.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-considers-inactive-organizations
locale: es
kiStatus: Fixed
internalReference: 927174
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando a un usuario se le han asignado varias organizaciones y la primera registrada está inactiva, no se reconoce que se le haya asignado ninguna organización tras iniciar sesión.

## Simulación

- Crea dos organizaciones y asigna el mismo usuario/correo electrónico;
- Desactiva la primera organización creada;
- Inicia sesión en el sitio web.

## Workaround

provisional**
Elimina el usuario/correo electrónico de la organización inactiva.