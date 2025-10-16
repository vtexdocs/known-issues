---
title: ¡No es posible hacer un cambio (cambio v2) para aumentar a la orden si la cuenta tiene Modo Defensa activo en pagos o cualquier otro pago!
slug: no-es-posible-hacer-un-cambio-cambio-v2-para-aumentar-a-la-orden-si-la-cuenta-tiene-modo-defensa-activo-en-pagos-o-cualquier-otro-pago
status: PUBLISHED
createdAt: 2025-10-16T20:01:06.727Z
updatedAt: 2025-10-16T20:01:06.727Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: it-is-not-possible-to-make-a-change-change-v2-to-increase-to-the-order-if-the-account-has-defense-mode-active-in-payments-or-any-other-payment
locale: es
kiStatus: Backlog
internalReference: 1155646
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando la cuenta tiene activado el DM (Modo Defensa) en el módulo de pagos, e intenta realizar un cambio v2 para incrementar el valor, no será posible proceder con la operación, ya que la pasarela entra en modo reintento, aumentando el tiempo de respuesta para el SOS (SalesOrdemSystem), entonces el SOS cancela la operación y vuelve a intentarlo, ¡hay 5 intentos hasta que la operación de cambio se cancela completamente!.

Este mismo escenario ocurre cuando cualquier método de pago requiere autorización manual de un usuario y aumenta y causa un retraso en la comunicación entre la pasarela y el SOS.


#### Simulación


¡Para simular, la pasarela debe tener activado el modo defensa e intentar realizar un cambio v2 además de la solicitud!

## Workaround


No hay solución para este escenario, ¡es necesario desactivar DM para que el cambio v2 siga!



