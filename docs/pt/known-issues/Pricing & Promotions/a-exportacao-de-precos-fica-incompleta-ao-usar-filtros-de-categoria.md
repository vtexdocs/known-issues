---
title: 'A exportação de preços fica incompleta ao usar filtros de categoria'
slug: a-exportacao-de-precos-fica-incompleta-ao-usar-filtros-de-categoria
status: PUBLISHED
createdAt: 2023-02-14T12:11:51.000Z
updatedAt: 2023-02-17T12:22:20.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-export-incomplete-when-using-category-filters
locale: pt
kiStatus: Backlog
internalReference: 753466
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar exportar uma planilha de preços fixos usando os filtros de categoria, alguns SKUs não aparecem na planilha, apesar de terem preços fixos. O número habitual de SKUs retornados é 250.

## Simulação

1. Selecione uma categoria com mais de 250 SKUs com preços fixos e use o filtro na interface de preços;
2. Exporte os preços fixos;
3. Verifique se alguns SKUs não foram exportados e, portanto, não aparecem na planilha.

## Workaround

Use filtros diferentes ou uma **combinação do filtro de categoria com outro filtro**.