---
title: 'AdyenV1 no envía correctamente el valor de «paymentMethod.type» para Amex cuando se utiliza Apple Pay.'
slug: adyenv1-no-envia-correctamente-el-valor-de-paymentmethodtype-para-amex-cuando-se-utiliza-apple-pay
status: PUBLISHED
createdAt: 2023-10-17T14:58:13.000Z
updatedAt: 2023-10-17T14:58:13.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv1-does-not-correctly-send-the-paymentmethodtype-for-amex-when-using-apple-pay
locale: es
kiStatus: Backlog
internalReference: 920563
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Aunque Apple Pay permite al usuario realizar un pedido con una tarjeta Amex, nuestro conector heredado AdyenV1 no es compatible con esta marca.

En los registros de interacción, se observa que el campo `paymentMethod.type` está rellenado con «scheme», lo que provoca un error de Adyen.

## Simulación

Intenta realizar un pedido utilizando Apple Pay con una tarjeta Amex. La transacción será rechazada.

## Workaround

N/A.