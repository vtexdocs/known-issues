---
title: 'A solicitação do hub de impostos do Marketplace não leva em consideração alguns tipos de desconto'
slug: a-solicitacao-do-hub-de-impostos-do-marketplace-nao-leva-em-consideracao-alguns-tipos-de-desconto
status: PUBLISHED
createdAt: 2023-11-30T21:13:56.000Z
updatedAt: 2023-12-06T19:26:49.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-tax-hub-request-doesnt-consider-some-discount-types
locale: pt
kiStatus: Fixed
internalReference: 945580
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a conta tem a configuração `isMarketplaceResponsibleForTaxes` ativada, a solicitação ao hub de impostos não leva em consideração alguns tipos de desconto: Nominal, Porcentual e Preço máximo por item. Isso afeta o cálculo do imposto, e o preço final fica mais alto do que o esperado.

## Simulação

- Configure taxConfiguration.isMarketplaceResponsibleForTaxes na configuração do orderForm;
- Configure um dos tipos de desconto Nominal, Porcentual ou Preço máximo por item a partir de uma promoção regular;
- A solicitação do hub de impostos não aplicará o desconto.

## Workaround

N/A