---
title: 'A solicitação no Tax Hub não soma os descontos quando é aplicado um preço manual'
slug: a-solicitacao-no-tax-hub-nao-soma-os-descontos-quando-e-aplicado-um-preco-manual
status: PUBLISHED
createdAt: 2023-11-08T18:07:07.000Z
updatedAt: 2023-11-08T18:07:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-hub-request-doesnt-sum-discounts-when-manual-price-is-applied
locale: pt
kiStatus: Backlog
internalReference: 932667
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um preço manual é aplicado a um item para reduzir o valor, a solicitação do Tax Hub não o soma e exibe os totais de desconto sempre como 0.

## Simulação

- Defina um preço manual inferior ao preço atual de um item;
- A solicitação do Tax Hub não somará o desconto nos totais.

## Workaround

N/A