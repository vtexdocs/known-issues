---
title: 'Tempo limite dos filtros do catálogo'
slug: tempo-limite-dos-filtros-do-catalogo
status: PUBLISHED
createdAt: 2023-10-19T20:11:21.000Z
updatedAt: 2026-10-23T23:32:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: pt
kiStatus: Backlog
internalReference: 922350
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para lojas com um grande número de SKUs (5 milhões ou mais), frequentemente, ao filtrar usando os filtros da interface do catálogo, seja no menu principal ou na seção de relatórios, se a consulta de filtro retornar um resultado muito grande, a interface expira (erro 504 - tempo limite do gateway).

## Simulação

Não há uma maneira confiável de simular isso de forma consistente - apenas consultas grandes específicas para algumas contas resultam no erro.

## Workaround

Filtre para lotes menores de produtos ao usar os filtros da interface do catálogo.