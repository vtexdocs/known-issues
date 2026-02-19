---
title: 'Relatório de indexação do catálogo retornando estatísticas incorretas'
slug: relatorio-de-indexacao-do-catalogo-retornando-estatisticas-incorretas
status: PUBLISHED
createdAt: 2026-02-19T15:36:31.267Z
updatedAt: 2026-02-19T15:36:31.267Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexing-report-returning-wrong-stats
locale: pt
kiStatus: No Fix
internalReference: 499450
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Devido a alterações arquitetônicas no fluxo de trabalho de indexação de produtos, o relatório de indexação do catálogo (“RelatórioIndexação.aspx”) não é mais atualizado corretamente, apresentando estatísticas incorretas.

## Simulação

Compare a contagem total de produtos no Relatório de Indexação, na página de administração do catálogo e nos resultados de pesquisa da loja. Os valores apresentarão discrepâncias significativas.

## Workaround

As lojas que utilizam a Pesquisa Inteligente podem recorrer à página de administração do Histórico de Indexação para obter uma visualização semelhante.