---
title: 'La configuración de pago B2B está considerando la dirección de recogida para las entregas.'
slug: la-configuracion-de-pago-b2b-esta-considerando-la-direccion-de-recogida-para-las-entregas
status: PUBLISHED
createdAt: 2025-02-26T20:57:28.000Z
updatedAt: 2026-10-16T16:58:24.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-checkout-settings-is-considering-pickup-address-for-deliveries
locale: es
kiStatus: Backlog
internalReference: 1186568
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La configuración de pago B2B considera todas las direcciones disponibles para entregas, incluidas las de recogida. Si se selecciona una dirección de recogida, la página de pago se bloquea y no permite continuar con el proceso de pago mientras la dirección de recogida esté seleccionada como dirección de entrega.

En la API de pago, es posible ver el mensaje "La dirección no se puede utilizar para el canal de entrega especificado".

## Simulación

- Añada cualquier producto al carrito;

- En el paso de envío, cambie a recogida y vuelva a entrega;

- La dirección de recogida aparecerá como dirección de entrega;

- Intente seleccionar la dirección de recogida insertada en la lista de direcciones;

- No podrá continuar con el proceso de pago.

## Workaround

Actualice la página.