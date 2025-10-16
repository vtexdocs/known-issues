---
title: Discrepancia en la visualización de reservas en la Gestión de Inventarios
slug: discrepancia-en-la-visualizacion-de-reservas-en-la-gestion-de-inventarios
status: PUBLISHED
createdAt: 2025-10-16T20:51:15.601Z
updatedAt: 2025-10-16T20:51:15.601Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: discrepancy-in-display-of-reservations-in-inventory-management
locale: es
kiStatus: Backlog
internalReference: 1220722
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



La pantalla de gestión de inventario presenta un comportamiento inesperado en el que la cantidad de artículos reservados mostrada en la pantalla de inicio es mayor que la cantidad mostrada en el modal de artículos reservados. Este comportamiento se produce para las reservas en estado "Canceled_AbortedCommitted", y estas reservas no se filtran correctamente en la pantalla de inicio.

## Simulación



No hay una manera fácil de reproducir este escenario, pero hay una alta probabilidad de que ocurra con reservas con el estado "Canceled_AbortedCommitted".

## Workaround



Al volver a cancelar la reserva, la cancelación funciona y la reserva ya no aparece en la interfaz de usuario.

https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel?endpoint=post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel

