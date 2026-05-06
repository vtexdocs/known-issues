---
title: 'Una expresión regular obsoleta para tarjetas de débito Mastercard nos está llevando a identificar erróneamente algunos BIN'
slug: una-expresion-regular-obsoleta-para-tarjetas-de-debito-mastercard-nos-esta-llevando-a-identificar-erroneamente-algunos-bin
status: PUBLISHED
createdAt: 2022-08-19T23:55:49.000Z
updatedAt: 2024-04-02T19:12:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-mastercard-debit-regex-is-causing-us-to-misidentify-some-bins
locale: es
kiStatus: Backlog
internalReference: 642136
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos BIN no se identifican correctamente al finalizar la compra. La marca de la tarjeta se determina mediante una expresión regular que, con el tiempo, puede quedar desactualizada, lo que provoca que la marca de la tarjeta no se identifique o se identifique erróneamente.

## Simulación

1. Configura dos condiciones de pago, una para tarjetas de débito Mastercard
2. Añade un artículo aleatorio a tu carrito en la tienda y elige pagarlo con tarjeta de débito
3. Introduce el número de tarjeta con el BIN de débito de Mastercard 551898 y complétalo con números aleatorios
4. Rellena el resto de la información de la tarjeta con datos falsos
5. Como la tarjeta no se ha podido identificar, al finalizar la compra se te pedirá que confirmes el número de tarjeta y la marca de la tarjeta ya estará seleccionada como otra marca de tarjeta

## Workaround

provisional**
No hay ninguna solución provisional.