---
title: 'Pedidos con asteriscos en la dirección y el perfil.'
slug: pedidos-con-asteriscos-en-la-direccion-y-el-perfil
status: PUBLISHED
createdAt: 2021-04-27T02:27:09.000Z
updatedAt: 2026-10-15T22:11:05.000Z
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

Es posible que se creen pedidos con campos `invoiceAddress`, `shippingAddress` o `clientProfileData` que contengan caracteres `*`, lo que da la impresión de que los datos están enmascarados. Este comportamiento se produce cuando un usuario completa la compra con un formulario de pedido que contiene caracteres especiales `*` convertidos a cadena. Dado que estos son campos de cadena, los datos del pedido se rellenan con caracteres `***`, lo que da la impresión de que los datos están enmascarados.

El error reside en que nuestra API para realizar pedidos permite objetos con caracteres especiales en estos campos.

## Simulación

1. Añada algunos productos a su carrito;

2. Durante el proceso de pago, introduzca una dirección de facturación válida e inicie sesión en su cuenta;

3. Abandone el carrito o salga del sitio web sin completar la compra;

4. Utilice nuestra API para insertar un archivo adjunto e introduzca datos de perfil con caracteres "***" en algunos campos, como el del nombre;

5. Realice un pedido utilizando este mismo carrito;
6. Tenga en cuenta que el pedido incluirá los datos de envío con estos caracteres especiales.

## Workaround

No aplica