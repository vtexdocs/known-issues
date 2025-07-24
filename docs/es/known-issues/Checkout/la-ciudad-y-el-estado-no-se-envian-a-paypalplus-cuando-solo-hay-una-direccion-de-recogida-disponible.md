---
title: 'La ciudad y el estado no se envían a PayPalPlus cuando sólo hay una dirección de recogida disponible.'
id: 5ScWTMLqT9oBMUYFc6WGo2
status: PUBLISHED
createdAt: 2023-06-01T13:47:08.477Z
updatedAt: 2023-09-12T13:10:53.169Z
publishedAt: 2023-09-12T13:10:53.169Z
firstPublishedAt: 2023-06-01T13:47:09.590Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: city-and-state-are-not-sent-to-paypalplus-when-there-is-only-pickup-address-available
locale: es
kiStatus: Fixed
internalReference: 836025
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los campos "ciudad" y "estado" no se envían a PayPalPlus cuando el comprador sólo añade una dirección de recogida al carro, lo que hace que no se cargue la forma de pago.


##

## Simulación



- Añadir productos al carro;
- Ir al paso Envío;
- Seleccione "Recoger en tienda", añada el código postal y seleccione una tienda;
- Haga clic en "Ir al pago" y seleccione la tarjeta de crédito de PayPalPlus.


##

## Workaround


Seleccione "Entrega", añada el código postal y cambie a "Recogida en tienda".




