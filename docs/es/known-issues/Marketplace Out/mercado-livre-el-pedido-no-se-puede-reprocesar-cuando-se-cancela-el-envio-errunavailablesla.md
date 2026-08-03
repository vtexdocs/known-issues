---
title: 'Mercado Livre El pedido no se puede reprocesar cuando se cancela el envío (ERR_UNAVAILABLE_SLA)'
slug: mercado-livre-el-pedido-no-se-puede-reprocesar-cuando-se-cancela-el-envio-errunavailablesla
status: PUBLISHED
createdAt: 2026-08-03T20:51:28.000Z
updatedAt: 2026-08-03T20:51:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: mercado-livre-order-fails-to-reprocess-when-shipment-is-cancelled-errunavailablesla
locale: es
kiStatus: Backlog
internalReference: 1442735
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos de Mercado Livre cuyo envío se encuentra en estado «cancelado» (p. ej., subestado «pack_partially_cancelled», no documentado en la API de ML) no se pueden reprocesar en la integración. El Bridge devuelve un error genérico y engañoso («ERR_UNAVAILABLE_SLA»: «El pedido no se importó porque el SLA de entrega seleccionado no está disponible»), ocultando el problema real: una excepción no controlada al procesar una lista de pedidos vacía.

## Simulación

- Busque un pedido en Mercado Livre cuyo envío tenga el estado «cancelado» y devuelva una lista de pedidos vacía (p. ej., pedido n.° 47381163879, cuenta eletroangeloni).

- Reprocese el pedido a través del Bridge.

- El error persiste en todos los intentos, devolviendo siempre «ERR_UNAVAILABLE_SLA».

## Workaround

N/A