---
title: 'Las transacciones de la marca de tarjetas de Elo con ERedeRest no respetan la captura anticipada'
slug: las-transacciones-de-la-marca-de-tarjetas-de-elo-con-erederest-no-respetan-la-captura-anticipada
status: PUBLISHED
createdAt: 2021-03-30T23:57:36.000Z
updatedAt: 2026-06-05T21:25:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: elos-card-brand-transactions-with-erederest-are-not-respecting-early-capture
locale: es
kiStatus: No Fix
internalReference: 350814
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las transacciones procesadas a través del conector **ERedeRest** con la marca de tarjeta **Elo**, no se respeta la configuración de **captura anticipada**. La transacción se captura **inmediatamente después de la autorización**, independientemente del retraso configurado para la captura anticipada.

## Simulación

Cree una transacción utilizando la afiliación ERedeRest con la captura anticipada configurada y procese un pago con una tarjeta **Elo**. La captura se producirá inmediatamente después de la autorización, en lugar de esperar al retraso configurado.

## Workaround

provisional**
N/A