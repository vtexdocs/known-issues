---
title: 'La interfaz de usuario de pago muestra «inicie sesión para ver los créditos» cuando el proveedor devuelve saldo=0.'
slug: la-interfaz-de-usuario-de-pago-muestra-inicie-sesion-para-ver-los-creditos-cuando-el-proveedor-devuelve-saldo0
status: PUBLISHED
createdAt: 2026-01-26T21:08:42.038Z
updatedAt: 2026-01-26T21:08:42.038Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-shows-login-to-view-credits-when-provider-returns-balance0
locale: es
kiStatus: Backlog
internalReference: 1356257
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 En la interfaz de usuario de pago al finalizar la compra, cuando el proveedor de tarjetas regalo devuelve una respuesta con saldo=0, tal y como se describe en nuestra documentación, la interfaz de usuario sigue mostrando el banner que solicita al comprador que inicie sesión para ver los créditos y no muestra el componente de la tarjeta regalo, incluso después de haber iniciado sesión correctamente.

El síntoma visible es una interfaz de usuario estática que nunca muestra los créditos y se comporta como si el usuario no estuviera autenticado. Esto afecta a los compradores de las tiendas integradas con proveedores que devuelven balance=0 para los usuarios sin créditos. #### Simulación

## Workaround

