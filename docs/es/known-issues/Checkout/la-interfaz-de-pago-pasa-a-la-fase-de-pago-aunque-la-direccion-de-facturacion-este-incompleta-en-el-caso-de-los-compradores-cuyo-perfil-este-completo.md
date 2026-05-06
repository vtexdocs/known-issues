---
title: 'La interfaz de pago pasa a la fase de pago aunque la dirección de facturación esté incompleta en el caso de los compradores cuyo perfil esté completo'
slug: la-interfaz-de-pago-pasa-a-la-fase-de-pago-aunque-la-direccion-de-facturacion-este-incompleta-en-el-caso-de-los-compradores-cuyo-perfil-este-completo
status: PUBLISHED
createdAt: 2023-11-16T17:45:44.000Z
updatedAt: 2023-12-12T15:46:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: es
kiStatus: Fixed
internalReference: 937615
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un cliente tiene un perfil completo y la tienda está configurada para utilizar una dirección de facturación para la recogida, la interfaz de usuario pasará a la fase de pago aunque la dirección de facturación esté incompleta.

## Simulación

- Configura la dirección de facturación para la recogida;
 ![](https://vtexhelp.zendesk.com/attachments/token/1zJ19Lq9oJ5CHdkaHUfw4SAka/?name=image.png)

- Después de añadir productos al carrito, utilice un correo electrónico con un perfil completo;
- La interfaz de usuario pasará al pago incluso con una dirección de facturación incompleta en el sistema de perfiles.

## Workaround

Actualice la dirección de facturación a través de los datos maestros.