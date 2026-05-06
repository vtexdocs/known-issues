---
title: 'Carrito creado a partir de la opción «Volver a pedir» en «Mis pedidos»; el correo electrónico del cliente no se incluye como se esperaba en el formulario de pedido'
slug: carrito-creado-a-partir-de-la-opcion-volver-a-pedir-en-mis-pedidos-el-correo-electronico-del-cliente-no-se-incluye-como-se-esperaba-en-el-formulario-de-pedido
status: PUBLISHED
createdAt: 2023-12-04T22:41:07.000Z
updatedAt: 2023-12-04T22:41:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-created-from-an-order-again-option-in-my-orders-the-customers-email-is-not-being-placed-as-expected-in-the-orderform
locale: es
kiStatus: Backlog
internalReference: 947563
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la sección **Mis pedidos**, dentro de **Mi cuenta**, existe la opción de crear un carrito a partir de un pedido que el cliente haya realizado anteriormente.

En este caso, el problema es que, en un **flujo de televentas**, al **suplantar al cliente e intentar crear un carrito basado en un pedido anterior**, al hacer clic en **Mis pedidos (Lista)** en la opción «**Volver a pedir**», el correo electrónico del agente de televentas aparece en los datos del perfil del cliente del formulario de pedido y no el del cliente, como cabría esperar.

Cabe mencionar que este comportamiento solo se produce al hacer clic en el botón «volver a pedir» en la lista de pedidos de Mis pedidos.

## Simulación

1. Iniciar sesión con un usuario de televentas
2. Suplantar a un cliente
3. Ir a la sección Mis pedidos dentro de Mi cuenta
4. En la lista de pedidos, hacer clic en «volver a pedir» en cualquiera de ellos.
5. Compruebe la información del cliente en el formulario de pedido (clientProfileData.email)

## Workaround

provisional**

Para realizar pedidos basados en uno anterior, se recomienda introducir primero los detalles del pedido y, a continuación, hacer clic en la opción «volver a pedir».