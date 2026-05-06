---
title: 'O evento ProductClick não está sendo acionado na barra de pesquisa'
slug: o-evento-productclick-nao-esta-sendo-acionado-na-barra-de-pesquisa
status: PUBLISHED
createdAt: 2023-01-30T17:43:30.000Z
updatedAt: 2023-01-30T17:43:30.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: productclick-event-not-triggering-in-searchbar
locale: pt
kiStatus: Backlog
internalReference: 742754
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O evento ProductClick não está sendo acionado na barra de pesquisa

https://github.com/vtex-apps/search/blob/8cf2cec70a2d6e1ac616343d07f10d75b45aa8ae/react/components/Autocomplete/components/TileList/TileList.tsx#L76

Devemos adicionar o evento productClick da mesma forma que fizemos no bloco product-summary em productSummaryCustom:

https://github.com/vtex-apps/product-summary/blob/8ef1f2b397d35a03b2acaf448c0c70848600c4a5/react/ProductSummaryCustom.tsx

https://github.com/vtex-apps/product-summary/blob/45a6df2afeabd441d3c772b5ee1840206a8cf061/react/ProductSummaryList.tsx#L160-L174

## Simulação

Vá até a barra de pesquisa
Pesquise qualquer termo que tenha produtos
Clique no produto
Verifique o evento dataLayer no console

## Workaround

Não