---
title: 'Erro persistente: "Categoria XXX não encontrada no mapeamento de nós de navegação para a especificação de departamento do SKU; escolha uma categoria global mais específica"'
slug: erro-persistente-categoria-xxx-nao-encontrada-no-mapeamento-de-nos-de-navegacao-para-a-especificacao-de-departamento-do-sku-escolha-uma-categoria-global-mais-especifica
status: PUBLISHED
createdAt: 2021-08-23T20:13:33.000Z
updatedAt: 2025-06-23T15:57:35.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: erro-category-xxx-not-found-in-browse-node-mapping-for-skus-department-specification-choose-a-more-specific-global-category-persistente
locale: pt
kiStatus: Fixed
internalReference: 417639
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Estamos encontrando os erros abaixo ao tentar integrar algumas SKUs. Testamos com as categorias globais: 166, 167 e 169, mas nenhuma delas está funcionando, embora essas categorias devam estar disponíveis na Amazon.

Erro "Categoria 169 não encontrada no mapeamento de nós de navegação para a especificação de departamento da SKU; escolha uma categoria global mais específica" persistente

## Simulação

Nos produtos da ponte, podemos ver o erro abaixo:

Erro "Categoria 169 não encontrada no mapeamento do nó de navegação para a especificação do departamento do SKU. Escolha uma categoria global mais específica" persistente

## Workaround

Altere a categoria global até que consertemos isso.