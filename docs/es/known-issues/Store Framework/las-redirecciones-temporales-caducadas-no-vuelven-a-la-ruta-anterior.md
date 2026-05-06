---
title: 'Las redirecciones temporales caducadas no vuelven a la ruta anterior'
slug: las-redirecciones-temporales-caducadas-no-vuelven-a-la-ruta-anterior
status: PUBLISHED
createdAt: 2023-09-12T14:40:55.000Z
updatedAt: 2023-09-12T14:40:55.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: expired-temporary-redirects-not-pointing-back-to-old-route
locale: es
kiStatus: Backlog
internalReference: 898062
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se crea una ruta de redireccionamiento, la ruta interna se elimina; sin embargo, cuando el redireccionamiento caduca, la ruta no vuelve a aparecer

## Simulación

- Crea una redirección temporal.
- Comprueba que la redirección funciona correctamente.
- Una vez pasada la fecha de caducidad, compruébalo de nuevo.
- La ruta original no se cargará correctamente.

## Workaround

La ruta solo volverá a funcionar si la creas de nuevo en el reescritor.