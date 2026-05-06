---
title: 'Fecha de envío estimada incorrecta para el pedido FOB'
slug: fecha-de-envio-estimada-incorrecta-para-el-pedido-fob
status: PUBLISHED
createdAt: 2020-07-29T15:26:39.000Z
updatedAt: 2023-01-05T20:25:43.000Z
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

la fecha «shippingEstimateDate» se calcula incorrectamente en los pedidos de tipo FOB

## Simulación

- Crea un pedido a través de la API enviando el parámetro `"isFOB": true` en el campo «shippingData»
- Realiza una consulta Get Order y comprueba que el parámetro «ShippingEstimateDate» no tiene en cuenta el «shippingEstimate» enviado por el marketplace

## Workaround

provisional**
N/A