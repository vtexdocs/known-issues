---
title: 'La API de uso de cupones de GET no muestra varios pedidos para el mismo cupón'
slug: la-api-de-uso-de-cupones-de-get-no-muestra-varios-pedidos-para-el-mismo-cupon
status: PUBLISHED
createdAt: 2021-01-21T18:14:35.000Z
updatedAt: 2023-09-08T17:54:02.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: get-coupon-usage-api-doesnt-list-multiple-orders-for-the-same-coupon
locale: es
kiStatus: Backlog
internalReference: 326662
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La API GET de uso de cupones https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview no muestra actualmente todos los pedidos cerrados en los que se ha utilizado este cupón, sino que muestra el total menos uno.

## Simulación

1) Cierra dos pedidos distintos con el mismo cupón.

2) Obtenga los datos del uso de este cupón https://developers.vtex.com/vtex-rest-api/reference/coupons#getusage

3) Se mostrará el total menos un pedido.

## Workaround

provisional**
N/A