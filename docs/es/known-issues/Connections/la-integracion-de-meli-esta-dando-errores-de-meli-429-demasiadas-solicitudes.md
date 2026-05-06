---
title: 'La integración de MELI está dando errores de MELI: «429: demasiadas solicitudes».'
slug: la-integracion-de-meli-esta-dando-errores-de-meli-429-demasiadas-solicitudes
status: PUBLISHED
createdAt: 2023-08-03T10:47:27.000Z
updatedAt: 2023-08-14T14:08:00.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-is-receiving-errors-from-meli-429-too-many-requests
locale: es
kiStatus: Fixed
internalReference: 873998
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente estamos experimentando un problema con algunas cuentas de MELi que reciben un error al intentar actualizar productos, existencias o precios en MELi.

Esto no afecta a todas las cuentas ni a todas las referencias, sino solo a una parte de ellas, y se debe a que se están enviando más solicitudes de las que MELi está preparado para recibir en este momento.

## Simulación

En el menú de integración de stock/precio/producto, algunas cuentas pueden ver un error:

**Lo sentimos, no hemos podido procesar esta solicitud. Por favor, espera unos minutos y vuelve a procesarla**

Estamos trabajando para gestionar mejor las solicitudes y evitar que se produzca este error en MELI.

## Workaround

provisional**
La única solución provisional disponible por ahora es volver a procesar la solicitud directamente en el menú de Bridge.