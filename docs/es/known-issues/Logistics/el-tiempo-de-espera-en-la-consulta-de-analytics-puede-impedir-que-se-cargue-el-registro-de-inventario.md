---
title: 'El tiempo de espera en la consulta de Analytics puede impedir que se cargue el registro de inventario'
slug: el-tiempo-de-espera-en-la-consulta-de-analytics-puede-impedir-que-se-cargue-el-registro-de-inventario
status: PUBLISHED
createdAt: 2025-10-16T20:28:50.065Z
updatedAt: 2025-10-16T20:28:50.065Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: timeout-in-analytics-query-can-prevent-inventory-log-from-loading
locale: es
kiStatus: No Fix
internalReference: 1159693
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En la interfaz de usuario de inventario, el registro de actualización a veces no se carga para SKU específicas, mostrando el mensaje de error: Se ha producido un error al cargar los datos. La solicitud falla con el mensaje de excepción: La solicitud falla con el mensaje de excepción: `Request failed with status code 500`, que indica un tiempo de espera en la consulta a Analytics (donde se almacenan los datos). Como resultado, no se muestra ningún registro de la SKU en la interfaz de usuario.

Este tiempo de espera puede ocurrir debido a un alto volumen de actualizaciones para la SKU u otros factores que pueden causar que la consulta exceda el tiempo máximo de ejecución permitido de 40 segundos.

## Simulación


Debido a que la variable es el tiempo de respuesta de la consulta a Analytics, no es posible replicarla de forma concisa.

## Workaround


En algunos casos, refrescar la página resolverá el problema y permitirá que el registro de inventario se cargue correctamente.



