---
title: 'En Payout Split no se envía el objeto recipiens en el método de pago Apple Pay'
slug: en-payout-split-no-se-envia-el-objeto-recipiens-en-el-metodo-de-pago-apple-pay
status: PUBLISHED
createdAt: 2025-11-17T18:45:34.224Z
updatedAt: 2025-11-17T18:45:34.224Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-payout-split-the-recipiens-object-is-not-sent-in-the-apple-pay-payment-method
locale: es
kiStatus: Fixed
internalReference: 1094952
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


No es posible construir/enviar un objeto de destinatario para el método de pago Apple Pay, incluso con todos los ajustes necesarios habilitados.


#### Simulación



1. Habilitar el fraccionamiento de cobros en un conector que permita el fraccionamiento mediante el método de pago Apple Pay.
2. Comprar un artículo al vendedor, que tiene una comisión.
3. Comprobar que en el proceso en el que se deben enviar los destinatarios, en la autorización o captura, no existe el objeto.

## Workaround


N/A



