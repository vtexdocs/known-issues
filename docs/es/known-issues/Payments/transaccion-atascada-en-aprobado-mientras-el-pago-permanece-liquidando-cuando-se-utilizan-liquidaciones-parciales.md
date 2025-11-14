---
title: 'Transacción atascada en Aprobado mientras el pago permanece Liquidando cuando se utilizan liquidaciones parciales.'
slug: transaccion-atascada-en-aprobado-mientras-el-pago-permanece-liquidando-cuando-se-utilizan-liquidaciones-parciales
status: PUBLISHED
createdAt: 2025-11-14T19:32:33.894Z
updatedAt: 2025-11-14T19:32:33.894Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-while-payment-remains-settling-when-using-partial-settlements
locale: es
kiStatus: Backlog
internalReference: 1319395
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las transacciones se atascan en el estado Aprobado cuando el pago correspondiente permanece en Liquidación, impidiendo que las transacciones avancen por el flujo esperado.
El síntoma visible es que se envían solicitudes de captura, pero las solicitudes y las acciones no se alinean, y el estado del pedido no avanza, aunque se fuerce la liquidación de la transacción.

En OMS, es posible observar un mensaje que muestra "Se ha producido un error con Gateway".


#### Simulación


No es posible reproducir el error

## Workaround


No hay ninguna solución disponible.



