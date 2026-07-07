---
title: 'A classificação da Busca Inteligente por preço ignora o canal de vendas e o contexto de regionalização.'
slug: a-classificacao-da-busca-inteligente-por-preco-ignora-o-canal-de-vendas-e-o-contexto-de-regionalizacao
status: PUBLISHED
createdAt: 2022-05-03T06:21:53.000Z
updatedAt: 2026-07-07T20:41:30.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-intelligent-search-by-price-ignores-sales-channel-and-regionalization-context
locale: pt
kiStatus: Fixed
internalReference: 571101
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a Busca Inteligente com regionalização (`regionId`) ou variação de canal de vendas, a classificação de itens por preço não funciona corretamente.

A regionalização e os canais de vendas só podem classificar por informações de disponibilidade/estoque, não considerando variações de preço – que estão sempre vinculadas ao mesmo preço indexado. Os preços atualizados são detectados durante a renderização do conteúdo (portanto, estão sempre corretos), mas não afetam a classificação (feita em um momento anterior), o que se estende a promoções e filtros de faixa de preço.

Isso também é um problema para itens disponíveis apenas em um contexto regionalizado. Se o "vendedor 1" e suas opções de marca branca abrangentes estiverem sem estoque, o item não terá preço (será zero), o que descarta o item dos filtros ou pode colocá-lo no final dos resultados.

## Simulação

Em uma loja com preços diferentes para cada vendedor white label usando regionalização ou canal de vendas, ou com itens indisponíveis para o "vendedor 1", acesse qualquer PLP com um filtro/regionalização aplicado pela dimensão aplicável e ordene por preço. Você notará que os preços dos produtos não serão ordenados como esperado.

## Workaround

N/A