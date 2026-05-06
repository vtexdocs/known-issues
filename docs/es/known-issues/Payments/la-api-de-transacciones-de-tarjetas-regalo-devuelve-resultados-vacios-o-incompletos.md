---
title: 'La API de transacciones de tarjetas regalo devuelve resultados vacíos o incompletos'
slug: la-api-de-transacciones-de-tarjetas-regalo-devuelve-resultados-vacios-o-incompletos
status: PUBLISHED
createdAt: 2021-06-21T17:37:01.000Z
updatedAt: 2025-12-09T17:44:16.000Z
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

Los puntos finales de la API «Get Giftcard Transaction» y «Get GiftCard from GiftCard Provider» podrían devolver una respuesta vacía u omitir algunas operaciones, como los abonos o los cargos, en la lista.

## Simulación

1. En una cuenta con tarjetas regalo nativas, elija una transacción ya pagada con una tarjeta regalo
2. Copie el giftcardId y llame al punto final «Get Giftcard Transaction» o «Get GiftCard from GiftCard Provider»
3. La respuesta estará vacía o será incompleta

## Workaround

provisional**
N/A