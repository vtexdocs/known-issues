---
title: 'La interfaz de usuario de pago pasa a Pago con una dirección de factura incompleta para compradores con perfil completo.'
id: NmN6oNKp1isyxssTE5jPR
status: PUBLISHED
createdAt: 2023-11-27T17:40:11.335Z
updatedAt: 2023-12-12T15:46:39.789Z
publishedAt: 2023-12-12T15:46:39.789Z
firstPublishedAt: 2023-11-27T17:40:12.008Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: es
kiStatus: Fixed
internalReference: 937615
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un comprador tiene un perfil completo y la tienda está configurada para utilizar una dirección de factura para la recogida, la interfaz de usuario pasará a Pago con una dirección de factura incompleta.


##

## Simulación



- Configurar la dirección de factura para la recogida;
 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/es/known-issues/Checkout/la-interfaz-de-usuario-de-pago-pasa-a-pago-con-una-direccion-de-factura-incompleta-para-compradores-con-perfil-completo_1.png)

- Después de añadir productos a la cesta, utilice un correo electrónico con un perfil completo;
- La interfaz de usuario pasará al pago incluso con una dirección de factura incompleta en el sistema de perfiles.



## Workaround


Actualice la dirección de facturación a través de Datos Maestros.




