---
title: 'La actualización automática del seguimiento no funciona correctamente.'
slug: la-actualizacion-automatica-del-seguimiento-no-funciona-correctamente
status: PUBLISHED
createdAt: 2020-10-30T20:27:09.000Z
updatedAt: 2026-09-14T22:51:21.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-automatic-tracking-update-is-not-working-properly
locale: es
kiStatus: Fixed
internalReference: 301423
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las integraciones de actualización automática de seguimiento no funcionan como se esperaba. Durante una investigación interna, detectamos algunas inconsistencias que provocaron el fallo en la actualización del seguimiento.

Creemos que los transportistas modificaron sus productos, lo que pudo haber afectado nuestra integración.

## Simulación

1- Utilice una de las siguientes integraciones de actualización de seguimiento de transportistas.

## Workaround

Recomendamos actualizar el seguimiento manualmente mediante la siguiente API:
https://developers.vtex.com/vtex-developer-docs/reference/tracking