---
title: '"Error al listar las dependencias del espacio de trabajo" al intentar acceder a una cuenta'
slug: error-al-listar-las-dependencias-del-espacio-de-trabajo-al-intentar-acceder-a-una-cuenta
status: PUBLISHED
createdAt: 2025-07-24T17:35:59.257Z
updatedAt: 2025-07-24T17:35:59.257Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-listing-workspace-dependencies-when-trying-to-access-an-account
locale: es
kiStatus: Backlog
internalReference: 1260934
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando intentas acceder a una cuenta que lleva mucho tiempo sin acceso o que no ha sido actualizada, puedes ver el siguiente error:


    {"code": "route_map_error", "mensaje": "Error fetching source data for route map: Error al listar las dependencias del espacio de trabajo: (500 generic_error en http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Error al listar las dependencias del espacio de trabajo: Error al obtener las dependencias instaladas: Error al leer datos de la caché: Unable to fetch data from remote cache: got 4 elements in cluster info address, expected 2 or 3", "requestId": ""}


Esto ocurre porque el housekeeper no actualiza estas cuentas, ya que están mucho tiempo sin acceso. El problema está relacionado con una actualización de nuestra infraestructura de caché.


#### Simulación


Es difícil de simular; necesitarías una cuenta antigua. Este problema también impedirá el acceso al administrador de la cuenta; no es posible iniciar sesión utilizando la CLI. Es algo que es más probable que ocurra en cuentas de franquicias o vendedores.

## Workaround


Abra un ticket a PS Apps para que podamos solucionar este problema.



