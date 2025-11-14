---
title: 'Filtro de categoria da IU da coleção legada selecionando produtos erroneamente para a coleção'
slug: filtro-de-categoria-da-iu-da-colecao-legada-selecionando-produtos-erroneamente-para-a-colecao
status: PUBLISHED
createdAt: 2025-11-14T19:12:11.593Z
updatedAt: 2025-11-14T19:12:11.593Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-ui-category-filter-selecting-products-wrongly-to-the-collection
locale: pt
kiStatus: Backlog
internalReference: 590934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Eventualmente, dependendo do número de produtos que temos em uma categoria, se selecionarmos os filtros de categorias na interface do usuário da coleção legada, ela poderá retornar produtos que não pertencem a essas categorias.
## Simulação



- Crie uma coleção usando a interface do usuário da coleção legada;
- Insira produtos usando o filtro de categorias; as categorias devem ter um grande número de produtos.
- Às vezes, a coleção pode ter produtos que não pertencem a essa categoria
## Workaround



- Na UI da coleção herdada, crie um filtro para remover a categoria desse produto.