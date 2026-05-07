---
title: 'A planilha de mapeamento de categorias não inclui ofertas em "Aguardando revisão"'
slug: a-planilha-de-mapeamento-de-categorias-nao-inclui-ofertas-em-aguardando-revisao
status: PUBLISHED
createdAt: 2026-05-04T19:22:28.000Z
updatedAt: 2026-05-07T17:05:39.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: category-mapping-spreadsheet-does-not-include-offers-in-waitingreview
locale: pt
kiStatus: Backlog
internalReference: 1401046
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao baixar a planilha de mapeamento de categorias no módulo do marketplace, o sistema atualmente busca apenas **ofertas com o status Pendente**. Ofertas em outros status, como **AguardandoRevisão**, não são incluídas no conjunto de dados usado para gerar o arquivo.

## Simulação

- Quando a oferta está **Pendente**, ela é retornada pela consulta e a planilha é gerada com todas as colunas esperadas, incluindo `categoria não mapeada`.
- Quando a oferta está **Aguardando revisão**, ela **não é retornada** pela consulta usada para criar a planilha.
- Como resultado, a planilha **não contém essas ofertas** e, portanto, **a** coluna `category unmapped` **não é preenchida** para elas.

## Workaround

N/A