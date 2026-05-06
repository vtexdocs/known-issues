---
title: 'Implementação de categorias na Amazon'
slug: implementacao-de-categorias-na-amazon
status: PUBLISHED
createdAt: 2022-03-25T14:32:41.000Z
updatedAt: 2025-06-23T15:58:12.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-category-implementation
locale: pt
kiStatus: Fixed
internalReference: 549924
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Estamos encontrando os erros abaixo ao tentar integrar algumas SKUs. Testamos com as categorias globais: 166, 167 e 169, mas nenhuma delas está funcionando, embora essas categorias devam estar disponíveis na Amazon.

Erro "Categoria 169 não encontrada no mapeamento do nó de navegação para a especificação de departamento da SKU; escolha uma categoria global mais específica" persistente

## Simulação

Nos produtos da ponte, podemos ver o erro abaixo:

Erro "Categoria 169 não encontrada no mapeamento de nós de navegação para a especificação de departamento do SKU. Escolha uma categoria global mais específica" persistente

## Workaround

Altere a categoria global até que consertemos isso.