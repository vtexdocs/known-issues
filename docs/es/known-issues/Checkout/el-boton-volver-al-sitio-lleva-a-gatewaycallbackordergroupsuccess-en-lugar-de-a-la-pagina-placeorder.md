---
title: 'El botón "Volver al sitio" lleva a gatewayCallback/{orderGroup}/Success en lugar de a la página placeOrder'
slug: el-boton-volver-al-sitio-lleva-a-gatewaycallbackordergroupsuccess-en-lugar-de-a-la-pagina-placeorder
status: PUBLISHED
createdAt: 2025-11-26T15:01:38.998Z
updatedAt: 2025-11-26T15:01:38.998Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: back-to-site-button-takes-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
locale: es
kiStatus: Backlog
internalReference: 786685
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el cliente realiza una compra utilizando una tarjeta regalo y una app de pago, el botón "volver al sitio" o flujo para volver al sitio no le lleva a la página de realizar pedido, sino a `/gatewayCallback//Success`.


#### Simulación



1. Pon la tarjeta regalo de cualquier valor
2. Selecciona el método "app de pago"
3. Dentro de la app de pago, realiza una compra
4. Vuelve al entorno VTEX.

## Workaround


No hay solución


