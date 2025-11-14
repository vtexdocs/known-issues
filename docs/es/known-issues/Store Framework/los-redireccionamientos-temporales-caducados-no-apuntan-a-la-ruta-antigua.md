---
title: 'Los redireccionamientos temporales caducados no apuntan a la ruta antigua'
slug: los-redireccionamientos-temporales-caducados-no-apuntan-a-la-ruta-antigua
status: PUBLISHED
createdAt: 2025-11-14T19:40:30.053Z
updatedAt: 2025-11-14T19:40:30.053Z
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



Cuando se crea una ruta de redirección, la ruta interna se elimina, pero, cuando la redirección expira la ruta no vuelve


#### Simulación




- Crear una redirección temporal
- Compruébelo y se redirigirá correctamente
- Después de la fecha de caducidad, compruébelo de nuevo
- La ruta original no se cargará correctamente

## Workaround


La ruta sólo volverá a funcionar si la crea de nuevo en el reescribidor

