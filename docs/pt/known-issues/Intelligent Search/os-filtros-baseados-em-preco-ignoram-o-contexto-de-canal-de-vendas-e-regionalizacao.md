---
title: 'Os filtros baseados em preço ignoram o contexto de canal de vendas e regionalização.'
slug: os-filtros-baseados-em-preco-ignoram-o-contexto-de-canal-de-vendas-e-regionalizacao
status: PUBLISHED
createdAt: 2026-07-07T20:38:08.000Z
updatedAt: 2026-07-07T20:38:08.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: pricebased-filters-ignore-sales-channel-and-regionalization-context
locale: pt
kiStatus: Backlog
internalReference: 1431340
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar a Busca Inteligente com variação de canal de vendas ou regionalização (`regionId`), os filtros por faixa de preço não funcionam corretamente.

A regionalização e as políticas comerciais afetam a classificação e a filtragem por disponibilidade/estoque, mas a classificação e a filtragem por preço sempre usam o preço indexado como base. Isso também se aplica ao filtro “promotion=yes”.

Como os preços reais são definidos no momento da renderização, tanto o **filtro de faceta de preço** quanto o **filtro de faixa de preço** podem retornar produtos cujo preço efetivo regional ou de política comercial esteja fora da faixa solicitada e vice-versa.

## Simulação

Em uma loja com preços diferentes por região ou canal de vendas, acesse qualquer PLP enquanto aplica um filtro de faixa de preço ou a faceta de promoção — você notará que os resultados incluem produtos cujo preço contextual real não corresponde ao filtro selecionado, pois o índice contém apenas o preço base, independentemente do `regionId` ou do canal de vendas.

## Workaround

N/A