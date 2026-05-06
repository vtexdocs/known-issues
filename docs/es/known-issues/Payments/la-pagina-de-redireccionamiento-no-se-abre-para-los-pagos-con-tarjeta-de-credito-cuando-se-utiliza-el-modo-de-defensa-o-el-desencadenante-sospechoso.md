---
title: 'La página de redireccionamiento no se abre para los pagos con tarjeta de crédito cuando se utiliza el «Modo de defensa» o el «Desencadenante: sospechoso»'
slug: la-pagina-de-redireccionamiento-no-se-abre-para-los-pagos-con-tarjeta-de-credito-cuando-se-utiliza-el-modo-de-defensa-o-el-desencadenante-sospechoso
status: PUBLISHED
createdAt: 2023-08-25T17:21:58.000Z
updatedAt: 2026-03-03T21:25:24.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: redirect-page-does-not-open-for-credit-card-payments-when-using-defense-modetrigger-suspicious
locale: es
kiStatus: Backlog
internalReference: 887866
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página de redireccionamiento no se abre. Cuando el comprador finaliza la compra, no se le redirige a la página del proveedor de pagos para completar los pasos de pago. Se le lleva a la pantalla de realización del pedido sin que se haya efectuado realmente ningún pago.

Este comportamiento se produce en el Modo de defensa y cuando se activa «Desencadenante: sospechoso».

## Simulación

1. Selecciona/configura un método de pago que utilice redireccionamiento y sea una tarjeta de crédito;
2. Activa el modo de defensa, o bien se activa «Desencadenante: sospechoso»;
3. Ve a la caja y completa una compra utilizando el método de pago que tiene proceso de redireccionamiento, por ejemplo, 3DS;
4. Observe que el método de pago no se muestra en la pantalla y se pasa directamente a «realizar pedido».

## Workaround

provisional**

- Desactive el modo de defensa;
- Para «Desencadenante: sospechoso», abra un ticket con el servicio de asistencia del producto.