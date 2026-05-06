---
title: 'Os dados de marketing não são salvos nos pedidos ao usar o recurso de cupons múltiplos e os parâmetros UTM'
slug: os-dados-de-marketing-nao-sao-salvos-nos-pedidos-ao-usar-o-recurso-de-cupons-multiplos-e-os-parametros-utm
status: PUBLISHED
createdAt: 2023-11-14T18:03:15.000Z
updatedAt: 2024-04-09T13:32:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingdata-is-not-saved-in-orders-when-using-multiple-coupons-feature-and-utms
locale: pt
kiStatus: Fixed
internalReference: 936458
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o recurso de cupons múltiplos e houver cupons e utms, ou 'marketingTags', no 'orderForm', nenhum 'marketingData' é salvo no pedido.

## Simulação

- Tenha uma conta que utilize o recurso de cupons múltiplos;
- Use um cupom e defina qualquer UTM ou “marketingTags”; ambos devem estar no “orderForm”;
- Conclua a compra; não haverá nenhum “marketingData” no pedido.

## Workaround

N/A