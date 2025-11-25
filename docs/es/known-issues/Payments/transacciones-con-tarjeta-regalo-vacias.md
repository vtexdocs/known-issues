---
title: 'Transacciones con tarjeta regalo vacías'
slug: transacciones-con-tarjeta-regalo-vacias
status: PUBLISHED
createdAt: 2025-11-25T11:09:48.206Z
updatedAt: 2025-11-25T11:09:48.206Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: giftcard-transactions-returning-empty
locale: es
kiStatus: Backlog
internalReference: 384430
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los puntos finales de API Get Giftcard Transaction y Get GiftCard from GiftCard Provider siempre devuelven una respuesta vacía


#### Simulación



1. En una cuenta con tarjetas regalo nativas, elige una transacción ya pagada con una tarjeta regalo
2. Copie el giftcardId y llame al punto final Get Giftcard Transaction o Get GiftCard from GiftCard Provider
3. La respuesta estará vacía

## Workaround


N/A



