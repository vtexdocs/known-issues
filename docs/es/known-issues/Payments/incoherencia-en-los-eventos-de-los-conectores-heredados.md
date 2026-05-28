---
title: 'Incoherencia en los eventos de los conectores heredados'
slug: incoherencia-en-los-eventos-de-los-conectores-heredados
status: PUBLISHED
createdAt: 2024-05-07T17:29:59.000Z
updatedAt: 2026-05-28T19:46:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency-in-legacy-connectors
locale: es
kiStatus: No Fix
internalReference: 1028677
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Esto se debe a un evento que se publicó y nunca se consumió en los conectores heredados.
Por lo general, el estado del pedido se queda bloqueado en «pago pendiente», y la transacción puede quedarse bloqueada en «autorización» o «aprobado».

## Simulación

No es posible simular este problema.

## Workaround

Podemos cambiar manualmente el estado volviendo a procesar el evento a través de las API internas.