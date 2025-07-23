---
title: 'Para el pago en efectivo (1 plazo) está siendo procesado por las condiciones de pago que no tienen la opción de 1 plazo'
id: 4IFxkUqJ9jdqkJf7kSNUcy
status: PUBLISHED
createdAt: 2022-03-26T12:27:04.928Z
updatedAt: 2022-11-25T22:06:19.145Z
publishedAt: 2022-11-25T22:06:19.145Z
firstPublishedAt: 2022-03-26T12:27:05.532Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: for-in-cash-payment-1-installment-is-being-processed-by-payment-conditions-that-have-not-1-installment-option
locale: es
kiStatus: Backlog
internalReference: 292781
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Para el pago en efectivo (1 plazo) se está ignorando para la regla de condición de pago, aunque la condición de pago no tiene configuración para 1 plazo.




## Simulación



1. Cree dos condiciones de pago con dos intervalos de cuotas diferentes: Una con 1-12 plazos y otra con 13-18 plazos
2. Vaya a la caja y compre un artículo al azar y finalice la compra con la opción de 1 cuota y verifique la transacción en el administrador, se asociará a la condición de Pago con 13-18 cuotas, aunque no tenga 1 cuota configurada.




## Workaround


Establezca la condición de pago con cuotas de 1 a 13 por defecto

