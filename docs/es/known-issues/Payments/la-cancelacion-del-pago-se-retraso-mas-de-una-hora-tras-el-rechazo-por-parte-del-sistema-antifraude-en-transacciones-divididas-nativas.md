---
title: 'La cancelación del pago se retrasó más de una hora tras el rechazo por parte del sistema antifraude en transacciones divididas nativas.'
slug: la-cancelacion-del-pago-se-retraso-mas-de-una-hora-tras-el-rechazo-por-parte-del-sistema-antifraude-en-transacciones-divididas-nativas
status: PUBLISHED
createdAt: 2026-11-03T22:48:20.000Z
updatedAt: 2026-11-03T22:48:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-cancellation-delayed-over-one-hour-after-antifraud-rejection-in-native-split-transactions
locale: es
kiStatus: Backlog
internalReference: 1480709
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el sistema antifraude rechaza una transacción que utiliza la función de división nativa, la autorización de la tarjeta no se cancela en el proveedor de pagos en el momento del rechazo. La transacción permanece en estado de «Cancelación» y el pago permanece como «Autorizado», por lo que el importe permanece retenido en la tarjeta del comprador y el proveedor solo recibe la solicitud de cancelación entre 1 y 2 horas después, a veces incluso más. Esto ocurre cuando la función de división nativa está habilitada en la transacción (afiliación que envía destinatarios de la división), el modo posterior a la compra es «Retenido» o «Total», y el pago aún no se ha procesado. Se observó con rechazos de ClearSale y Konduto. El mismo rechazo en una transacción sin división nativa se cancela en el proveedor en cuestión de segundos.

## Simulación

1. Configure una afiliación con división nativa, enviando los destinatarios de la división, en una cuenta cuyo modo posterior a la compra sea «Retenido» o «Total».

2. Configure un proveedor antifraude (por ejemplo, ClearSale) para el método de pago. 3. Realizar un pedido a más de un vendedor y obtener la autorización del pago, sin que este se registre;

4. Que el sistema antifraude rechace la transacción;

5. La transacción pasa a estado de «Cancelación» con el pago aún «Autorizado», y la cancelación solo llega al proveedor de pagos entre 1 y 2 horas después.

## Workaround

No existe ninguna solución alternativa disponible.