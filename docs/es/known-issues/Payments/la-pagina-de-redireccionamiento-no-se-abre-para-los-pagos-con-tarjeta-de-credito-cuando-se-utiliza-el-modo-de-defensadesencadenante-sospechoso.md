---
title: 'La página de redireccionamiento no se abre para los pagos con tarjeta de crédito cuando se utiliza el modo de defensa/desencadenante: sospechoso.'
slug: la-pagina-de-redireccionamiento-no-se-abre-para-los-pagos-con-tarjeta-de-credito-cuando-se-utiliza-el-modo-de-defensadesencadenante-sospechoso
status: PUBLISHED
createdAt: 2026-03-03T18:26:17.384Z
updatedAt: 2026-03-03T18:26:17.384Z
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

La página de redireccionamiento no se abre. Cuando el comprador completa la compra, no se le redirige a la página del socio de pago para finalizar los pasos de pago. El comprador es llevado a la pantalla de realización del pedido sin realizar ningún pago.

Este comportamiento se produce en el modo de defensa y con el «Desencadenante: sospechoso».

## Simulación

1. Seleccione/configure un método de pago que utilice redireccionamiento y sea una tarjeta de crédito. 2. Active el modo de defensa o active «Desencadenante: sospechoso». 3. Vaya a la caja y complete una compra utilizando el método de pago que tiene proceso de redireccionamiento, por ejemplo, 3ds.
4. Compruebe que el método de pago no se muestra en la pantalla y se dirige directamente a «realizar pedido».

## Workaround

- Desactive el modo de defensa. - Para «Desencadenante: sospechoso», abra un ticket con el servicio de asistencia del producto.