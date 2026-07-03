---
title: 'Transacciones canceladas en MercadoPago no canceladas en VTEX'
slug: transacciones-canceladas-en-mercadopago-no-canceladas-en-vtex
status: PUBLISHED
createdAt: 2021-04-26T23:06:53.000Z
updatedAt: 2026-07-03T15:21:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacoes-canceladas-no-mercadopago-nao-cancelam-na-vtex
locale: es
kiStatus: No Fix
internalReference: 360653
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se cancela manualmente un pago en el panel de MercadoPago después de que la transacción haya superado la etapa de autorización en VTEX, la notificación de cancelación enviada por MercadoPago se ignora. VTEX continúa procesando la transacción hasta su finalización, mientras que el pago permanece cancelado en MercadoPago, lo que genera una discrepancia de estado entre ambos sistemas. El pedido aparece como completado en VTEX, pero el pago nunca se ha cobrado realmente.

## Simulación

No se ha podido reproducir de forma controlada. El problema requiere que MercadoPago envíe una notificación de cancelación en un punto específico del flujo de la transacción, después de que VTEX haya superado el estado de «autorización», lo cual no se puede forzar de forma consistente.

## Workaround

No disponible.