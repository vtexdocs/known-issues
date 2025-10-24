---
title: 'El temporizador de la cuenta atrás del pago PIX se detiene cuando se minimiza la pestaña de pago.'
slug: el-temporizador-de-la-cuenta-atras-del-pago-pix-se-detiene-cuando-se-minimiza-la-pestana-de-pago
status: PUBLISHED
createdAt: 2025-10-15T17:18:35.098Z
updatedAt: 2025-10-15T17:18:35.098Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pix-payment-countdown-timer-pauses-when-checkout-tab-is-minimized
locale: es
kiStatus: Backlog
internalReference: 1308205
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El temporizador de cuenta atrás del pago PIX en Checkout deja de disminuir cuando se minimiza la pestaña del navegador o el usuario abandona la página.

Los usuarios ven que el temporizador se congela y solo se reanuda cuando vuelven a la pestaña.

## Simulación



- Requisitos previos: Cualquier tienda con PIX activado en Checkout
- Pasos:
  - Vaya a Checkout y seleccione PIX como método de pago; genere el código QR.
  - Minimice la pestaña del navegador o aléjese de ella durante al menos 5-10 minutos.
  - Vuelva a la pestaña y observe que el temporizador no ha iniciado la cuenta atrás mientras la pestaña estaba en segundo plano, reanudándose sólo al reactivarla.

## Workaround


No hay ninguna solución disponible.



