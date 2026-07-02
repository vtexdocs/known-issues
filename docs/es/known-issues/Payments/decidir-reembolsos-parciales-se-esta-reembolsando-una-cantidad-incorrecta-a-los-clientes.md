---
title: 'Decidir: Reembolsos parciales: se está reembolsando una cantidad incorrecta a los clientes.'
slug: decidir-reembolsos-parciales-se-esta-reembolsando-una-cantidad-incorrecta-a-los-clientes
status: PUBLISHED
createdAt: 2020-09-26T01:31:10.000Z
updatedAt: 2026-07-02T16:54:57.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidir-partial-refunds-wrong-amount-is-being-refunded-to-the-customers
locale: es
kiStatus: No Fix
internalReference: 290981
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se emite un reembolso parcial a través del conector Decidir, el importe reembolsado a la tarjeta de crédito del cliente no coincide con el valor mostrado en la transacción VTEX. El registro de la transacción aparece correcto en el panel de administración, pero el cliente recibe un importe de reembolso diferente.

## Simulación

No se ha podido reproducir de forma consistente. La discrepancia se debe a un error de formato en la forma en que se envía el importe del reembolso a Decidir.

## Workaround

No disponible.