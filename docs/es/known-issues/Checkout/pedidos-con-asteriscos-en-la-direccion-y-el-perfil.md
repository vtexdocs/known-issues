---
title: 'Pedidos con asteriscos en la dirección y el perfil'
slug: pedidos-con-asteriscos-en-la-direccion-y-el-perfil
status: PUBLISHED
createdAt: 2021-04-26T23:27:09.000Z
updatedAt: 2024-06-06T20:16:02.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orders-with-asterisks-in-the-address-and-profile
locale: es
kiStatus: Backlog
internalReference: 360783
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hay pedidos en los que los campos `invoiceAddress`, `shippingAddress` o `clientProfileData` se envían «enmascarados» en lugar de con la dirección real. Este comportamiento se produce cuando un usuario finaliza la compra con un formulario de pedido que contiene datos enmascarados que se han convertido en cadenas de texto. Dado que se trata de campos de texto, los datos del pedido se rellenan con la máscara «***».

Por lo tanto, el error radica en que nuestra API para realizar pedidos permite objetos con caracteres especiales en estos campos.

## Simulación

1. Añade algunos productos a tu carrito;
2. Durante el proceso de pago, introduce una dirección de facturación válida e inicia sesión en tu cuenta;
3. Abandona el carrito o sal del sitio web sin completar la compra;
4. Utiliza nuestra API para insertar un archivo adjunto e introduce una dirección con «***» en algunos campos, como el del barrio;
5. Realiza un pedido utilizando este mismo carrito;
6. Ten en cuenta que el pedido tendrá los datos de envío con estos caracteres especiales.

## Workaround

provisional**
N/A