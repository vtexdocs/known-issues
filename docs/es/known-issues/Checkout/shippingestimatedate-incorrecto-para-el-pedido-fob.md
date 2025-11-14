---
title: 'ShippingEstimateDate incorrecto para el pedido FOB'
slug: shippingestimatedate-incorrecto-para-el-pedido-fob
status: PUBLISHED
createdAt: 2025-11-14T19:16:47.986Z
updatedAt: 2025-11-14T19:16:47.986Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-shippingestimatedate-for-order-fob
locale: es
kiStatus: Backlog
internalReference: 269104
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

## Simulación



- Crear un pedido vía API enviando el parámetro `"isFOB": true` en los "shippingData"
- Hacer un Get Order y comprobar que el parámetro "ShippingEstimateDate" no está considerando el "shippingEstimate" enviado por el marketplace


#### Workaround


N/A


