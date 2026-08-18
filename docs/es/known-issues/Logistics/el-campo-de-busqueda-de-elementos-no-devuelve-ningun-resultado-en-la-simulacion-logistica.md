---
title: 'El campo de búsqueda de elementos no devuelve ningún resultado en la simulación logística.'
slug: el-campo-de-busqueda-de-elementos-no-devuelve-ningun-resultado-en-la-simulacion-logistica
status: PUBLISHED
createdAt: 2022-11-14T18:06:22.000Z
updatedAt: 2026-08-18T16:36:08.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: search-item-field-does-not-return-anything-in-logistics-simulation
locale: es
kiStatus: Backlog
internalReference: 697628
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario introduce el nombre de un artículo en el campo de

## Simulación

para realizar una simulación, el sistema logístico utiliza una ruta del catálogo para escanearlo y mostrar los artículos que contienen el nombre buscado. Esta consulta puede tardar más de lo permitido por el límite de tiempo de espera de logística, por lo que no devolverá ningún resultado. Este retraso puede deberse a la estructura del catálogo de la tienda y al tiempo de espera de la API de logística.

## **Simulación**

Iniciar sesión en el panel de administración.

Ir al simulador de envíos.

En el campo "Seleccionar producto", escribir el nombre de un artículo existente en el catálogo de la cuenta.

Ver que el campo "Seleccionar producto" se está cargando.

En la consola, aparecerá un error 500 (solicitud incorrecta) en la ruta de consulta `textToSearch`.

## Workaround

Realizar la búsqueda directamente utilizando el ID de SKU o el ID de producto.