---
title: 'En Argentina, el paso de envío al finalizar la compra no avanza al paso de pago.'
slug: en-argentina-el-paso-de-envio-al-finalizar-la-compra-no-avanza-al-paso-de-pago
status: PUBLISHED
createdAt: 2021-01-15T18:35:41.000Z
updatedAt: 2026-09-15T17:30:56.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shipping-step-does-not-advance-to-payments-step-in-argentina
locale: es
kiStatus: Backlog
internalReference: 324775
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas argentinas, algunos códigos postales impiden que el comprador avance en el paso de envío: la dirección se autocompleta a partir del código postal, pero la ciudad resultante no es un valor aceptado en las reglas de país de ARG de `vtex.address-form`, por lo que la dirección nunca se valida. Dado que el campo `ciudad` se autocompleta, no se muestra en el formulario; el comprador no tiene ningún campo inválido que corregir y no se muestra ningún mensaje de error.

Por lo tanto, la dirección nunca se guarda y el paso no avanza. Solo se ven afectados los códigos postales cuya ciudad se resuelve con un único valor; los códigos que se resuelven con varias ciudades muestran un selector de `Ciudad` y funcionan con normalidad.

## Simulación

- En una tienda ARG, agregue cualquier SKU disponible al carrito y complete el paso de perfil.

- En el paso de envío, ingrese un código postal afectado (por ejemplo, `1687`).

- Complete la calle y el número. No se muestra el campo de ciudad.
- Haga clic en "Ir al pago": no sucede nada; no se muestra ningún error.

- Control: repita el proceso con un código postal que no se vea afectado (por ejemplo, `1688`): el paso avanza con normalidad.

- Para confirmar un caso reportado: verifique que `shippingData.address.street` siga siendo `null` en el formulario de pedido después de que el comprador lo haya completado.

## Workaround

No hay ninguna solución alternativa disponible.