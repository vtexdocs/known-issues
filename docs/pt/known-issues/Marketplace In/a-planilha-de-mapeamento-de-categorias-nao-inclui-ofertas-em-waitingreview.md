---
title: 'A planilha de mapeamento de categorias não inclui ofertas em WaitingReview.'
slug: a-planilha-de-mapeamento-de-categorias-nao-inclui-ofertas-em-waitingreview
status: PUBLISHED
createdAt: 2026-05-04T19:22:28.000Z
updatedAt: 2026-09-22T20:23:41.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: category-mapping-spreadsheet-does-not-include-offers-in-waitingreview
locale: pt
kiStatus: Backlog
internalReference: 1401046
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao baixar a planilha de mapeamento de categorias no módulo de marketplace, o sistema atualmente busca apenas **ofertas com status Pendente**. Ofertas com outros status, como **Aguardando Análise**, não são incluídas no conjunto de dados usado para gerar o arquivo.

## Simulação

- Quando a oferta está **Pendente**, ela é retornada pela consulta e a planilha é gerada com todas as colunas esperadas, incluindo `categoria não mapeada`.

- Quando a oferta está **Aguardando Análise**, ela **não é retornada** pela consulta usada para gerar a planilha.

- Como resultado, a planilha **não contém essas ofertas** e, portanto, a coluna **categoria não mapeada** não é preenchida para elas.

## Workaround

N/A