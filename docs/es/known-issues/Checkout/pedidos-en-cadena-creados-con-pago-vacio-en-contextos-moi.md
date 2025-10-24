---
title: 'Pedidos en cadena creados con pago vacío en contextos MOI'
slug: pedidos-en-cadena-creados-con-pago-vacio-en-contextos-moi
status: PUBLISHED
createdAt: 2025-10-16T20:31:05.201Z
updatedAt: 2025-10-16T20:31:05.201Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: chain-orders-created-with-empty-payment-in-moi-contexts
locale: es
kiStatus: Backlog
internalReference: 1167363
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los pedidos creados en una configuración de Inventario Omnicanal Multinivel (MOI) a nivel de `cadena` se crean con dos pagos, uno de ellos vacío con valor `0`.


#### Simulación



- Crear un pedido en un contexto MOI;
- El pedido en cadena tendrá dos pagos en su transacción, uno de ellos vacío con valor `0`.

## Workaround


N/A



