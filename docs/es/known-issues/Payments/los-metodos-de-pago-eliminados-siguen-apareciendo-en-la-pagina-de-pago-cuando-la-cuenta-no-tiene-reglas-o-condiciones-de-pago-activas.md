---
title: 'Los métodos de pago eliminados siguen apareciendo en la página de pago cuando la cuenta no tiene reglas o condiciones de pago activas'
slug: los-metodos-de-pago-eliminados-siguen-apareciendo-en-la-pagina-de-pago-cuando-la-cuenta-no-tiene-reglas-o-condiciones-de-pago-activas
status: PUBLISHED
createdAt: 2026-03-19T14:11:26.739Z
updatedAt: 2026-03-19T14:11:26.739Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: removed-payment-methods-still-returned-in-checkout-when-account-has-no-active-payment-rulesconditions
locale: es
kiStatus: Backlog
internalReference: 1380926
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una cuenta elimina o desactiva todas sus reglas de pago en `/admin/pci-gateway#/rules`, el proceso de pago sigue mostrando métodos de pago en `orderForm.paymentData.paymentSystems` para ese vendedor. El síntoma visible es que las interfaces front-end o headless pueden mostrar métodos de pago que deberían estar indisponibles para la cuenta, ya que siguen figurando en paymentSystems.

## Simulación

1. Elimina o desactiva todas las condiciones de pago de una cuenta.
2. Añade artículos vendidos por el vendedor o el marketplace afectado a un carrito en el proceso de pago del marketplace.
3. Recupera el orderForm e inspecciona orderForm.paymentData.paymentSystems.
4.

Observe que los métodos de pago siguen apareciendo en paymentSystems a pesar de que el vendedor no tiene reglas de pago activas. La función getPaymentSystems del vendedor o del marketplace devolvió los métodos, aunque las reglas de la cuenta estuvieran inactivas o se hubieran eliminado.

## Workaround

provisional**
Abra un ticket al equipo de soporte para que aplique una solución provisional interna.