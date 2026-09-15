---
title: 'Transacción atascada en estado Aprobado con pagos liquidados: se bloquea la facturación.'
slug: transaccion-atascada-en-estado-aprobado-con-pagos-liquidados-se-bloquea-la-facturacion
status: PUBLISHED
createdAt: 2026-09-15T13:38:03.000Z
updatedAt: 2026-09-15T13:38:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-approved-with-settled-payments-blocking-invoicing
locale: es
kiStatus: Backlog
internalReference: 1461229
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Una transacción cuyos pagos se liquidaron permanece en estado «Aprobado» y nunca llega a «Finalizado», lo que provoca que el pedido se quede atascado en «verificando el estado de la factura». La liquidación se registra y el conector responde correctamente, pero el pago nunca sale de los estados «Autorizado» o «En liquidación». Dado que un registro de liquidación ya consume el valor total del pago, las facturas posteriores no encuentran saldo disponible y fallan.
Síntomas visibles:

- Pedido atascado en "verificando estado de la factura" / "verificando factura"
- Transacción en "Aprobado", pago en "Autorizado" o "Liquidando" en "/payments", a pesar de que ya se registró una liquidación
- Respuesta de la pasarela de pago: "El pago con ID = {paymentId} no se liquidó porque el valor de liquidación era 0.00" (HTTP 500)
- OMS: "{"error":{"code":"001","message":"Se ha producido un error con la pasarela"}}"

En pedidos de pago único, el fallo es silencioso: la transacción simplemente permanece en "Aprobado". Solo se vuelve bloqueante cuando el pedido genera más de una factura.

## Simulación

No reproducible a demanda.
Para confirmar que se trata de este error, verifique los tres puntos:

1. `GET /api/pvt/transactions/{transactionId}/settlements` → `actions` suma el valor autorizado completo, `requests` es `[]`
2. `GET /api/pvt/transactions/{transactionId}/payments` → un pago permanece en estado `"status": "Authorized"` o `"Settling"` aunque su campo `settlement` ya esté completado
3. `GET /api/pvt/transactions/{transactionId}/capabilities` → `"minimumValue": 0.01` aunque existan liquidaciones

## Workaround

No hay solución alternativa disponible.