---
title: 'Los pedidos de MELI no se cancelan en VTEX OMS en el caso de cuentas múltiples'
slug: los-pedidos-de-meli-no-se-cancelan-en-vtex-oms-en-el-caso-de-cuentas-multiples
status: PUBLISHED
createdAt: 2024-02-06T11:04:34.000Z
updatedAt: 2024-02-06T11:04:34.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-orders-not-being-cancelled-in-vtex-oms-for-multiples-accounts-scenario
locale: es
kiStatus: Backlog
internalReference: 977453
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, nuestra integración con MELI presenta un problema relacionado con el proceso de cancelación de pedidos. Cuando MELI cancela un pedido y el vendedor tiene más de cuatro cuentas en VTEX, existe la posibilidad de que no se intente cancelar el pedido en la quinta cuenta

## Simulación

Si no se puede completar la cancelación del pedido, es posible que el vendedor vea que el pedido no se ha cancelado en VTEX, pero sí en MELI; en este caso, es necesario realizar una cancelación manual directamente en el OMS.
Esto solo se aplica a los casos en los que el vendedor tiene más de 4 cuentas en VTEX utilizando el mismo ID de usuario de MELI.

## Workaround

provisional**
n/a