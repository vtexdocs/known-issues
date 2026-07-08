---
title: 'A pesquisa inteligente de facetas oculta a faceta principal selecionada na seleção múltipla com detalhamento.'
slug: a-pesquisa-inteligente-de-facetas-oculta-a-faceta-principal-selecionada-na-selecao-multipla-com-detalhamento
status: PUBLISHED
createdAt: 2026-07-08T21:55:44.000Z
updatedAt: 2026-07-08T21:55:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-facets-hides-selected-parent-facet-in-multiselect-drilldown
locale: pt
kiStatus: Backlog
internalReference: 1432016
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar facetas de categoria da Busca Inteligente, a resposta da faceta pode se tornar inconsistente após combinar várias seleções do mesmo nível de categoria com a seleção de uma categoria filha.

Nesse cenário, as facetas da categoria pai selecionadas que não estão relacionadas à faceta da categoria filha selecionada podem parar de aparecer na resposta da API, mesmo que ainda estejam aplicadas.

Ao mesmo tempo, a resposta da faceta da categoria filha pode continuar mostrando valores inconsistentes com as facetas da categoria pai retornadas.

Como resultado, os filtros exibidos ao usuário podem não corresponder aos filtros que foram realmente selecionados, o que pode dificultar a navegação e a remoção de filtros.

## Simulação

Em uma loja que usa facetas de categoria da Busca Inteligente, selecione vários valores do mesmo nível de categoria.

Em seguida, selecione uma faceta de categoria filha relacionada apenas a parte da seleção atual.

Depois disso, as facetas da categoria pai que não estão relacionadas à faceta da categoria filha selecionada podem parar de aparecer na resposta da API, mesmo que ainda estejam aplicadas.

Ao mesmo tempo, a resposta da faceta da categoria filha pode continuar a exibir valores inconsistentes com as facetas da categoria pai retornadas.

## Workaround

N/A