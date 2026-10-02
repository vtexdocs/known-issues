---
title: '"Error al listar las dependencias del espacio de trabajo" al intentar acceder a una cuenta.'
slug: error-al-listar-las-dependencias-del-espacio-de-trabajo-al-intentar-acceder-a-una-cuenta
status: PUBLISHED
createdAt: 2025-07-16T16:56:56.000Z
updatedAt: 2026-10-02T16:24:57.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-listing-workspace-dependencies-when-trying-to-access-an-account
locale: es
kiStatus: Fixed
internalReference: 1260934
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando intentas acceder a una cuenta que lleva mucho tiempo sin acceso o que no se ha actualizado, puedes ver el siguiente error:

{"code": "route_map_error","message": "Error al obtener los datos de origen para el mapa de ruta: Error al listar las dependencias del espacio de trabajo: (500 generic_error en http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Error al listar las dependencias del espacio de trabajo: No se pudieron obtener las dependencias instaladas: No se pudieron leer los datos de la caché: No se pudieron obtener los datos de la caché remota: se obtuvieron 4 elementos en la dirección de información del clúster, se esperaban 2 o 3","requestId": ""}

Esto sucede porque el sistema de mantenimiento no actualiza estas cuentas, ya que Llevan mucho tiempo sin acceso. El problema está relacionado con una actualización de nuestra infraestructura de caché.

## Simulación

Es difícil simularlo; se necesitaría una cuenta antigua. Este problema también impedirá el acceso al administrador de la cuenta; tampoco es posible iniciar sesión mediante la interfaz de línea de comandos (CLI). Es más probable que ocurra en cuentas de franquicia o de vendedor.

## Workaround

Abra un ticket en PS Apps para que podamos implementar la solución alternativa.