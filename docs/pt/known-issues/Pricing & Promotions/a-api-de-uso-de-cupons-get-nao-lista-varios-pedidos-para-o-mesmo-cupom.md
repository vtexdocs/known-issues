---
title: 'A API de uso de cupons GET não lista vários pedidos para o mesmo cupom'
slug: a-api-de-uso-de-cupons-get-nao-lista-varios-pedidos-para-o-mesmo-cupom
status: PUBLISHED
createdAt: 2021-01-21T18:14:35.000Z
updatedAt: 2023-09-08T17:54:02.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: get-coupon-usage-api-doesnt-list-multiple-orders-for-the-same-coupon
locale: pt
kiStatus: Backlog
internalReference: 326662
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API GET de uso de cupons https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview não está listando, no momento, todos os pedidos concluídos nos quais esse cupom foi utilizado; está listando o total menos um

## Simulação

1) Conclua dois pedidos distintos com o mesmo cupom.

2) Obtenha os dados de uso deste cupom https://developers.vtex.com/vtex-rest-api/reference/coupons#getusage

3) Será listado o total menos um pedido.

## Workaround

n/a