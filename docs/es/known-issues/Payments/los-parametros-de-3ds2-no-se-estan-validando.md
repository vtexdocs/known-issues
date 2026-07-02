---
title: 'Los parámetros de 3DS2 no se están validando.'
slug: los-parametros-de-3ds2-no-se-estan-validando
status: PUBLISHED
createdAt: 2021-03-26T00:14:41.000Z
updatedAt: 2026-07-02T16:58:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 3ds2-parameters-not-being-validated
locale: es
kiStatus: No Fix
internalReference: 349166
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones de débito procesadas a través de CieloV3 con autenticación 3DS2 se cancelan intermitentemente sin que el cliente complete ningún flujo de error. El fallo se produce cuando Cielo devuelve valores nulos para los parámetros de autenticación 3DS2, lo que provoca el rechazo de la autorización. El problema afecta a las transacciones de débito en general, independientemente de la marca de la tarjeta o del banco emisor.

## Simulación

No se ha podido reproducir. El fallo se produce de forma aleatoria: algunas transacciones de débito se completan correctamente, mientras que otras fallan en las mismas condiciones.

## Workaround

No disponible.