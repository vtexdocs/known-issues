---
title: 'O=OrderByPriceASC (ou OrderByPriceDESC) pode resultar em uma ordem incorreta'
slug: oorderbypriceasc-ou-orderbypricedesc-pode-resultar-em-uma-ordem-incorreta
status: PUBLISHED
createdAt: 2022-05-20T15:48:00.000Z
updatedAt: 2024-06-21T11:28:55.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: oorderbypriceasc-or-orderbypricedesc-could-bring-the-wrong-order
locale: pt
kiStatus: Backlog
internalReference: 582861
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

**O=OrderByPriceASC** (ou **OrderByPriceDESC**) pode utilizar a política incorreta para ordenar os preços. Além disso, como o preço indexado possui apenas uma casa decimal, a segunda casa decimal do preço não será considerada.

Além disso, os preços de vendedores não abrangentes não são considerados na ordenação. Como resultado, lojas regionalizadas no Portal não podem usar o parâmetro **orderByPrice**.

## Simulação

- Insira mais de um preço no produto. Ex.: dois preços de tabela diferentes em vendedores diferentes
- Defina a ordenação da página por preço (ex.: O=OrderByPriceASC)
- Verifique se a classificação não está na ordem dos preços exibidos
ou

- Pesquise dois produtos com preços decimais. Ex.: preço 1 = 14,04 e preço 2 = 14,01
- Configure a ordenação da página por preço (ex.: O=OrderByPriceASC)
- Verifique se a ordenação não está na mesma ordem dos preços exibidos

## Workaround

Nenhuma no Portal. No entanto, a conta pode mudar para a Pesquisa Inteligente.