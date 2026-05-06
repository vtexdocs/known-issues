---
title: 'O=OrderByBestDiscount apresenta uma ordem incorreta'
slug: oorderbybestdiscount-apresenta-uma-ordem-incorreta
status: PUBLISHED
createdAt: 2021-08-06T21:52:38.000Z
updatedAt: 2025-10-07T22:50:41.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbybestdiscount-brings-the-wrong-order
locale: pt
kiStatus: Backlog
internalReference: 409119
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O `OrderByBestDiscount` é calculado levando em consideração o menor `listPrice` e `price` entre todos os canais de venda disponíveis

## Simulação

- Insira mais de um preço no produto. Ex.: dois preços de tabela diferentes em vendedores distintos
- Configure a ordenação da página por desconto (O=OrderByBestDiscount)
- Observe que a ordenação não segue a ordem dos preços exibidos

## Workaround

N/A