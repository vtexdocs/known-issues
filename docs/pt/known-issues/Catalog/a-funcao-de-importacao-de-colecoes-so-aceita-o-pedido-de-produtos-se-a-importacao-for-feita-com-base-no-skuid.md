---
title: 'A função de importação de coleções só aceita o pedido de produtos se a importação for feita com base no "skuId"'
slug: a-funcao-de-importacao-de-colecoes-so-aceita-o-pedido-de-produtos-se-a-importacao-for-feita-com-base-no-skuid
status: PUBLISHED
createdAt: 2023-12-15T16:34:57.000Z
updatedAt: 2023-12-21T18:54:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: import-collection-only-accepts-the-order-of-products-if-import-is-made-based-on-skuid
locale: pt
kiStatus: Fixed
internalReference: 953862
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao importar uma planilha de produtos para uma coleção, o usuário pode optar por selecionar os produtos por "skuId", "productId", "skuRefId" ou "productRefId".

No entanto, a ordem dos produtos na coleção só é respeitada quando a planilha utiliza "skuId".

## Simulação

1. Crie uma nova coleção;
2. Use a importação de planilha para adicionar produtos;
3. Escolha um campo diferente de "skuId" para preencher a planilha;
4. Verifique se a ordem dos produtos na coleção é diferente da ordem na planilha.

## Workaround

Use a coluna "skuId" para preencher a planilha.