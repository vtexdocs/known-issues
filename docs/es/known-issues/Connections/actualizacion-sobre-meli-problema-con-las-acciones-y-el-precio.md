---
title: 'Actualización sobre MELI: problema con las acciones y el precio'
slug: actualizacion-sobre-meli-problema-con-las-acciones-y-el-precio
status: PUBLISHED
createdAt: 2023-11-21T13:25:47.000Z
updatedAt: 2024-01-10T17:51:39.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-update-stockprice-issue
locale: es
kiStatus: Fixed
internalReference: 939329
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente nos encontramos ante un caso muy concreto que afecta a unos pocos casos de SKU en los que no se puede actualizar el stock en MELI.

## Simulación

Lo que ocurre es que, en algunos casos, el campo «seller_custom_field», que debería estar rellenado con el SKU de VTEX, aparece en blanco, por lo que la integración no puede actualizar el stock de MELI en estos casos.

## Workaround

provisional**
Rellene la hoja de cálculo de migración con estos casos y envíela al equipo de producto para que introduzca nuestro SKU en el campo seller_custom_field.