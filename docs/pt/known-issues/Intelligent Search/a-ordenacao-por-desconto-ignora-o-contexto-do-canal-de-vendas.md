---
title: 'A ordenação por desconto ignora o contexto do canal de vendas.'
slug: a-ordenacao-por-desconto-ignora-o-contexto-do-canal-de-vendas
status: PUBLISHED
createdAt: 2026-07-07T20:33:35.000Z
updatedAt: 2026-07-07T20:33:35.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sorting-by-discount-ignores-sales-channel-context
locale: pt
kiStatus: Backlog
internalReference: 1431337
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a Busca Inteligente com preços diferentes por canal de vendas, a ordenação de itens por desconto não funciona corretamente.

As políticas comerciais não consideram as variações de preço com desconto ou promoção. As promoções atualizadas são detectadas durante a renderização do conteúdo (portanto, estão sempre corretas na ficha do produto), mas não afetam a ordenação baseada em desconto (feita em um momento anterior).

Como resultado, as porcentagens de desconto usadas para classificar os produtos refletem a promoção indexada, produzindo uma ordem de classificação incorreta nas Páginas de Produtos.

## Simulação

Em uma loja com promoções ou descontos específicos para canais de vendas específicos, acesse qualquer Página de Produtos enquanto estiver classificando por melhor desconto (`OrderByBestDiscountDESC` / `discount:desc`) — você notará que a ordem não reflete os descontos aplicáveis ​​ao canal de vendas ativo, pois o índice contém apenas os valores de desconto indexados.

## Workaround

N/A