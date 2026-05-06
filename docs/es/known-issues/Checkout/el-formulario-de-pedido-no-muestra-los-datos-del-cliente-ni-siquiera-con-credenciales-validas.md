---
title: 'El formulario de pedido no muestra los datos del cliente, ni siquiera con credenciales válidas'
slug: el-formulario-de-pedido-no-muestra-los-datos-del-cliente-ni-siquiera-con-credenciales-validas
status: PUBLISHED
createdAt: 2022-05-19T16:25:14.000Z
updatedAt: 2023-09-27T20:39:14.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-not-returning-customers-data-even-for-authorized-credentials
locale: es
kiStatus: Fixed
internalReference: 582070
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al interactuar con un formulario de pedido en la situación específica en la que los datos de los clientes se importaron automáticamente tras iniciar sesión, dichos datos se eliminarán del formulario de pedido, incluso en el caso de los «superusuarios», identificados mediante sus claves de aplicación.

Esta acción se lleva a cabo para evitar el acceso no deseado a los datos de los clientes, pero no debe aplicarse a los usuarios administrativos ni a las integraciones identificadas mediante credenciales autorizadas.

## Simulación

- Disponer de un usuario con un perfil completo, asegurándose de que sea válido para el comportamiento de SmartCheckout
- Realizar el proceso de inicio de sesión para este usuario
- Comprobar a través del navegador si su información se ha importado al formulario de pedido
- Realice una solicitud «Get OrderForm» utilizando credenciales autorizadas
- El orderForm no devolverá los «clientProfileData» ni las direcciones que estaban disponibles en el navegador

## Workaround

Utilice el parámetro `?disableAutoCompletion=true` en la URL de «Get OrderForm». Este parámetro evita que se recalcule el orderForm, por lo que se devolverán los datos del cliente