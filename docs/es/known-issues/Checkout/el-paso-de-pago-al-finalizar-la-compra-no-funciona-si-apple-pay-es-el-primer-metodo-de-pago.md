---
title: 'El paso de pago al finalizar la compra no funciona si Apple Pay es el primer método de pago.'
slug: el-paso-de-pago-al-finalizar-la-compra-no-funciona-si-apple-pay-es-el-primer-metodo-de-pago
status: PUBLISHED
createdAt: 2022-11-24T21:50:52.000Z
updatedAt: 2026-11-09T20:56:55.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-payment-step-doesnt-work-if-apple-pay-is-the-first-payment-method
locale: es
kiStatus: Backlog
internalReference: 704699
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando Apple Pay aparece como el primer método de pago en la lista de pasarelas y el usuario finaliza la compra en un navegador distinto a Safari, al llegar a la página de pago, se produce un bucle infinito que impide al usuario finalizar la compra.

## Simulación

Si realiza la compra en un navegador distinto a Safari y Apple Pay es el primer método de pago de la lista, al llegar a la página de pago, esta se quedará cargando.

## Workaround

Desactive y vuelva a activar este método de pago para que aparezca al final de la lista.