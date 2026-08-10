---
title: 'Los métodos de pago eliminados siguen apareciendo en la página de pago cuando la cuenta no tiene reglas/condiciones de pago activas.'
slug: los-metodos-de-pago-eliminados-siguen-apareciendo-en-la-pagina-de-pago-cuando-la-cuenta-no-tiene-reglascondiciones-de-pago-activas
status: PUBLISHED
createdAt: 2026-03-19T17:10:55.000Z
updatedAt: 2026-08-10T20:50:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: removed-payment-methods-still-returned-in-checkout-when-account-has-no-active-payment-rulesconditions
locale: es
kiStatus: Fixed
internalReference: 1380926
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una cuenta elimina o desactiva todas sus reglas de pago en `/admin/pci-gateway#/rules`, Checkout sigue mostrando los métodos de pago en `orderForm.paymentData.paymentSystems` para ese vendedor. El síntoma visible es que las interfaces de usuario (headless/frontends) pueden mostrar métodos de pago que no deberían estar disponibles para la cuenta, ya que siguen apareciendo en `paymentSystems`.

## Simulación

1. Elimine o desactive todas las condiciones de pago de una cuenta.

2. Añada artículos vendidos por el vendedor o marketplace afectado a un carrito en el proceso de pago del marketplace.

3. Recupere el formulario de pedido e inspeccione `orderForm.paymentData.paymentSystems`.

4. Observe que los métodos de pago siguen apareciendo en `paymentSystems` a pesar de que el vendedor no tenga reglas de pago activas. El método `getPaymentSystems` del vendedor o marketplace devolvió los métodos, incluso aunque las reglas de la cuenta estuvieran inactivas o eliminadas.

## Workaround

Abra un ticket con el equipo de soporte para que apliquen una solución alternativa interna.