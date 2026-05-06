---
title: 'A solicitação do hub de impostos do Marketplace não leva em consideração o preço manual para descontos'
slug: a-solicitacao-do-hub-de-impostos-do-marketplace-nao-leva-em-consideracao-o-preco-manual-para-descontos
status: PUBLISHED
createdAt: 2023-11-08T17:59:26.000Z
updatedAt: 2023-12-06T19:27:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-manual-price-for-discounts
locale: pt
kiStatus: Fixed
internalReference: 932657
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a conta tem a opção `isMarketplaceResponsibleForTaxes` configurada, a solicitação do hub de impostos não considera os preços manuais para descontos em itens.

## Simulação

- Configure `taxConfiguration.isMarketplaceResponsibleForTaxes` na configuração do `orderForm`;
- Defina um preço manual para um item;
- A solicitação do hub de impostos não aplicará a diferença como um desconto.

## Workaround

N/A