---
title: 'El dominio final es diferente de myvtex debido a una versión antigua del componente en el editor de sitios.'
slug: el-dominio-final-es-diferente-de-myvtex-debido-a-una-version-antigua-del-componente-en-el-editor-de-sitios
status: PUBLISHED
createdAt: 2023-12-05T21:07:31.000Z
updatedAt: 2026-10-03T01:25:52.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: final-domain-different-from-myvtex-due-to-old-component-version-on-site-editor
locale: es
kiStatus: Backlog
internalReference: 948071
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En ocasiones, los cambios realizados en el editor de sitios se reflejan en el entorno myvtex, pero al intentar actualizar el dominio final, no se reflejan. Esto suele ocurrir cuando el componente que se intenta modificar tiene más de una versión. El frontend sigue utilizando la versión inactiva del componente, mientras que myvtex utiliza la versión activa. La única solución es eliminar la versión inactiva del componente.

## Simulación

- Intente realizar algún cambio en el editor de sitios en una nueva versión de un componente.
- Compruebe si los cambios se reflejan en el dominio final y en el entorno myvtex.

## Workaround

Elimine la versión anterior; esto hará que el dominio final utilice la versión correcta del componente.