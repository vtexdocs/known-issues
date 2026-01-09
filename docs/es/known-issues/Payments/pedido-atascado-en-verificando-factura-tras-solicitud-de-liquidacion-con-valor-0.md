---
title: 'Pedido atascado en «Verificando factura» tras solicitud de liquidación con valor 0.'
slug: pedido-atascado-en-verificando-factura-tras-solicitud-de-liquidacion-con-valor-0
status: PUBLISHED
createdAt: 2026-01-09T15:50:43.633Z
updatedAt: 2026-01-09T15:50:43.633Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-stuck-in-verifying-invoice-after-settlementrequest-with-value-0
locale: es
kiStatus: Backlog
internalReference: 1349027
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Los pedidos pueden quedarse atascados en **Verificando factura** aunque el adquirente haya abonado el pago. El síntoma visible es que OMS no mueve el pedido a Facturado porque falta el registro de liquidación de VTEX Gateway en `/api/pvt/transactions/{transactionId}/settlements`. Esto ocurre cuando un servicio/aplicación llama a la API /settlement-request con el importe 0, lo que empuja el estado de la transacción a finalizado sin una entrada de liquidación adecuada, bloqueando los flujos de facturación. #### Simulación

## Workaround

