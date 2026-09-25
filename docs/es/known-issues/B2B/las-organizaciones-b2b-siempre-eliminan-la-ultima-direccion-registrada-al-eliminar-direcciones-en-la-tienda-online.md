---
title: 'Las organizaciones B2B siempre eliminan la última dirección registrada al eliminar direcciones en la tienda online.'
slug: las-organizaciones-b2b-siempre-eliminan-la-ultima-direccion-registrada-al-eliminar-direcciones-en-la-tienda-online
status: PUBLISHED
createdAt: 2026-09-25T22:46:37.000Z
updatedAt: 2026-09-25T22:46:37.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-always-deletes-last-registered-address-when-deleting-addresses-in-the-storefront
locale: es
kiStatus: Scheduled
internalReference: 1466734
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al acceder a la página del centro de costos desde la tienda en línea e intentar excluir una dirección, siempre se elimina la última dirección registrada.

La dirección seleccionada no importa; la última dirección registrada es la que siempre se eliminará.

## Simulación

- Acceda a la página del centro de costos usando este patrón de URL: `/account#/cost-center/{costCenterId}`
- En "Direcciones", intente eliminar cualquier dirección que no sea la última posible.
- Solo se eliminará la última dirección registrada.

## Workaround

No existe una solución alternativa para las eliminaciones en la interfaz de usuario.

Las direcciones aún se pueden eliminar usando el administrador de VTEX o mediante una mutación GraphQL.