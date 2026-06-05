---
title: 'La transacción se ha quedado bloqueada en la fase de captura; el valor enviado al conector (Yamí) difiere del valor del pedido'
slug: la-transaccion-se-ha-quedado-bloqueada-en-la-fase-de-captura-el-valor-enviado-al-conector-yami-difiere-del-valor-del-pedido
status: PUBLISHED
createdAt: 2020-12-18T18:57:08.000Z
updatedAt: 2026-06-05T21:21:40.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-on-capturing-value-sent-to-connector-yami-different-from-order-value
locale: es
kiStatus: No Fix
internalReference: 317833
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas transacciones con división de transacción mediante YamiSplitV1 envían al conector un valor diferente al valor del pedido. Al intentar realizar la captura, la carga útil enviada tiene un valor diferente al total, normalmente menor; la pasarela intenta realizar una nueva captura para completar el valor total; cuando esto ocurre, el sistema entiende que ya se ha realizado una captura e informa de que no hay nada más que capturar.
En algunos casos, la pasarela informa de que no hay nada más que capturar.

## Simulación

No hay forma de replicar este comportamiento en un entorno de producción.

## Workaround

No hay ninguna solución alternativa