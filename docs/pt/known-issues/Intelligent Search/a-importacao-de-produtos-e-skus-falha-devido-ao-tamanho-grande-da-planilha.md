---
title: 'A importação de produtos e SKUs falha devido ao tamanho grande da planilha.'
slug: a-importacao-de-produtos-e-skus-falha-devido-ao-tamanho-grande-da-planilha
status: PUBLISHED
createdAt: 2026-06-29T17:31:05.000Z
updatedAt: 2026-06-29T17:31:05.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-and-sku-import-fails-for-large-size-of-spreadsheet-file
locale: pt
kiStatus: Backlog
internalReference: 1427405
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao importar produtos e SKUs por meio de planilhas, o upload pode falhar mesmo quando a planilha é dividida em lotes menores por número de linhas. O sintoma visível é um erro `413 Entidade de solicitação muito grande` durante o fluxo de importação.

Isso afeta cenários em que o tamanho do arquivo da planilha excede o limite suportado pelo fluxo de importação atual, que é de aproximadamente 4,5 MB.

## Simulação

1. Abra o **Admin** e acesse o fluxo de importação de **Produtos e SKUs**.

2. Prepare um arquivo de planilha cujo tamanho total seja superior a 4,5 MB.

3. Faça o upload do arquivo no fluxo de importação.

4. Observe que a solicitação falha durante o upload e pode retornar um erro `413 Entidade de solicitação muito grande` antes de chegar ao fluxo de processamento de back-end.

## Workaround

Divida a importação em arquivos de planilha menores de aproximadamente 4,5 MB sempre que possível e faça o upload de cada arquivo separadamente.