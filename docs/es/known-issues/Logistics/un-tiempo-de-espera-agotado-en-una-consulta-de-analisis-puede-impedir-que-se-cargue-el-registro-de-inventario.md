---
title: 'Un tiempo de espera agotado en una consulta de análisis puede impedir que se cargue el registro de inventario.'
slug: un-tiempo-de-espera-agotado-en-una-consulta-de-analisis-puede-impedir-que-se-cargue-el-registro-de-inventario
status: PUBLISHED
createdAt: 2025-01-08T16:01:46.000Z
updatedAt: 2026-07-22T00:00:47.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: timeout-in-analytics-query-can-prevent-inventory-log-from-loading
locale: es
kiStatus: Fixed
internalReference: 1159693
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la interfaz de inventario, el registro de actualizaciones a veces no se carga para ciertos SKU, mostrando el mensaje de error: «Se produjo un error al cargar los datos. Inténtelo de nuevo». La solicitud falla con el mensaje de excepción: «La solicitud falló con el código de estado 500», lo que indica un tiempo de espera agotado en la consulta a Analytics (donde se almacenan los datos). Como resultado, no se muestra ningún registro para el SKU en la interfaz de usuario.

Este tiempo de espera agotado puede deberse a un alto volumen de actualizaciones para el SKU u otros factores que pueden provocar que la consulta supere el tiempo máximo de ejecución permitido de 40 segundos.

## Simulación

Dado que la variable es el tiempo de respuesta de la consulta a Analytics, no es posible replicar el problema de forma concisa.

## Workaround

En algunos casos, actualizar la página resuelve el problema y permite que el registro de inventario se cargue correctamente.