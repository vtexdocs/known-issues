---
title: 'B2B Checkout Settings está considerando la dirección de recogida para las entregas'
slug: b2b-checkout-settings-esta-considerando-la-direccion-de-recogida-para-las-entregas
status: PUBLISHED
createdAt: 2025-10-16T20:39:33.216Z
updatedAt: 2025-10-16T20:39:33.216Z
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


La configuración de B2B Checkout está considerando todas las direcciones disponibles para las entregas, incluidas las direcciones de recogida. Si se selecciona una dirección de recogida, la página de pago se congela.

En la API de pago es posible ver el mensaje "La dirección no se puede utilizar para el canal de entrega dado".


#### Simulación



- Añada cualquier producto al carrito;
- En el paso de envío, cambie a recogida y vuelva a entrega;
- La dirección de recogida estará en la dirección de entrega.

## Workaround


Actualice la página.


