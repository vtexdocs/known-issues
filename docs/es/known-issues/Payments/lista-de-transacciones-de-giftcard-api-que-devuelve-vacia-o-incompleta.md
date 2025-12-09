---
title: 'Lista de transacciones de Giftcard API que devuelve vacía o incompleta'
slug: lista-de-transacciones-de-giftcard-api-que-devuelve-vacia-o-incompleta
status: PUBLISHED
createdAt: 2025-12-09T14:44:57.427Z
updatedAt: 2025-12-09T14:44:57.427Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: list-giftcard-transactions-api-returning-empty-or-incomplete
locale: es
kiStatus: Backlog
internalReference: 384430
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los puntos finales de la API Get Giftcard Transaction y Get GiftCard from GiftCard Provider podían devolver una respuesta vacía o pasar por alto algunas operaciones, como crédito o débito, de la lista.


#### Simulación



1. En una cuenta con tarjetas regalo nativas, elige una transacción ya pagada con una tarjeta regalo
2. Copie el giftcardId y llame al punto final Get Giftcard Transaction o Get GiftCard from GiftCard Provider
3. La respuesta estará vacía o incompleta

## Workaround


N/A



