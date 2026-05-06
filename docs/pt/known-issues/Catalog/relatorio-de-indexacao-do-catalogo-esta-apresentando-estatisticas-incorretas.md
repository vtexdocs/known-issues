---
title: 'Relatório de indexação do catálogo está apresentando estatísticas incorretas'
slug: relatorio-de-indexacao-do-catalogo-esta-apresentando-estatisticas-incorretas
status: PUBLISHED
createdAt: 2022-01-07T17:05:40.000Z
updatedAt: 2026-02-14T02:07:28.000Z
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

Devido a alterações na arquitetura do fluxo de trabalho de indexação de produtos, o relatório de indexação do catálogo (“RelatorioIndexacao.aspx”) não é mais atualizado corretamente, apresentando estatísticas incorretas.

## Simulação

Compare a contagem total de produtos no Relatório de Indexação, na página de administração do catálogo e nos resultados de pesquisa da loja. Os valores apresentarão discrepâncias significativas.

## Workaround

As lojas que utilizam a Pesquisa Inteligente podem recorrer à página de administração do Histórico de Indexação para obter uma visão semelhante.