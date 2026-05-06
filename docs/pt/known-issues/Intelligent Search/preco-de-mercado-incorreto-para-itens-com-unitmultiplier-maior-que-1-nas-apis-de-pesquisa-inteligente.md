---
title: 'Preço de mercado incorreto para itens com UnitMultiplier maior que 1 nas APIs de Pesquisa Inteligente'
slug: preco-de-mercado-incorreto-para-itens-com-unitmultiplier-maior-que-1-nas-apis-de-pesquisa-inteligente
status: PUBLISHED
createdAt: 2023-11-11T00:25:53.000Z
updatedAt: 2023-11-11T00:25:53.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: wrong-spotprice-for-items-with-unitmultiplier-greater-than-1-in-intelligent-search-apis
locale: pt
kiStatus: Backlog
internalReference: 934687
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nas APIs de Pesquisa Inteligente (GraphQL ou REST), a propriedade `spotPrice` do objeto `items.sellers.commercialOffer` está incorreta para itens em que o `unitMultiplier` é maior que `1`.

O `spotPrice` deveria representar a forma de pagamento mais barata na opção de pagamento em uma única parcela, a fim de mostrar o “preço à vista”, com desconto (se houver), mas, neste caso, acaba retornando o preço normal do item.

Isso não ocorre para itens em que o multiplicador é menor que `1` (itens fracionados).

## Simulação

Na API REST ou no GraphQL da Pesquisa Inteligente, verifique a propriedade para itens nesse cenário específico.

## Workaround

O valor correto para `spotPrice` pode ser obtido na matriz `Installments` dentro do mesmo objeto `commertialOffer`.