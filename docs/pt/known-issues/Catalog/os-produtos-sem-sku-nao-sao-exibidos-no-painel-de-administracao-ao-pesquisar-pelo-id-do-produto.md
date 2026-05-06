---
title: 'Os produtos sem SKU não são exibidos no painel de administração ao pesquisar pelo ID do produto'
slug: os-produtos-sem-sku-nao-sao-exibidos-no-painel-de-administracao-ao-pesquisar-pelo-id-do-produto
status: PUBLISHED
createdAt: 2023-01-25T19:01:39.000Z
updatedAt: 2023-04-12T19:03:31.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-without-sku-are-not-returned-in-the-admin-when-searching-by-product-id
locale: pt
kiStatus: Backlog
internalReference: 740431
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os produtos sem SKU não são exibidos no painel de administração ao pesquisar pelo ID do produto

## Simulação

- Acesse o painel de administração do catálogo
- Clique no link "Pesquisar ou filtrar resultados"
- Insira um ID de produto sem SKUs
- Clique no botão “Pesquisar”
Nenhum resultado será exibido

## Workaround

Use a API do catálogo
Pesquise por outras chaves, como REFid ou EAN